import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { CartItem } from '../lib/types';
import { siteConfig } from '../lib/site';

type CartContextValue = {
	items: CartItem[];
	hydrated: boolean;
	addItem: (item: CartItem) => void;
	updateQuantity: (key: string, quantity: number) => void;
	removeItem: (key: string) => void;
	clearCart: () => void;
	subtotal: number;
	deliveryFee: number;
	totalItems: number;
};

const storageKey = 'shushi:cart';

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		try {
			const saved = localStorage.getItem(storageKey);
			if (saved) setItems(JSON.parse(saved) as CartItem[]);
		} catch {
			localStorage.removeItem(storageKey);
		}
		setHydrated(true);
	}, []);

	useEffect(() => {
		if (hydrated) {
			localStorage.setItem(storageKey, JSON.stringify(items));
		}
	}, [items, hydrated]);

	const value = useMemo<CartContextValue>(() => {
		const subtotal = items.reduce(
			(sum, item) =>
				sum + (item.price + item.selectedOptions.reduce((acc, option) => acc + (option.priceDelta ?? 0), 0) + item.selectedAddons.reduce((acc, addon) => acc + addon.price, 0)) * item.quantity,
			0,
		);
		const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

		return {
			items,
			hydrated,
			addItem: (item) =>
				setItems((current) => {
					const existing = current.find((entry) => entry.key === item.key);
					if (!existing) return [...current, item];
					return current.map((entry) =>
						entry.key === item.key ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
					);
				}),
			updateQuantity: (key, quantity) =>
				setItems((current) =>
					current
						.map((entry) => (entry.key === key ? { ...entry, quantity } : entry))
						.filter((entry) => entry.quantity > 0),
				),
			removeItem: (key) => setItems((current) => current.filter((entry) => entry.key !== key)),
			clearCart: () => setItems([]),
			subtotal,
			deliveryFee: subtotal >= siteConfig.freeDeliveryThreshold || subtotal === 0 ? 0 : siteConfig.deliveryFee,
			totalItems,
		};
	}, [items, hydrated]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart must be used inside CartProvider');
	return context;
}
