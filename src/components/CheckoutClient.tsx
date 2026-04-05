import { useState } from 'react';

import { CartProvider, useCart } from './CartProvider';
import { localeIntlMap, type Locale } from '../lib/i18n';
import { siteConfig } from '../lib/site';

type Props = {
	locale: Locale;
	labels: {
		checkout: {
			title: string;
			subtitle: string;
			customerInfo: string;
			fullName: string;
			phone: string;
			email: string;
			fulfillment: string;
			delivery: string;
			pickup: string;
			address: string;
			city: string;
			postalCode: string;
			notes: string;
			payment: string;
			stripe: string;
			cash: string;
			submitDelivery: string;
			submitPickup: string;
			empty: string;
			backToMenu: string;
			secureNote: string;
		};
		cart: {
			subtotal: string;
			deliveryFee: string;
			total: string;
			remove: string;
		};
	};
};

const formatPrice = (locale: Locale, value: number) =>
	new Intl.NumberFormat(localeIntlMap[locale], { style: 'currency', currency: 'USD' }).format(value);

function CheckoutInner({ locale, labels }: Props) {
	const { items, subtotal, deliveryFee, totalItems, removeItem, clearCart } = useCart();
	const [fulfillment, setFulfillment] = useState<'delivery' | 'pickup'>('delivery');
	const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cash'>('stripe');
	const [form, setForm] = useState({
		fullName: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		postalCode: '',
		notes: '',
	});

	if (items.length === 0) {
		return (
			<div className="paper-panel rounded-[2rem] p-8 text-center">
				<p className="text-lg">{labels.checkout.empty}</p>
				<a href={`/${locale}/`} className="mt-6 inline-flex rounded-full bg-[color:var(--ink)] px-5 py-3 font-medium text-white">
					{labels.checkout.backToMenu}
				</a>
			</div>
		);
	}

	const effectiveDeliveryFee = fulfillment === 'pickup' ? 0 : deliveryFee;
	const orderTotal = subtotal + effectiveDeliveryFee;

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const orderId = `SHU-${Date.now().toString().slice(-8)}`;
		const payload = {
			orderId,
			locale,
			items,
			subtotal,
			deliveryFee: effectiveDeliveryFee,
			total: orderTotal,
			fulfillment,
			paymentMethod,
			customer: form,
			meta: {
				futurePaymentProvider: paymentMethod === 'stripe' ? 'stripe-checkout-session' : 'cash-on-delivery',
				currency: siteConfig.currency,
			},
		};
		localStorage.setItem('shushi:last-order', JSON.stringify(payload));
		clearCart();
		window.location.href = `/${locale}/order-success/?order=${orderId}`;
	};

	return (
		<form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
			<div className="paper-panel rounded-[2rem] p-6 sm:p-8">
				<div className="mb-8">
					<h2 className="text-3xl font-semibold">{labels.checkout.title}</h2>
					<p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{labels.checkout.subtitle}</p>
				</div>

				<div className="grid gap-6">
					<section>
						<h3 className="mb-4 text-lg font-semibold">{labels.checkout.customerInfo}</h3>
						<div className="grid gap-4 sm:grid-cols-2">
							<input required placeholder={labels.checkout.fullName} value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3" />
							<input required placeholder={labels.checkout.phone} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3" />
							<input required type="email" placeholder={labels.checkout.email} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 sm:col-span-2" />
						</div>
					</section>

					<section>
						<h3 className="mb-4 text-lg font-semibold">{labels.checkout.fulfillment}</h3>
						<div className="grid gap-3 sm:grid-cols-2">
							<button type="button" onClick={() => setFulfillment('delivery')} className={`rounded-3xl border px-5 py-4 text-left ${fulfillment === 'delivery' ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white' : 'bg-white'}`}>{labels.checkout.delivery}</button>
							<button type="button" onClick={() => setFulfillment('pickup')} className={`rounded-3xl border px-5 py-4 text-left ${fulfillment === 'pickup' ? 'border-[color:var(--ink)] bg-[color:var(--ink)] text-white' : 'bg-white'}`}>{labels.checkout.pickup}</button>
						</div>
					</section>

					{fulfillment === 'delivery' && (
						<section className="grid gap-4 sm:grid-cols-2">
							<input required placeholder={labels.checkout.address} value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 sm:col-span-2" />
							<input required placeholder={labels.checkout.city} value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3" />
							<input required placeholder={labels.checkout.postalCode} value={form.postalCode} onChange={(event) => setForm({ ...form, postalCode: event.target.value })} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3" />
						</section>
					)}

					<section>
						<h3 className="mb-4 text-lg font-semibold">{labels.checkout.payment}</h3>
						<div className="grid gap-3 sm:grid-cols-2">
							<label className={`rounded-3xl border p-4 ${paymentMethod === 'stripe' ? 'border-[color:var(--accent)] bg-white' : 'bg-white/70'}`}>
								<input type="radio" name="payment" className="mr-3" checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} />
								{labels.checkout.stripe}
							</label>
							<label className={`rounded-3xl border p-4 ${paymentMethod === 'cash' ? 'border-[color:var(--accent)] bg-white' : 'bg-white/70'}`}>
								<input type="radio" name="payment" className="mr-3" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
								{labels.checkout.cash}
							</label>
						</div>
						<p className="mt-3 text-sm text-[color:var(--muted)]">{labels.checkout.secureNote}</p>
					</section>

					<textarea placeholder={labels.checkout.notes} value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className="min-h-28 rounded-3xl border border-[color:var(--line)] bg-white px-4 py-3" />
				</div>
			</div>

			<aside className="lg:sticky lg:top-6 lg:h-fit">
				<div className="paper-panel rounded-[2rem] p-6">
					<div className="space-y-3">
						{items.map((item) => (
							<div key={item.key} className="rounded-3xl bg-white/70 p-4">
								<div className="flex items-start justify-between gap-3">
									<div>
										<p className="font-medium">{item.title}</p>
										<p className="text-sm text-[color:var(--muted)]">× {item.quantity}</p>
									</div>
									<button type="button" onClick={() => removeItem(item.key)} className="text-sm text-[color:var(--accent)]">
										{labels.cart.remove}
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="mt-6 space-y-3 border-t border-[color:var(--line)] pt-4 text-sm">
						<div className="flex justify-between"><span>{labels.cart.subtotal}</span><span>{formatPrice(locale, subtotal)}</span></div>
						<div className="flex justify-between"><span>{labels.cart.deliveryFee}</span><span>{effectiveDeliveryFee === 0 ? 'Free' : formatPrice(locale, effectiveDeliveryFee)}</span></div>
						<div className="flex justify-between text-base font-semibold"><span>{labels.cart.total}</span><span>{formatPrice(locale, orderTotal)}</span></div>
					</div>
					<button type="submit" className="mt-6 w-full rounded-full bg-[color:var(--accent)] px-5 py-4 text-base font-semibold text-white">
						{fulfillment === 'delivery' ? labels.checkout.submitDelivery : labels.checkout.submitPickup} · {formatPrice(locale, orderTotal)}
					</button>
					<p className="mt-3 text-center text-sm text-[color:var(--muted)]">{totalItems} items</p>
				</div>
			</aside>
		</form>
	);
}

export function CheckoutClient(props: Props) {
	return (
		<CartProvider>
			<CheckoutInner {...props} />
		</CartProvider>
	);
}
