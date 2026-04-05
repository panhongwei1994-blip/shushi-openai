import type { Locale } from './i18n';

export type LocalizedString = Record<Locale, string>;

export type MenuCategory = 'sushi' | 'sashimi' | 'rolls' | 'drinks' | 'sides' | 'combo-meals';

export interface ProductChoice {
	id: string;
	label: LocalizedString;
	priceDelta?: number;
}

export interface ProductOption {
	id: string;
	label: LocalizedString;
	required?: boolean;
	choices: ProductChoice[];
}

export interface ProductAddon {
	id: string;
	label: LocalizedString;
	price: number;
}

export interface Product {
	id: string;
	slug: string;
	category: MenuCategory;
	price: number;
	image: string;
	title: LocalizedString;
	description: LocalizedString;
	tagKeys: string[];
	options?: ProductOption[];
	addons?: ProductAddon[];
}

export interface CartItem {
	key: string;
	productId: string;
	title: string;
	image: string;
	price: number;
	quantity: number;
	selectedOptions: Array<{ group: string; value: string; priceDelta?: number }>;
	selectedAddons: Array<{ label: string; price: number }>;
	notes: string;
}
