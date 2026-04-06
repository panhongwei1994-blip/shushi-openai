import type { Locale } from './i18n';
import type { MenuCategory } from './types';

type Dictionary = {
	meta: {
		homeTitle: string;
		homeDescription: string;
		checkoutTitle: string;
		successTitle: string;
	};
	nav: {
		menu: string;
		story: string;
		checkout: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		primaryCta: string;
		secondaryCta: string;
	};
	highlights: string[];
	menu: {
		title: string;
		subtitle: string;
		all: string;
		categories: Record<MenuCategory, string>;
		details: string;
		addToCart: string;
		popular: string;
	};
	tags: Record<string, string>;
	cart: {
		title: string;
		empty: string;
		viewCart: string;
		subtotal: string;
		deliveryFee: string;
		total: string;
		checkout: string;
		edit: string;
		remove: string;
	};
	product: {
		quantity: string;
		options: string;
		addons: string;
		notes: string;
		specialInstructions: string;
	};
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
	success: {
		title: string;
		subtitle: string;
		orderLabel: string;
		backHome: string;
	};
	story: {
		title: string;
		body: string;
		stats: string[];
	};
	seo: {
		faqTitle: string;
		faqs: Array<{ q: string; a: string }>;
	};
	testimonials: {
		title: string;
		subtitle: string;
		intro: string;
		items: Array<{ name: string; quote: string }>;
	};
	footer: {
		about: string;
		testimonials: string;
		contact: string;
		offers: string;
		copyright: string;
	};
};

