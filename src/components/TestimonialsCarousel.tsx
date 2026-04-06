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

	return (
		<div className="paper-panel rounded-[2.5rem] p-8">
			<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
				<div>
					<p className="pill bg-[color:var(--gold)]/15 text-[color:var(--gold)]">{title}</p>
					<h2 className="section-title mt-5">{subtitle}</h2>
					<p className="section-copy mt-4 max-w-2xl">{intro}</p>
				</div>
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={previous}
						aria-label="Previous slide"
						className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-lg text-[color:var(--ink)] transition hover:bg-white"
					>
						‹
					</button>
					<button
						type="button"
						onClick={next}
						aria-label="Next slide"
						className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-white/80 text-lg text-[color:var(--ink)] transition hover:bg-white"
					>
						›
					</button>
				</div>
			</div>

			<div className="mt-8 overflow-hidden">
				<div
					className="flex transition-transform duration-500 ease-out"
					style={{ transform: `translateX(-${page * 100}%)` }}
				>
					{pages.map((group, pageIndex) => (
						<div key={pageIndex} className="grid min-w-full gap-4 lg:grid-cols-2">
							{group.map((item) => (
								<article key={item.name} className="rounded-[2rem] bg-white/70 p-6 lg:p-7">
									<div className="flex items-center gap-4">
										<img
											src={item.avatar}
											alt={item.name}
											loading="lazy"
											className="h-16 w-16 rounded-full object-cover ring-2 ring-white/80"
										/>
										<div>
											<p className="text-lg font-semibold text-[color:var(--ink)]">{item.name}</p>
											<div className="mt-2 flex items-center gap-1 text-[color:var(--gold)]">
												{Array.from({ length: 5 }).map((_, index) => (
													<span key={index} aria-hidden="true" className="text-sm">
														★
													</span>
												))}
											</div>
										</div>
									</div>
									<p className="mt-6 text-[15px] leading-8 text-[color:var(--muted)]">{item.quote}</p>
								</article>
							))}
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-center gap-2">
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
