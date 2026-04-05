import { useMemo, useState } from 'react';

import { CartProvider, useCart } from './CartProvider';
import type { Locale } from '../lib/i18n';
import type { MenuCategory, Product } from '../lib/types';
import { localeIntlMap } from '../lib/i18n';

type Props = {
	locale: Locale;
	labels: {
		all: string;
		categories: Record<MenuCategory, string>;
		title: string;
		subtitle: string;
		details: string;
		addToCart: string;
		popular: string;
		tags: Record<string, string>;
		cart: {
			title: string;
			empty: string;
			viewCart: string;
			subtotal: string;
			deliveryFee: string;
			total: string;
			checkout: string;
			remove: string;
		};
		product: {
			quantity: string;
			options: string;
			addons: string;
			notes: string;
			specialInstructions: string;
		};
	};
	products: Product[];
	checkoutHref: string;
};

const formatPrice = (locale: Locale, value: number) =>
	new Intl.NumberFormat(localeIntlMap[locale], { style: 'currency', currency: 'USD' }).format(value);

function buildItemKey(product: Product, optionValues: Record<string, string>, addons: string[], notes: string) {
	return `${product.id}:${JSON.stringify(optionValues)}:${addons.sort().join(',')}:${notes.trim()}`;
}

function ExperienceInner({ locale, labels, products, checkoutHref }: Props) {
	const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
	const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
	const [notes, setNotes] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [cartOpen, setCartOpen] = useState(false);
	const { addItem, items, subtotal, deliveryFee, totalItems, removeItem } = useCart();

	const filteredProducts = useMemo(
		() => products.filter((product) => activeCategory === 'all' || product.category === activeCategory),
		[activeCategory, products],
	);
	const total = subtotal + deliveryFee;

	const modalPrice = useMemo(() => {
		if (!selectedProduct) return 0;
		const optionDelta = (selectedProduct.options ?? []).reduce((sum, option) => {
			const selected = option.choices.find((choice) => choice.id === selectedOptions[option.id]);
			return sum + (selected?.priceDelta ?? 0);
		}, 0);
		const addonDelta = (selectedProduct.addons ?? [])
			.filter((addon) => selectedAddons.includes(addon.id))
			.reduce((sum, addon) => sum + addon.price, 0);
		return (selectedProduct.price + optionDelta + addonDelta) * quantity;
	}, [quantity, selectedAddons, selectedOptions, selectedProduct]);

	const openModal = (product: Product) => {
		setSelectedProduct(product);
		setSelectedAddons([]);
		setNotes('');
		setQuantity(1);
		const defaults = Object.fromEntries((product.options ?? []).map((option) => [option.id, option.choices[0]?.id]));
		setSelectedOptions(defaults);
	};

	const closeModal = () => {
		setSelectedProduct(null);
	};

	const submitProduct = () => {
		if (!selectedProduct) return;
		addItem({
			key: buildItemKey(selectedProduct, selectedOptions, selectedAddons, notes),
			productId: selectedProduct.id,
			title: selectedProduct.title[locale],
			image: selectedProduct.image,
			price: selectedProduct.price,
			quantity,
			selectedOptions: (selectedProduct.options ?? []).map((option) => {
				const choice = option.choices.find((entry) => entry.id === selectedOptions[option.id]) ?? option.choices[0];
				return {
					group: option.label[locale],
					value: choice?.label[locale] ?? '',
					priceDelta: choice?.priceDelta,
				};
			}),
			selectedAddons: (selectedProduct.addons ?? [])
				.filter((addon) => selectedAddons.includes(addon.id))
				.map((addon) => ({
					label: addon.label[locale],
					price: addon.price,
				})),
			notes,
		});
		closeModal();
		setCartOpen(true);
	};

	return (
		<>
			<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
				<div className="space-y-6">
				<div className="paper-panel grain-mask rounded-[2rem] p-5 sm:p-6">
					<div className="flex flex-wrap gap-3">
						<button
							type="button"
							onClick={() => setActiveCategory('all')}
							className={`pill border ${activeCategory === 'all' ? 'bg-[color:var(--accent)] text-white' : 'bg-white/80 text-[color:var(--ink)]'}`}
						>
							{labels.all}
						</button>
						{Object.entries(labels.categories).map(([key, value]) => (
							<button
								key={key}
								type="button"
								onClick={() => setActiveCategory(key as MenuCategory)}
								className={`pill border ${activeCategory === key ? 'bg-[color:var(--ink)] text-white' : 'bg-white/80 text-[color:var(--ink)]'}`}
							>
								{value}
							</button>
						))}
					</div>
				</div>

				<div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
					{filteredProducts.map((product) => (
						<article key={product.id} className="paper-panel overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
							<div className="relative aspect-[4/3] overflow-hidden bg-[#efe0cb]">
								<img src={product.image} alt={product.title[locale]} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
								<div className="absolute left-4 top-4 flex flex-wrap gap-2">
									{product.tagKeys.slice(0, 2).map((tag) => (
										<span key={tag} className="rounded-full bg-black/65 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
											{labels.tags[tag] ?? tag}
										</span>
									))}
								</div>
							</div>
							<div className="space-y-4 p-4 sm:p-5">
								<div className="flex items-start justify-between gap-3">
									<div>
										<h3 className="text-xl font-semibold">{product.title[locale]}</h3>
										<p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{product.description[locale]}</p>
									</div>
									<div className="text-right text-lg font-semibold text-[color:var(--accent)]">{formatPrice(locale, product.price)}</div>
								</div>
								<button
									type="button"
									onClick={() => openModal(product)}
									className="w-full rounded-full bg-[color:var(--ink)] px-4 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent)]"
								>
									{labels.details}
								</button>
							</div>
						</article>
					))}
				</div>
				</div>

				<aside className="hidden lg:sticky lg:top-6 lg:block lg:h-fit">
					<div className="paper-panel rounded-[2rem] p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">{labels.popular}</p>
							<h3 className="mt-2 text-2xl font-semibold">{labels.cart.title}</h3>
						</div>
						<button type="button" onClick={() => setCartOpen((value) => !value)} className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium">
							{labels.cart.viewCart} ({totalItems})
						</button>
					</div>
					<div className="mt-6 space-y-3">
						{items.length === 0 ? (
							<p className="rounded-3xl bg-white/60 p-4 text-sm text-[color:var(--muted)]">{labels.cart.empty}</p>
						) : (
							items.map((item) => (
								<div key={item.key} className="rounded-3xl bg-white/70 p-4">
									<div className="flex items-start justify-between gap-3">
										<div>
											<p className="font-medium">{item.title}</p>
											<p className="mt-1 text-sm text-[color:var(--muted)]">× {item.quantity}</p>
										</div>
										<button type="button" onClick={() => removeItem(item.key)} className="text-sm text-[color:var(--accent)]">
											{labels.cart.remove}
										</button>
									</div>
								</div>
							))
						)}
					</div>
					<div className="mt-6 space-y-3 border-t border-[color:var(--line)] pt-4 text-sm">
						<div className="flex justify-between"><span>{labels.cart.subtotal}</span><span>{formatPrice(locale, subtotal)}</span></div>
						<div className="flex justify-between"><span>{labels.cart.deliveryFee}</span><span>{deliveryFee === 0 ? 'Free' : formatPrice(locale, deliveryFee)}</span></div>
						<div className="flex justify-between text-base font-semibold"><span>{labels.cart.total}</span><span>{formatPrice(locale, total)}</span></div>
					</div>
					<a href={checkoutHref} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 font-medium text-white transition hover:brightness-105">
						{labels.cart.checkout}
					</a>
					</div>
				</aside>

				{selectedProduct && (
					<div className="fixed inset-0 z-40 grid place-items-center bg-black/50 p-4 backdrop-blur-sm">
					<div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-[color:var(--panel-strong)] p-6 shadow-2xl">
						<div className="grid gap-6 md:grid-cols-[1.1fr_minmax(0,1fr)]">
							<img src={selectedProduct.image} alt={selectedProduct.title[locale]} className="aspect-square w-full rounded-[1.75rem] object-cover" />
							<div className="space-y-5">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-3xl font-semibold">{selectedProduct.title[locale]}</h3>
										<p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{selectedProduct.description[locale]}</p>
									</div>
									<button type="button" onClick={closeModal} className="text-2xl leading-none">×</button>
								</div>

								{selectedProduct.options && selectedProduct.options.length > 0 && (
									<div>
										<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{labels.product.options}</p>
										<div className="space-y-4">
											{selectedProduct.options.map((option) => (
												<div key={option.id}>
													<p className="mb-2 text-sm font-medium">{option.label[locale]}</p>
													<div className="flex flex-wrap gap-2">
														{option.choices.map((choice) => (
															<button
																key={choice.id}
																type="button"
																onClick={() => setSelectedOptions((current) => ({ ...current, [option.id]: choice.id }))}
																className={`rounded-full border px-3 py-2 text-sm ${
																	selectedOptions[option.id] === choice.id ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white' : 'border-[color:var(--line)] bg-white'
																}`}
															>
																{choice.label[locale]}
																{choice.priceDelta ? ` (+${formatPrice(locale, choice.priceDelta)})` : ''}
															</button>
														))}
													</div>
												</div>
											))}
										</div>
									</div>
								)}

								{selectedProduct.addons && selectedProduct.addons.length > 0 && (
									<div>
										<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{labels.product.addons}</p>
										<div className="space-y-2">
											{selectedProduct.addons.map((addon) => (
												<label key={addon.id} className="flex cursor-pointer items-center justify-between rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm">
													<span>{addon.label[locale]}</span>
													<span className="flex items-center gap-3">
														<span>+{formatPrice(locale, addon.price)}</span>
														<input
															type="checkbox"
															checked={selectedAddons.includes(addon.id)}
															onChange={() =>
																setSelectedAddons((current) =>
																	current.includes(addon.id) ? current.filter((value) => value !== addon.id) : [...current, addon.id],
																)
															}
														/>
													</span>
												</label>
											))}
										</div>
									</div>
								)}

								<div className="grid gap-4 sm:grid-cols-[140px_minmax(0,1fr)]">
									<div>
										<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{labels.product.quantity}</p>
										<div className="flex items-center rounded-full border border-[color:var(--line)] bg-white">
											<button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 py-3 text-lg">-</button>
											<div className="min-w-12 text-center text-sm font-medium">{quantity}</div>
											<button type="button" onClick={() => setQuantity((value) => value + 1)} className="px-4 py-3 text-lg">+</button>
										</div>
									</div>
									<div>
										<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{labels.product.notes}</p>
										<textarea
											value={notes}
											onChange={(event) => setNotes(event.target.value)}
											placeholder={labels.product.specialInstructions}
											className="min-h-24 w-full rounded-3xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm outline-none"
										/>
									</div>
								</div>

								<button type="button" onClick={submitProduct} className="w-full rounded-full bg-[color:var(--ink)] px-5 py-4 text-base font-semibold text-white transition hover:bg-[color:var(--accent)]">
									{labels.addToCart} · {formatPrice(locale, modalPrice)}
								</button>
							</div>
						</div>
					</div>
					</div>
				)}

				{cartOpen && !selectedProduct && (
					<>
						<div
							className="fixed inset-0 z-30 bg-black/35 backdrop-blur-[2px] lg:hidden"
							onClick={() => setCartOpen(false)}
						/>
						<div className="fixed inset-x-0 bottom-0 z-40 flex max-h-[72vh] flex-col rounded-t-[2rem] border-t border-[color:var(--line)] bg-[color:var(--panel-strong)] px-4 pt-4 shadow-[0_-24px_60px_rgba(0,0,0,0.16)] lg:hidden">
							<div className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col overflow-hidden">
								<div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-black/10" />
								<div className="mb-3 flex items-center justify-between gap-3">
									<div>
										<p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">{labels.popular}</p>
										<h3 className="mt-2 text-2xl font-semibold">{labels.cart.title}</h3>
									</div>
									<button
										type="button"
										onClick={() => setCartOpen(false)}
										className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium"
									>
										×
									</button>
								</div>
								<div className="min-h-0 flex-1 space-y-3 overflow-y-auto">
									{items.length === 0 ? (
										<p className="rounded-3xl bg-white/60 p-4 text-sm text-[color:var(--muted)]">{labels.cart.empty}</p>
									) : (
										items.map((item) => (
											<div key={item.key} className="rounded-3xl bg-white/70 px-4 py-3.5">
												<div className="flex items-start justify-between gap-3">
													<div>
														<p className="font-medium">{item.title}</p>
														<p className="mt-1 text-sm text-[color:var(--muted)]">× {item.quantity} pcs</p>
													</div>
													<button
														type="button"
														onClick={() => removeItem(item.key)}
														className="text-sm text-[color:var(--accent)]"
													>
														{labels.cart.remove}
													</button>
												</div>
											</div>
										))
									)}
								</div>
								<div className="mt-3 border-t border-[color:var(--line)] bg-[color:var(--panel-strong)] pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
									<div className="space-y-3 text-sm">
										<div className="flex justify-between"><span>{labels.cart.subtotal}</span><span>{formatPrice(locale, subtotal)}</span></div>
										<div className="flex justify-between"><span>{labels.cart.deliveryFee}</span><span>{deliveryFee === 0 ? 'Free' : formatPrice(locale, deliveryFee)}</span></div>
										<div className="flex justify-between text-base font-semibold"><span>{labels.cart.total}</span><span>{formatPrice(locale, total)}</span></div>
									</div>
									<a
										href={checkoutHref}
										className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-4 text-sm font-semibold text-white shadow-lg"
									>
										{labels.cart.checkout}
									</a>
								</div>
							</div>
						</div>
					</>
				)}
			</div>

			<div className={`fixed inset-x-0 bottom-0 z-20 border-t border-[color:var(--line)] bg-[color:var(--panel-strong)]/95 p-3 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-16px_40px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden ${cartOpen ? 'hidden' : ''}`}>
				<div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
					<button
						type="button"
						onClick={() => setCartOpen((value) => !value)}
						className="flex min-h-[52px] min-w-0 items-center rounded-[1.5rem] border border-[color:var(--line)] bg-white/80 px-4 py-3 text-left"
					>
						<span className="truncate text-sm font-semibold text-[color:var(--ink)]">
							{totalItems} pcs · {formatPrice(locale, total)}
						</span>
					</button>
					<a
						href={checkoutHref}
						className="inline-flex min-h-[52px] items-center justify-center rounded-[1.5rem] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg"
					>
						{labels.cart.checkout}
					</a>
				</div>
			</div>
		</>
	);
}

export function ShopExperience(props: Props) {
	return (
		<CartProvider>
			<ExperienceInner {...props} />
		</CartProvider>
	);
}
