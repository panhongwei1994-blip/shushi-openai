import type { TouchEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';

type TestimonialItem = {
	name: string;
	quote: string;
	avatar: string;
};

type Props = {
	title: string;
	subtitle: string;
	intro: string;
	items: TestimonialItem[];
};

function chunkItems(items: TestimonialItem[], size: number) {
	const pages: TestimonialItem[][] = [];
	for (let index = 0; index < items.length; index += size) {
		pages.push(items.slice(index, index + size));
	}
	return pages;
}

export function TestimonialsCarousel({ title, subtitle, intro, items }: Props) {
	const [perPage, setPerPage] = useState(1);
	const [page, setPage] = useState(0);
	const [touchStartX, setTouchStartX] = useState<number | null>(null);
	const [touchDeltaX, setTouchDeltaX] = useState(0);

	useEffect(() => {
		const update = () => {
			setPerPage(window.innerWidth >= 1024 ? 2 : 1);
		};

		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	const pages = useMemo(() => chunkItems(items, perPage), [items, perPage]);

	useEffect(() => {
		setPage((current) => Math.min(current, Math.max(pages.length - 1, 0)));
	}, [pages.length]);

	const next = () => setPage((current) => (current + 1) % pages.length);
	const previous = () => setPage((current) => (current - 1 + pages.length) % pages.length);

	const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
		setTouchStartX(event.touches[0]?.clientX ?? null);
		setTouchDeltaX(0);
	};

	const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
		if (touchStartX === null) return;
		setTouchDeltaX(event.touches[0].clientX - touchStartX);
	};

	const handleTouchEnd = () => {
		if (touchStartX === null) return;
		if (touchDeltaX <= -50) next();
		if (touchDeltaX >= 50) previous();
		setTouchStartX(null);
		setTouchDeltaX(0);
	};

	return (
		<div className="paper-panel rounded-[2.5rem] p-8">
			<div className="flex items-start justify-between gap-4">
				<div className="max-w-2xl">
					<p className="pill bg-[color:var(--gold)]/15 text-[color:var(--gold)]">{title}</p>
					<h2 className="section-title mt-4 leading-none">{subtitle}</h2>
					<p className="section-copy mt-4">{intro}</p>
				</div>
				<div className="hidden items-center gap-2 sm:flex">
					<button
						type="button"
						onClick={previous}
						aria-label="Previous slide"
						className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-base text-[color:var(--ink)] transition hover:bg-white"
					>
						‹
					</button>
					<button
						type="button"
						onClick={next}
						aria-label="Next slide"
						className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-base text-[color:var(--ink)] transition hover:bg-white"
					>
						›
					</button>
				</div>
			</div>

			<div
				className="mt-8 overflow-hidden touch-pan-y"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="flex transition-transform duration-500 ease-out"
					style={{ transform: `translateX(-${page * 100}%)` }}
				>
					{pages.map((group, pageIndex) => (
						<div key={pageIndex} className="grid min-w-full gap-4 lg:grid-cols-2">
							{group.map((item) => (
								<article key={item.name} className="rounded-[2.1rem] bg-white/70 p-6 sm:p-7">
									<div className="flex items-center gap-4">
										<img
											src={item.avatar}
											alt={item.name}
											loading="lazy"
											className="h-16 w-16 rounded-full object-cover ring-2 ring-white/80"
										/>
										<div>
											<p className="text-[1.05rem] font-semibold text-[color:var(--ink)]">{item.name}</p>
											<div className="mt-2 flex items-center gap-1 text-[color:var(--gold)]">
												{Array.from({ length: 5 }).map((_, index) => (
													<span key={index} aria-hidden="true" className="text-sm">
														★
													</span>
												))}
											</div>
										</div>
									</div>
									<p className="mt-6 text-[15px] leading-8 text-[color:var(--muted)] sm:text-base">{item.quote}</p>
								</article>
							))}
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-between sm:justify-center">
				<div className="flex items-center gap-2 sm:hidden">
					<button
						type="button"
						onClick={previous}
						aria-label="Previous slide"
						className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-sm text-[color:var(--ink)]"
					>
						‹
					</button>
					<button
						type="button"
						onClick={next}
						aria-label="Next slide"
						className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-sm text-[color:var(--ink)]"
					>
						›
					</button>
				</div>
				{pages.map((_, index) => (
					<button
						key={index}
						type="button"
						onClick={() => setPage(index)}
						aria-label={`Go to slide ${index + 1}`}
						className={`h-2.5 rounded-full transition-all ${index === page ? 'w-8 bg-[color:var(--ink)]' : 'w-2.5 bg-black/15'}`}
					/>
				))}
			</div>
		</div>
	);
}
