import { useState } from 'react';

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
	const chunks: TestimonialItem[][] = [];
	for (let index = 0; index < items.length; index += size) {
		chunks.push(items.slice(index, index + size));
	}
	return chunks;
}

export function TestimonialsSlider({ title, subtitle, intro, items }: Props) {
	const slides = chunkItems(items, 2);
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStartX, setTouchStartX] = useState<number | null>(null);

	const goTo = (index: number) => {
		if (!slides.length) return;
		if (index < 0) {
			setActiveIndex(slides.length - 1);
			return;
		}
		if (index >= slides.length) {
			setActiveIndex(0);
			return;
		}
		setActiveIndex(index);
	};

	const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
		setTouchStartX(event.touches[0]?.clientX ?? null);
	};

	const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
		if (touchStartX === null) return;
		const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
		const delta = touchEndX - touchStartX;
		if (Math.abs(delta) > 40) {
			goTo(activeIndex + (delta < 0 ? 1 : -1));
		}
		setTouchStartX(null);
	};

	return (
		<div className="paper-panel rounded-[2rem] p-4 sm:rounded-[2.5rem] sm:p-6">
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="pill bg-[color:var(--gold)]/15 text-[color:var(--gold)]">{title}</p>
					<h2 className="mt-3 text-[1.55rem] font-semibold leading-none sm:mt-4 sm:text-[2.1rem]">{subtitle}</h2>
					<p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:mt-3 sm:text-base sm:leading-7">{intro}</p>
				</div>
				<div className="hidden items-center gap-2 sm:flex">
					<button
						type="button"
						onClick={() => goTo(activeIndex - 1)}
						className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-lg text-[color:var(--ink)] transition hover:bg-white"
						aria-label="Previous testimonials"
					>
						‹
					</button>
					<button
						type="button"
						onClick={() => goTo(activeIndex + 1)}
						className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-lg text-[color:var(--ink)] transition hover:bg-white"
						aria-label="Next testimonials"
					>
						›
					</button>
				</div>
			</div>

			<div className="mt-4 sm:mt-5">
				<div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
					<div
						className="flex transition-transform duration-300 ease-out"
						style={{ transform: `translateX(-${activeIndex * 100}%)` }}
					>
						{slides.map((slide, slideIndex) => (
							<div key={slideIndex} className="w-full shrink-0">
								<div className="grid grid-cols-2 gap-3 sm:gap-3.5">
									{slide.map((item) => (
										<article key={item.name} className="rounded-[1.5rem] bg-white/70 p-3 sm:rounded-[1.9rem] sm:p-5">
											<div className="flex items-center gap-3">
												<img
													src={item.avatar}
													alt={item.name}
													loading="lazy"
													className="h-11 w-11 rounded-full object-cover ring-2 ring-white/80 sm:h-14 sm:w-14"
												/>
												<div className="min-w-0">
													<p className="truncate text-[15px] font-semibold text-[color:var(--ink)] sm:text-base">{item.name}</p>
													<div className="mt-1 flex items-center gap-1 text-[12px] text-[color:var(--gold)] sm:text-sm">
														<span>★</span>
														<span>★</span>
														<span>★</span>
														<span>★</span>
														<span>★</span>
													</div>
												</div>
											</div>
											<p className="mt-3 line-clamp-5 text-[13px] leading-5 text-[color:var(--muted)] sm:mt-4 sm:text-sm sm:leading-6">
												{item.quote}
											</p>
										</article>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-4 flex items-center justify-between sm:hidden">
					<div className="flex items-center gap-2">
						{slides.map((_, index) => (
							<button
								key={index}
								type="button"
								onClick={() => goTo(index)}
								aria-label={`Go to testimonial slide ${index + 1}`}
								className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[color:var(--ink)]' : 'w-2.5 bg-[color:var(--line)]'}`}
							/>
						))}
					</div>
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={() => goTo(activeIndex - 1)}
							className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-base text-[color:var(--ink)]"
							aria-label="Previous testimonials"
						>
							‹
						</button>
						<button
							type="button"
							onClick={() => goTo(activeIndex + 1)}
							className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/75 text-base text-[color:var(--ink)]"
							aria-label="Next testimonials"
						>
							›
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
