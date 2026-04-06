import type { PointerEvent, TouchEvent } from 'react';
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
	const [pointerStartX, setPointerStartX] = useState<number | null>(null);
	const [pointerDeltaX, setPointerDeltaX] = useState(0);

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

	const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
		setPointerStartX(event.clientX);
		setPointerDeltaX(0);
	};

	const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
		if (pointerStartX === null) return;
		setPointerDeltaX(event.clientX - pointerStartX);
	};

	const handlePointerEnd = () => {
		if (pointerStartX === null) return;
		if (pointerDeltaX <= -50) next();
		if (pointerDeltaX >= 50) previous();
		setPointerStartX(null);
		setPointerDeltaX(0);
	};

	const dragOffset = touchStartX !== null ? touchDeltaX : pointerStartX !== null ? pointerDeltaX : 0;

	return (
		<div className="paper-panel rounded-[2rem] p-4 sm:rounded-[2.5rem] sm:p-8">
			<div className="flex items-start justify-between gap-3 sm:gap-4">
				<div className="max-w-2xl">
					<p className="pill bg-[color:var(--gold)]/15 text-[color:var(--gold)]">{title}</p>
					<h2 className="mt-2 text-[1.5rem] font-semibold leading-none sm:mt-4 sm:text-[2.25rem]">{subtitle}</h2>
					<p className="mt-3 hidden max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:mt-4 sm:block sm:text-base sm:leading-7">{intro}</p>
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
				className="mt-4 overflow-hidden sm:mt-8"
				style={{ touchAction: 'pan-y' }}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerEnd}
				onPointerCancel={handlePointerEnd}
				onPointerLeave={handlePointerEnd}
			>
				<div
					className="flex transition-transform duration-500 ease-out"
					style={{ transform: `translateX(calc(-${page * 100}% + ${dragOffset}px))` }}
				>
					{pages.map((group, pageIndex) => (
						<div key={pageIndex} className="grid min-w-full gap-4 lg:grid-cols-2">
							{group.map((item) => (
								<article key={item.name} className="rounded-[1.5rem] bg-white/70 p-4 sm:rounded-[2.1rem] sm:p-7">
									<div className="flex items-center gap-3 sm:gap-4">
										<img
											src={item.avatar}
											alt={item.name}
											loading="lazy"
											className="h-14 w-14 rounded-full object-cover ring-2 ring-white/80 sm:h-16 sm:w-16"
										/>
										<div>
											<p className="text-base font-semibold text-[color:var(--ink)] sm:text-[1.05rem]">{item.name}</p>
											<div className="mt-1.5 flex items-center gap-1 text-[color:var(--gold)] sm:mt-2">
												{Array.from({ length: 5 }).map((_, index) => (
													<span key={index} aria-hidden="true" className="text-[13px] sm:text-sm">
														★
													</span>
												))}
											</div>
										</div>
									</div>
									<p className="mt-3 text-sm leading-6 text-[color:var(--muted)] sm:mt-6 sm:text-base sm:leading-8">{item.quote}</p>
								</article>
							))}
						</div>
					))}
				</div>
			</div>

			<div className="mt-3 flex items-center justify-between sm:mt-6 sm:justify-center">
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