export const translations: Record<Locale, Dictionary> = {
	en: {
		meta: {
			homeTitle: 'Elegant Sushi Delivery',
			homeDescription: 'Japanese-inspired sushi delivery with multilingual ordering, refined design, and a seamless checkout flow.',
			checkoutTitle: 'Checkout',
			successTitle: 'Order confirmed',
		},
		nav: { menu: 'Menu', story: 'Contact Us', checkout: 'Checkout' },
		hero: {
			eyebrow: 'Kyoto calm, delivered fast',
			title: 'Sushi crafted with ceremony, packed for tonight.',
			subtitle:
				'Seasonal nigiri, pristine sashimi, signature rolls, and warm sides arranged in a mobile-first ordering experience designed to feel as refined as the food.',
			primaryCta: 'Explore menu',
			secondaryCta: 'Start checkout',
		},
		highlights: ['28 min average delivery', 'Premium fish cut daily', 'Stripe or cash on delivery'],
		menu: {
			title: 'Curated menu',
			subtitle: 'Filter by category, open product details, customize each order, and send it straight to the cart.',
			all: 'All',
			categories: {
				sushi: 'Sushi',
				sashimi: 'Sashimi',
				rolls: 'Rolls',
				drinks: 'Drinks',
				sides: 'Sides',
				'combo-meals': 'Combo meals',
			},
			details: 'Customize',
			addToCart: 'Add to cart',
			popular: 'Most loved',
		},
		tags: {
			signature: 'Signature',
			fresh: 'Fresh cut',
			bestSeller: 'Best seller',
			crispy: 'Crispy',
			warm: 'Comfort',
			pairing: 'Pairing',
			chef: 'Chef pick',
		},
		cart: {
			title: 'Your order',
			empty: 'Your cart is empty. Add a few dishes to begin.',
			viewCart: 'View cart',
			subtotal: 'Subtotal',
			deliveryFee: 'Delivery fee',
			total: 'Total',
			checkout: 'Proceed to checkout',
			edit: 'Edit',
			remove: 'Remove',
		},
		product: {
			quantity: 'Quantity',
			options: 'Options',
			addons: 'Add-ons',
			notes: 'Notes',
			specialInstructions: 'No sesame, extra soy, cut smaller...',
		},
		checkout: {
			title: 'Checkout',
			subtitle: 'Confirm delivery details, choose payment, and place your order.',
			customerInfo: 'Customer information',
			fullName: 'Full name',
			phone: 'Phone number',
			email: 'Email',
			fulfillment: 'Fulfillment',
			delivery: 'Delivery',
			pickup: 'Pickup',
			address: 'Street address',
			city: 'City',
			postalCode: 'Postal code',
			notes: 'Order notes',
			payment: 'Payment method',
			stripe: 'Stripe online payment',
			cash: 'Cash on delivery',
			submitDelivery: 'Place delivery order',
			submitPickup: 'Place pickup order',
			empty: 'Your cart is empty. Build an order from the menu first.',
			backToMenu: 'Back to menu',
			secureNote: 'Stripe is prepared as the online payment path for future backend handoff.',
		},
		success: {
			title: 'Arigato. Your order is confirmed.',
			subtitle: 'We saved a structured order payload locally so backend and payment integrations can be connected cleanly later.',
			orderLabel: 'Order number',
			backHome: 'Return to menu',
		},
		story: {
			title: 'Visit and contact',
			body: 'Open every day for lunch through late dinner, with delivery and pickup kept simple.',
			stats: ['Opening hours\nMonday to Sunday\n11:30 AM to 10:00 PM', 'Our address\n123 Tokyo Street, Kyoto\n100-0001, Japan', 'Email\ninfo@sushizen.com', 'Phone\n+81 75-555-0123'],
		},
		seo: {
			faqTitle: 'Frequently asked questions',
			faqs: [
				{ q: 'Is the sushi prepared fresh to order?', a: 'Yes. The menu is designed around made-to-order sushi, sashimi, rolls, and hot sides so each order feels freshly prepared.' },
				{ q: 'Can customers choose delivery or pickup?', a: 'Yes. The checkout flow supports both delivery and pickup, with pricing and order details updating inside the same flow.' },
				{ q: 'Do you offer vegetarian rolls and lighter options?', a: 'Yes. The menu includes lighter combinations, sides, and flexible roll choices so guests can build an order that fits their preferences.' },
			],
		},
		testimonials: {
			title: 'Customers',
			subtitle: 'Feedback',
			intro: "Here's how our customers enjoyed our sushi and the service we offer.",
			items: [
				{ name: 'Craig Bator', quote: 'The nigiri was polished, balanced, and genuinely fresh. It felt closer to a quiet omakase counter than a typical delivery order.' },
				{ name: 'Martin Dorwart', quote: 'The rolls looked great on arrival and the textures held up well. The dragon-style options and sides made the order feel complete.' },
				{ name: 'Sarah Johnson', quote: 'Clean flavors, careful plating, and a smooth ordering flow. This is the kind of sushi site that makes reordering easy.' },
				{ name: 'Alex Chen', quote: 'Perfectly seasoned rice and rich fish quality made the whole order feel premium. I would come back for the sashimi again.' },
			],
		},
		footer: {
			about: 'About Us',
			testimonials: 'Testimonials',
			contact: 'Contact Us',
			offers: 'Offers',
			copyright: '©2026 Shushi. Crafted for refined sushi delivery.',
		},
	},
	zh: {
		meta: {
			homeTitle: '优雅寿司外送',
			homeDescription: '日式灵感寿司外送网站，支持多语言点餐、精致设计与顺滑结账流程。',
			checkoutTitle: '结账',
			successTitle: '订单已确认',
		},
		nav: { menu: '菜单', story: '联系我们', checkout: '结账' },
		hero: {
			eyebrow: '京都气质，快速送达',
			title: '像仪式一样制作的寿司，为今晚准时送到。',
			subtitle: '时令握寿司、鲜切刺身、招牌卷物与热食小点，装进一个为移动端优化的优雅点餐体验。',
			primaryCta: '浏览菜单',
			secondaryCta: '开始结账',
		},
		highlights: ['平均 28 分钟送达', '高品质鱼料每日现切', '支持 Stripe 与货到现金'],
		menu: {
			title: '精选菜单',
			subtitle: '按分类筛选，打开商品详情，自定义口味后直接加入购物车。',
			all: '全部',
			categories: { sushi: '寿司', sashimi: '刺身', rolls: '卷物', drinks: '饮品', sides: '配菜', 'combo-meals': '套餐' },
			details: '自定义',
			addToCart: '加入购物车',
			popular: '人气推荐',
		},
		tags: { signature: '招牌', fresh: '现切', bestSeller: '热卖', crispy: '酥脆', warm: '暖心', pairing: '搭配佳选', chef: '主厨推荐' },
		cart: { title: '你的订单', empty: '购物车还是空的，先选几道喜欢的吧。', viewCart: '查看购物车', subtotal: '小计', deliveryFee: '配送费', total: '合计', checkout: '前往结账', edit: '编辑', remove: '删除' },
		product: { quantity: '数量', options: '选项', addons: '加料', notes: '备注', specialInstructions: '不要芝麻、酱油多一点、切小块……' },
		checkout: {
			title: '结账',
			subtitle: '确认配送信息、选择支付方式并提交订单。',
			customerInfo: '顾客信息',
			fullName: '姓名',
			phone: '手机号',
			email: '邮箱',
			fulfillment: '取餐方式',
			delivery: '配送',
			pickup: '自取',
			address: '街道地址',
			city: '城市',
			postalCode: '邮编',
			notes: '订单备注',
			payment: '支付方式',
			stripe: 'Stripe 在线支付',
			cash: '货到付款',
			submitDelivery: '提交配送订单',
			submitPickup: '提交自取订单',
			empty: '购物车为空，请先回到菜单添加商品。',
			backToMenu: '返回菜单',
			secureNote: '已预留 Stripe 在线支付路径，后续可无缝接入后端。',
		},
		success: { title: '感谢惠顾，订单已确认。', subtitle: '我们已在本地保存结构化订单数据，后续便于接入后端与支付流程。', orderLabel: '订单号', backHome: '返回菜单' },
		story: { title: '营业与联系', body: '每日中午开始营业直到晚间，配送与自取都能快速完成。', stats: ['营业时间\n周一至周日\n上午11:30到晚上10:00', '我们的地址\n京都东京街123号\n100-0001，日本', '电子邮件\ninfo@sushizen.com', '电话\n+81 75-555-0123'] },
		seo: { faqTitle: '常见问题', faqs: [{ q: '寿司是现点现做吗？', a: '是的，菜单围绕现做握寿司、刺身、卷物和热食小点设计，让每一单都更接近新鲜现制的体验。' }, { q: '可以选择配送或自取吗？', a: '可以，结账流程同时支持配送与自取，价格和订单信息会在同一个流程里即时更新。' }, { q: '有适合清淡口味或素食的选择吗？', a: '有，菜单里包含更清爽的搭配、配菜和可灵活选择的卷物，方便顾客按自己的口味组合下单。' }] },
		testimonials: { title: '顾客', subtitle: '评价', intro: '看看顾客如何评价我们的寿司与整体下单体验。', items: [{ name: 'Craig Bator', quote: '握寿司的口感和鲜度都很到位，比一般外送寿司更接近安静板前店的体验。' }, { name: 'Martin Dorwart', quote: '卷物送到时卖相依然很好，口感层次也保留住了，整单吃起来很完整。' }, { name: 'Sarah Johnson', quote: '味道干净、摆盘细致，下单过程也很顺，这类寿司网站会让人愿意反复回购。' }, { name: 'Alex Chen', quote: '寿司饭调味准确，鱼料也很有质感，整单吃下来有明显的高级感，刺身尤其出色。' }] },
		footer: { about: '关于我们', testimonials: '顾客评价', contact: '联系我们', offers: '精选菜单', copyright: '©2026 Shushi。为精致寿司外送而设计。' },
	},
	fr: {
		meta: { homeTitle: 'Livraison de sushi élégante', homeDescription: 'Site de livraison de sushi inspiré du Japon avec commande multilingue et parcours d’achat fluide.', checkoutTitle: 'Paiement', successTitle: 'Commande confirmée' },
		nav: { menu: 'Menu', story: 'Contact', checkout: 'Paiement' },
		hero: { eyebrow: 'Le calme de Kyoto, livré vite', title: 'Des sushi préparés avec cérémonie, livrés pour ce soir.', subtitle: 'Nigiri de saison, sashimi impeccable, rolls signatures et accompagnements chauds dans une expérience mobile raffinée.', primaryCta: 'Voir le menu', secondaryCta: 'Commander' },
		highlights: ['28 min de livraison en moyenne', 'Poisson premium préparé chaque jour', 'Stripe ou paiement à la livraison'],
		menu: { title: 'Menu sélectionné', subtitle: 'Filtrez par catégorie, ouvrez les détails produit, personnalisez puis ajoutez au panier.', all: 'Tout', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Boissons', sides: 'Accompagnements', 'combo-meals': 'Menus' }, details: 'Personnaliser', addToCart: 'Ajouter', popular: 'Les favoris' },
		tags: { signature: 'Signature', fresh: 'Fraîche découpe', bestSeller: 'Best-seller', crispy: 'Croustillant', warm: 'Réconfort', pairing: 'Accord', chef: 'Choix du chef' },
		cart: { title: 'Votre commande', empty: 'Votre panier est vide. Ajoutez quelques plats pour commencer.', viewCart: 'Voir le panier', subtotal: 'Sous-total', deliveryFee: 'Livraison', total: 'Total', checkout: 'Passer au paiement', edit: 'Modifier', remove: 'Supprimer' },
		product: { quantity: 'Quantité', options: 'Options', addons: 'Suppléments', notes: 'Notes', specialInstructions: 'Sans sésame, plus de sauce soja, couper plus petit…' },
		checkout: { title: 'Paiement', subtitle: 'Confirmez les informations, choisissez le mode de retrait et le paiement.', customerInfo: 'Informations client', fullName: 'Nom complet', phone: 'Téléphone', email: 'Email', fulfillment: 'Mode de remise', delivery: 'Livraison', pickup: 'À emporter', address: 'Adresse', city: 'Ville', postalCode: 'Code postal', notes: 'Notes', payment: 'Paiement', stripe: 'Paiement en ligne Stripe', cash: 'Paiement à la livraison', submitDelivery: 'Valider la livraison', submitPickup: 'Valider le retrait', empty: 'Votre panier est vide. Revenez au menu pour commencer.', backToMenu: 'Retour au menu', secureNote: 'Stripe est prêt pour une intégration backend ultérieure.' },
		success: { title: 'Merci. Votre commande est confirmée.', subtitle: 'Une structure de commande locale a été enregistrée pour faciliter de futures intégrations.', orderLabel: 'Numéro de commande', backHome: 'Retour au menu' },
		story: { title: 'Visite et contact', body: 'Ouvert tous les jours du déjeuner au dîner, avec livraison et retrait simples à utiliser.', stats: ['Horaires\nDu lundi au dimanche\n11 h 30 à 22 h 00', 'Notre adresse\n123 Tokyo Street, Kyoto\n100-0001, Japon', 'E-mail\ninfo@sushizen.com', 'Téléphone\n+81 75-555-0123'] },
		seo: { faqTitle: 'Questions fréquentes', faqs: [{ q: 'Les sushi sont-ils préparés à la commande ?', a: 'Oui. Le site est pensé pour des sushi, sashimi, rolls et accompagnements préparés à la commande, avec une sensation de fraîcheur immédiate.' }, { q: 'Le client peut-il choisir livraison ou retrait ?', a: 'Oui. Le checkout gère la livraison et le retrait dans le même parcours, avec les détails de commande mis à jour instantanément.' }, { q: 'Proposez-vous des options végétariennes ou plus légères ?', a: 'Oui. Le menu comprend des combinaisons plus légères, des accompagnements et des rolls flexibles pour s’adapter à différents goûts.' }] },
		testimonials: { title: 'Clients', subtitle: 'Avis', intro: 'Voici comment nos clients parlent de nos sushi et du service proposé.', items: [{ name: 'Craig Bator', quote: 'Le nigiri était net, équilibré et vraiment frais. On retrouve quelque chose d’un comptoir omakase calme.' }, { name: 'Martin Dorwart', quote: 'Les rolls sont arrivés en très bel état et les textures tenaient bien. L’ensemble faisait vrai menu de sushi.' }, { name: 'Sarah Johnson', quote: 'Saveurs propres, présentation soignée et commande fluide. Un site qui donne envie de recommander.' }, { name: 'Alex Chen', quote: 'Le riz était parfaitement assaisonné et la qualité du poisson donnait une vraie sensation premium, surtout sur le sashimi.' }] },
		footer: { about: 'À propos', testimonials: 'Avis', contact: 'Contact', offers: 'Offres', copyright: '©2026 Shushi. Conçu pour une livraison de sushi raffinée.' },
	},
	de: {
		meta: { homeTitle: 'Eleganter Sushi-Lieferservice', homeDescription: 'Japanisch inspirierter Sushi-Shop mit Mehrsprachigkeit, schnellem Checkout und starker Performance.', checkoutTitle: 'Kasse', successTitle: 'Bestellung bestätigt' },
		nav: { menu: 'Menü', story: 'Kontakt', checkout: 'Kasse' },
		hero: { eyebrow: 'Kyoto-Ruhe, schnell geliefert', title: 'Sushi mit Ritual gefertigt, für heute Abend verpackt.', subtitle: 'Saisonales Nigiri, feines Sashimi, Signature Rolls und warme Beilagen in einem mobilen Bestellfluss.', primaryCta: 'Menü ansehen', secondaryCta: 'Zur Kasse' },
		highlights: ['28 Min. Lieferzeit im Schnitt', 'Premium-Fisch täglich geschnitten', 'Stripe oder Barzahlung bei Lieferung'],
		menu: { title: 'Kuratiertes Menü', subtitle: 'Nach Kategorien filtern, Produktdetails öffnen, anpassen und in den Warenkorb legen.', all: 'Alle', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Getränke', sides: 'Beilagen', 'combo-meals': 'Kombis' }, details: 'Anpassen', addToCart: 'In den Warenkorb', popular: 'Besonders beliebt' },
		tags: { signature: 'Signature', fresh: 'Frisch geschnitten', bestSeller: 'Bestseller', crispy: 'Knusprig', warm: 'Wärmend', pairing: 'Pairing', chef: 'Chef-Empfehlung' },
		cart: { title: 'Deine Bestellung', empty: 'Dein Warenkorb ist leer. Füge zuerst ein paar Gerichte hinzu.', viewCart: 'Warenkorb', subtotal: 'Zwischensumme', deliveryFee: 'Liefergebühr', total: 'Gesamt', checkout: 'Zur Kasse', edit: 'Bearbeiten', remove: 'Entfernen' },
		product: { quantity: 'Menge', options: 'Optionen', addons: 'Extras', notes: 'Hinweise', specialInstructions: 'Kein Sesam, extra Sojasauce, kleiner schneiden…' },
		checkout: { title: 'Kasse', subtitle: 'Lieferdaten bestätigen, Zahlungsart wählen und Bestellung abschicken.', customerInfo: 'Kundendaten', fullName: 'Vollständiger Name', phone: 'Telefonnummer', email: 'E-Mail', fulfillment: 'Erfüllung', delivery: 'Lieferung', pickup: 'Abholung', address: 'Straße', city: 'Stadt', postalCode: 'PLZ', notes: 'Bestellhinweise', payment: 'Zahlungsart', stripe: 'Stripe Online-Zahlung', cash: 'Barzahlung bei Lieferung', submitDelivery: 'Lieferbestellung aufgeben', submitPickup: 'Abholbestellung aufgeben', empty: 'Dein Warenkorb ist leer. Kehre zum Menü zurück.', backToMenu: 'Zurück zum Menü', secureNote: 'Stripe ist als Online-Zahlungsweg für spätere Backend-Anbindung vorbereitet.' },
		success: { title: 'Danke. Deine Bestellung ist bestätigt.', subtitle: 'Eine strukturierte Bestellnutzlast wurde lokal gespeichert, damit spätere Integrationen sauber anschließen können.', orderLabel: 'Bestellnummer', backHome: 'Zurück zum Menü' },
		story: { title: 'Besuch und Kontakt', body: 'Täglich vom Mittag bis zum späten Abend geöffnet, mit einfacher Lieferung und Abholung.', stats: ['Öffnungszeiten\nMontag bis Sonntag\n11:30 bis 22:00 Uhr', 'Unsere Adresse\n123 Tokyo Street, Kyoto\n100-0001, Japan', 'E-Mail\ninfo@sushizen.com', 'Telefon\n+81 75-555-0123'] },
		seo: { faqTitle: 'Häufige Fragen', faqs: [{ q: 'Wird das Sushi frisch auf Bestellung vorbereitet?', a: 'Ja. Das Menü ist auf frisch zubereitete Sushi, Sashimi, Rolls und warme Beilagen ausgelegt, damit jede Bestellung möglichst frisch wirkt.' }, { q: 'Können Kundinnen und Kunden Lieferung oder Abholung wählen?', a: 'Ja. Im Checkout lassen sich Lieferung und Abholung im selben Ablauf auswählen, inklusive sofort aktualisierter Bestelldetails.' }, { q: 'Gibt es vegetarische oder leichtere Optionen?', a: 'Ja. Die Karte enthält leichtere Kombinationen, Beilagen und flexible Roll-Optionen für unterschiedliche Vorlieben.' }] },
		testimonials: { title: 'Kunden', subtitle: 'Feedback', intro: 'So beschreiben unsere Gäste das Sushi und den Service auf der Seite.', items: [{ name: 'Craig Bator', quote: 'Das Nigiri wirkte präzise, ausgewogen und wirklich frisch. Für Lieferung ungewöhnlich nah an einem ruhigen Sushi-Counter.' }, { name: 'Martin Dorwart', quote: 'Die Rolls kamen optisch stark an und die Texturen stimmten noch. Insgesamt ein sehr rundes Sushi-Erlebnis.' }, { name: 'Sarah Johnson', quote: 'Klare Aromen, saubere Präsentation und ein schneller Bestellfluss. So bestellt man gern erneut.' }, { name: 'Alex Chen', quote: 'Der Reis war sauber abgeschmeckt und die Fischqualität wirkte hochwertig. Besonders das Sashimi blieb im Kopf.' }] },
		footer: { about: 'Über uns', testimonials: 'Feedback', contact: 'Kontakt', offers: 'Angebote', copyright: '©2026 Shushi. Entwickelt für feine Sushi-Lieferungen.' },
	},
	es: {
		meta: { homeTitle: 'Entrega de sushi elegante', homeDescription: 'Tienda de sushi inspirada en Japón con i18n, diseño refinado y compra rápida.', checkoutTitle: 'Pago', successTitle: 'Pedido confirmado' },
		nav: { menu: 'Menú', story: 'Contacto', checkout: 'Pago' },
		hero: { eyebrow: 'Calma de Kioto, entrega rápida', title: 'Sushi preparado con ceremonia, listo para esta noche.', subtitle: 'Nigiri de temporada, sashimi impecable, rolls de autor y platos calientes en una experiencia móvil pulida.', primaryCta: 'Ver menú', secondaryCta: 'Ir al pago' },
		highlights: ['28 min de entrega promedio', 'Pescado premium cortado cada día', 'Stripe o efectivo al recibir'],
		menu: { title: 'Menú curado', subtitle: 'Filtra por categoría, abre detalles, personaliza y añade al carrito.', all: 'Todo', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bebidas', sides: 'Acompañamientos', 'combo-meals': 'Combos' }, details: 'Personalizar', addToCart: 'Añadir', popular: 'Favoritos' },
		tags: { signature: 'Firma', fresh: 'Recién cortado', bestSeller: 'Más vendido', crispy: 'Crujiente', warm: 'Reconfortante', pairing: 'Maridaje', chef: 'Selección del chef' },
		cart: { title: 'Tu pedido', empty: 'Tu carrito está vacío. Añade algunos platos para empezar.', viewCart: 'Ver carrito', subtotal: 'Subtotal', deliveryFee: 'Envío', total: 'Total', checkout: 'Continuar al pago', edit: 'Editar', remove: 'Quitar' },
		product: { quantity: 'Cantidad', options: 'Opciones', addons: 'Extras', notes: 'Notas', specialInstructions: 'Sin sésamo, más soja, cortar más pequeño…' },
		checkout: { title: 'Pago', subtitle: 'Confirma tus datos, elige entrega o recogida y finaliza el pedido.', customerInfo: 'Información del cliente', fullName: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico', fulfillment: 'Modalidad', delivery: 'Entrega', pickup: 'Recogida', address: 'Dirección', city: 'Ciudad', postalCode: 'Código postal', notes: 'Notas del pedido', payment: 'Método de pago', stripe: 'Pago online con Stripe', cash: 'Efectivo contra entrega', submitDelivery: 'Confirmar entrega', submitPickup: 'Confirmar recogida', empty: 'Tu carrito está vacío. Vuelve al menú primero.', backToMenu: 'Volver al menú', secureNote: 'Stripe queda preparado como ruta de pago online para una futura integración backend.' },
		success: { title: 'Gracias. Tu pedido está confirmado.', subtitle: 'Guardamos una estructura de pedido local para conectar backend y pagos más adelante.', orderLabel: 'Número de pedido', backHome: 'Volver al menú' },
		story: { title: 'Visita y contacto', body: 'Abierto todos los días desde el almuerzo hasta la noche, con entrega y recogida fáciles de usar.', stats: ['Horario\nDe lunes a domingo\n11:30 a 22:00', 'Nuestra dirección\n123 Tokyo Street, Kyoto\n100-0001, Japón', 'Correo electrónico\ninfo@sushizen.com', 'Teléfono\n+81 75-555-0123'] },
		seo: { faqTitle: 'Preguntas frecuentes', faqs: [{ q: '¿El sushi se prepara al momento?', a: 'Sí. La experiencia está planteada para sushi, sashimi, rolls y acompañamientos preparados al pedido, con una sensación clara de frescura.' }, { q: '¿Se puede elegir entre entrega y recogida?', a: 'Sí. El checkout permite elegir entrega o recogida dentro del mismo flujo y actualiza los detalles del pedido al instante.' }, { q: '¿Hay opciones vegetarianas o más ligeras?', a: 'Sí. El menú incluye combinaciones más ligeras, acompañamientos y rolls flexibles para distintos gustos.' }] },
		testimonials: { title: 'Clientes', subtitle: 'Opiniones', intro: 'Así describen nuestros clientes el sushi y la experiencia del servicio.', items: [{ name: 'Craig Bator', quote: 'El nigiri se sintió preciso, equilibrado y muy fresco. Mucho más cercano a una barra tranquila que a un pedido común.' }, { name: 'Martin Dorwart', quote: 'Los rolls llegaron con muy buena presencia y conservaron bien la textura. El pedido se sintió completo.' }, { name: 'Sarah Johnson', quote: 'Sabores limpios, presentación cuidada y un proceso de pedido fluido. Invita a volver a pedir.' }, { name: 'Alex Chen', quote: 'El arroz estaba muy bien trabajado y la calidad del pescado se notó enseguida. El sashimi destacó bastante.' }] },
		footer: { about: 'Sobre nosotros', testimonials: 'Opiniones', contact: 'Contacto', offers: 'Menú', copyright: '©2026 Shushi. Creado para una entrega de sushi refinada.' },
	},
	pt: {
		meta: { homeTitle: 'Entrega de sushi elegante', homeDescription: 'Loja de sushi inspirada no Japão com i18n, design refinado e checkout fluido.', checkoutTitle: 'Checkout', successTitle: 'Pedido confirmado' },
		nav: { menu: 'Menu', story: 'Contacto', checkout: 'Checkout' },
		hero: { eyebrow: 'Calma de Kyoto, entrega rápida', title: 'Sushi preparado com cerimónia, pronto para esta noite.', subtitle: 'Nigiri sazonal, sashimi impecável, rolls de assinatura e acompanhamentos quentes numa experiência mobile-first.', primaryCta: 'Ver menu', secondaryCta: 'Ir para checkout' },
		highlights: ['28 min de entrega média', 'Peixe premium cortado diariamente', 'Stripe ou dinheiro na entrega'],
		menu: { title: 'Menu curado', subtitle: 'Filtre por categoria, abra detalhes do produto, personalize e adicione ao carrinho.', all: 'Tudo', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bebidas', sides: 'Acompanhamentos', 'combo-meals': 'Combos' }, details: 'Personalizar', addToCart: 'Adicionar', popular: 'Favoritos' },
		tags: { signature: 'Assinatura', fresh: 'Corte fresco', bestSeller: 'Mais pedido', crispy: 'Crocante', warm: 'Reconfortante', pairing: 'Harmonização', chef: 'Escolha do chef' },
		cart: { title: 'O seu pedido', empty: 'O carrinho está vazio. Adicione alguns pratos para começar.', viewCart: 'Ver carrinho', subtotal: 'Subtotal', deliveryFee: 'Taxa de entrega', total: 'Total', checkout: 'Continuar', edit: 'Editar', remove: 'Remover' },
		product: { quantity: 'Quantidade', options: 'Opções', addons: 'Extras', notes: 'Notas', specialInstructions: 'Sem sésamo, extra molho de soja, cortar menor…' },
		checkout: { title: 'Checkout', subtitle: 'Confirme os dados, escolha entrega ou recolha e finalize o pedido.', customerInfo: 'Informação do cliente', fullName: 'Nome completo', phone: 'Telefone', email: 'Email', fulfillment: 'Método', delivery: 'Entrega', pickup: 'Recolha', address: 'Morada', city: 'Cidade', postalCode: 'Código postal', notes: 'Notas do pedido', payment: 'Método de pagamento', stripe: 'Pagamento online Stripe', cash: 'Dinheiro na entrega', submitDelivery: 'Finalizar entrega', submitPickup: 'Finalizar recolha', empty: 'O carrinho está vazio. Volte ao menu primeiro.', backToMenu: 'Voltar ao menu', secureNote: 'Stripe fica preparado como caminho de pagamento online para futura integração backend.' },
		success: { title: 'Obrigado. O seu pedido foi confirmado.', subtitle: 'Guardámos localmente uma estrutura de pedido para facilitar integrações futuras.', orderLabel: 'Número do pedido', backHome: 'Voltar ao menu' },
		story: { title: 'Visita e contacto', body: 'Aberto todos os dias do almoço até à noite, com entrega e recolha simples de usar.', stats: ['Horário\nDe segunda a domingo\n11:30 às 22:00', 'Nossa morada\n123 Tokyo Street, Kyoto\n100-0001, Japão', 'Email\ninfo@sushizen.com', 'Telefone\n+81 75-555-0123'] },
		seo: { faqTitle: 'Perguntas frequentes', faqs: [{ q: 'O sushi é preparado na hora?', a: 'Sim. O site foi pensado para sushi, sashimi, rolls e acompanhamentos preparados por encomenda, com foco numa perceção clara de frescura.' }, { q: 'É possível escolher entrega ou recolha?', a: 'Sim. O checkout permite alternar entre entrega e recolha no mesmo fluxo, com os detalhes do pedido atualizados de imediato.' }, { q: 'Existem opções vegetarianas ou mais leves?', a: 'Sim. O menu inclui combinações mais leves, acompanhamentos e rolls flexíveis para diferentes preferências.' }] },
		testimonials: { title: 'Clientes', subtitle: 'Feedback', intro: 'Assim os clientes descrevem o nosso sushi e o serviço que prestamos.', items: [{ name: 'Craig Bator', quote: 'O nigiri estava preciso, equilibrado e realmente fresco. Mais próximo de um balcão calmo do que de uma encomenda comum.' }, { name: 'Martin Dorwart', quote: 'Os rolls chegaram muito bem apresentados e mantiveram boa textura. O pedido pareceu completo.' }, { name: 'Sarah Johnson', quote: 'Sabores limpos, apresentação cuidada e um fluxo de encomenda muito simples. Dá vontade de repetir.' }, { name: 'Alex Chen', quote: 'O arroz estava muito bem temperado e a qualidade do peixe ficou evidente. O sashimi destacou-se bastante.' }] },
		footer: { about: 'Sobre nós', testimonials: 'Feedback', contact: 'Contacto', offers: 'Ofertas', copyright: '©2026 Shushi. Criado para entrega refinada de sushi.' },
	},
	it: {
		meta: { homeTitle: 'Consegna sushi elegante', homeDescription: 'Sito sushi ispirato al Giappone con i18n, design raffinato e checkout veloce.', checkoutTitle: 'Checkout', successTitle: 'Ordine confermato' },
		nav: { menu: 'Menu', story: 'Contatti', checkout: 'Checkout' },
		hero: { eyebrow: 'Calma di Kyoto, consegna rapida', title: 'Sushi preparato con rito, pronto per stasera.', subtitle: 'Nigiri stagionali, sashimi impeccabile, rolls signature e contorni caldi in un’esperienza mobile-first raffinata.', primaryCta: 'Scopri il menu', secondaryCta: 'Vai al checkout' },
		highlights: ['28 min di consegna media', 'Pesce premium tagliato ogni giorno', 'Stripe o contanti alla consegna'],
		menu: { title: 'Menu curato', subtitle: 'Filtra per categoria, apri i dettagli prodotto, personalizza e aggiungi al carrello.', all: 'Tutto', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bevande', sides: 'Contorni', 'combo-meals': 'Combo' }, details: 'Personalizza', addToCart: 'Aggiungi', popular: 'Più amati' },
		tags: { signature: 'Signature', fresh: 'Taglio fresco', bestSeller: 'Best seller', crispy: 'Croccante', warm: 'Comfort', pairing: 'Abbinamento', chef: 'Scelta dello chef' },
		cart: { title: 'Il tuo ordine', empty: 'Il carrello è vuoto. Aggiungi qualche piatto per iniziare.', viewCart: 'Vedi carrello', subtotal: 'Subtotale', deliveryFee: 'Consegna', total: 'Totale', checkout: 'Procedi al checkout', edit: 'Modifica', remove: 'Rimuovi' },
		product: { quantity: 'Quantità', options: 'Opzioni', addons: 'Extra', notes: 'Note', specialInstructions: 'Niente sesamo, più salsa di soia, taglia più piccolo…' },
		checkout: { title: 'Checkout', subtitle: 'Conferma i dati, scegli consegna o ritiro e completa l’ordine.', customerInfo: 'Informazioni cliente', fullName: 'Nome completo', phone: 'Telefono', email: 'Email', fulfillment: 'Modalità', delivery: 'Consegna', pickup: 'Ritiro', address: 'Indirizzo', city: 'Città', postalCode: 'CAP', notes: 'Note ordine', payment: 'Metodo di pagamento', stripe: 'Pagamento online con Stripe', cash: 'Contanti alla consegna', submitDelivery: 'Conferma consegna', submitPickup: 'Conferma ritiro', empty: 'Il carrello è vuoto. Torna prima al menu.', backToMenu: 'Torna al menu', secureNote: 'Stripe è predisposto come percorso di pagamento online per una futura integrazione backend.' },
		success: { title: 'Grazie. Il tuo ordine è confermato.', subtitle: 'Abbiamo salvato localmente un payload ordine strutturato per collegare facilmente backend e pagamenti in futuro.', orderLabel: 'Numero ordine', backHome: 'Torna al menu' },
		story: { title: 'Visita e contatti', body: 'Aperti ogni giorno dal pranzo fino alla sera, con consegna e ritiro semplici da usare.', stats: ['Orari di apertura\nDal lunedì alla domenica\n11:30 - 22:00', 'Il nostro indirizzo\n123 Tokyo Street, Kyoto\n100-0001, Giappone', 'Email\ninfo@sushizen.com', 'Telefono\n+81 75-555-0123'] },
		seo: { faqTitle: 'Domande frequenti', faqs: [{ q: 'Il sushi viene preparato al momento?', a: 'Sì. L’esperienza è pensata per sushi, sashimi, rolls e contorni preparati su ordinazione, così ogni ordine comunica freschezza.' }, { q: 'Si può scegliere tra consegna e ritiro?', a: 'Sì. Il checkout gestisce consegna e ritiro nello stesso flusso e aggiorna subito i dettagli dell’ordine.' }, { q: 'Ci sono opzioni vegetariane o più leggere?', a: 'Sì. Il menu include combinazioni più leggere, contorni e rolls flessibili per preferenze diverse.' }] },
		testimonials: { title: 'Clienti', subtitle: 'Feedback', intro: 'Ecco come i clienti raccontano il nostro sushi e il servizio offerto.', items: [{ name: 'Craig Bator', quote: 'Il nigiri era preciso, equilibrato e davvero fresco. Più vicino a un bancone tranquillo che a un ordine qualsiasi.' }, { name: 'Martin Dorwart', quote: 'I rolls sono arrivati con un bell’aspetto e una buona texture. L’ordine risultava completo.' }, { name: 'Sarah Johnson', quote: 'Sapori puliti, presentazione curata e un flusso d’ordine scorrevole. Fa venire voglia di ordinare di nuovo.' }, { name: 'Alex Chen', quote: 'Il riso era ben calibrato e la qualità del pesce si sentiva subito. Il sashimi è rimasto il punto forte.' }] },
		footer: { about: 'Chi siamo', testimonials: 'Feedback', contact: 'Contatti', offers: 'Offerte', copyright: '©2026 Shushi. Pensato per una consegna sushi raffinata.' },
	},
};

export function getDictionary(locale: Locale) {
	return translations[locale];
}
