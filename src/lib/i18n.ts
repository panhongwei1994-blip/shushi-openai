export const locales = ['en', 'zh', 'fr', 'de', 'es', 'pt', 'it'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	zh: '中文',
	fr: 'Français',
	de: 'Deutsch',
	es: 'Español',
	pt: 'Português',
	it: 'Italiano',
};

export const localeIntlMap: Record<Locale, string> = {
	en: 'en-US',
	zh: 'zh-CN',
	fr: 'fr-FR',
	de: 'de-DE',
	es: 'es-ES',
	pt: 'pt-PT',
	it: 'it-IT',
};

export function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

export function localePath(locale: Locale, pathname = '/') {
	const normalized = pathname === '/' ? '' : pathname.replace(/^\/+|\/+$/g, '');
	return `/${locale}/${normalized}`.replace(/\/+$/, '/') || `/${locale}/`;
}

export function absoluteUrl(site: URL, pathname: string) {
	return new URL(pathname, site).toString();
}
