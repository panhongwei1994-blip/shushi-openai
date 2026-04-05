import { useEffect, useState } from 'react';

import { localePath, type Locale } from '../lib/i18n';

type Props = {
	locale: Locale;
	labels: {
		title: string;
		subtitle: string;
		orderLabel: string;
		backHome: string;
	};
};

type SavedOrder = {
	orderId: string;
	fulfillment: string;
	paymentMethod: string;
	total: number;
};

export function SuccessClient({ locale, labels }: Props) {
	const [order, setOrder] = useState<SavedOrder | null>(null);

	useEffect(() => {
		try {
			const saved = localStorage.getItem('shushi:last-order');
			if (saved) setOrder(JSON.parse(saved) as SavedOrder);
		} catch {
			localStorage.removeItem('shushi:last-order');
		}
	}, []);

	return (
		<div className="paper-panel rounded-[2rem] p-8 text-center sm:p-12">
			<div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[color:var(--accent)] text-3xl text-white shadow-lg">
				✓
			</div>
			<h1 className="text-4xl font-semibold">{labels.title}</h1>
			<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{labels.subtitle}</p>
			<div className="mx-auto mt-8 grid max-w-xl gap-4 rounded-[2rem] bg-white/70 p-5 text-left sm:grid-cols-3">
				<div>
					<p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">{labels.orderLabel}</p>
					<p className="mt-2 font-semibold">{order?.orderId ?? 'SHU-PREVIEW'}</p>
				</div>
				<div>
					<p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Method</p>
					<p className="mt-2 font-semibold">{order?.paymentMethod ?? 'stripe'}</p>
				</div>
				<div>
					<p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">Fulfillment</p>
					<p className="mt-2 font-semibold">{order?.fulfillment ?? 'delivery'}</p>
				</div>
			</div>
			<a href={localePath(locale)} className="mt-8 inline-flex rounded-full bg-[color:var(--ink)] px-5 py-3 font-medium text-white">
				{labels.backHome}
			</a>
		</div>
	);
}
