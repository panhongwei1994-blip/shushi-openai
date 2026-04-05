import { useMemo, useState } from 'react';

import { localeLabels, localePath, locales, stripLocalePrefix, type Locale } from '../lib/i18n';

type Props = {
	currentLocale: Locale;
	pathname: string;
};

export function LanguageSwitcher({ currentLocale, pathname }: Props) {
	const [open, setOpen] = useState(false);
	const normalized = useMemo(() => stripLocalePrefix(pathname), [pathname]);

	return (
		<div className="relative z-[120]">
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-white/70 px-4 py-2 text-sm font-medium text-[color:var(--ink)] shadow-sm backdrop-blur"
				aria-expanded={open}
			>
				<span className="inline-flex whitespace-nowrap leading-none">{localeLabels[currentLocale]}</span>
				<span aria-hidden="true">▾</span>
			</button>
			{open && (
				<div className="absolute right-0 z-[130] mt-3 min-w-44 rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-2 shadow-2xl backdrop-blur">
					{locales.map((locale) => (
						<a
							key={locale}
							href={localePath(locale, normalized)}
							className={`block whitespace-nowrap rounded-2xl px-3 py-2 text-sm transition hover:bg-black/5 ${
								locale === currentLocale ? 'bg-[color:var(--accent)] text-white' : 'text-[color:var(--ink)]'
							}`}
						>
							{localeLabels[locale]}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
