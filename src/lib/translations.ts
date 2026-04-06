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
};

export const translations: Record<Locale, Dictionary> = {
	en: {
		meta: {
			homeTitle: 'Elegant Sushi Delivery',
			homeDescription: 'Japanese-inspired sushi delivery with multilingual ordering, refined design, and a seamless checkout flow.',
			checkoutTitle: 'Checkout',
			successTitle: 'Order confirmed',
		},
		nav: { menu: 'Menu', story: 'Our craft', checkout: 'Checkout' },
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
			title: 'Opening hours',
			body: 'Monday to Sunday\n11:30 AM to 10:00 PM',
			stats: ['Our address\n123 Tokyo Street, Kyoto\n100-0001, Japan', 'Email\ninfo@sushizen.com', 'Phone\n+81 75-555-0123'],
		},
		seo: {
			faqTitle: 'Frequently asked questions',
			faqs: [
				{ q: 'Is the sushi prepared fresh to order?', a: 'Yes. The menu is designed around made-to-order sushi, sashimi, rolls, and hot sides so each order feels freshly prepared.' },
				{ q: 'Can customers choose delivery or pickup?', a: 'Yes. The checkout flow supports both delivery and pickup, with pricing and order details updating inside the same flow.' },
				{ q: 'Can guests leave notes or add extras?', a: 'Yes. Each product can carry quantity changes, options, add-ons, and order notes before it is added to the cart.' },
			],
		},
	},
	zh: {
		meta: {
			homeTitle: '优雅寿司外送',
			homeDescription: '日式灵感寿司外送网站，支持多语言点餐、精致设计与顺滑结账流程。',
			checkoutTitle: '结账',
			successTitle: '订单已确认',
		},
		nav: { menu: '菜单', story: '匠心', checkout: '结账' },
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
		story: { title: '营业时间', body: '周一至周日\n上午11:30到晚上10:00', stats: ['我们的地址\n京都东京街123号\n100-0001，日本', '电子邮件\ninfo@sushizen.com', '电话\n+81 75-555-0123'] },
		seo: { faqTitle: '常见问题', faqs: [{ q: '寿司是现点现做吗？', a: '是的，菜单围绕现做握寿司、刺身、卷物和热食小点设计，让每一单都更接近新鲜现制的体验。' }, { q: '可以选择配送或自取吗？', a: '可以，结账流程同时支持配送与自取，价格和订单信息会在同一个流程里即时更新。' }, { q: '下单前可以加备注或加料吗？', a: '可以，商品详情支持数量调整、选项、加料和备注，加入购物车前就能一起确认。' }] },
	},
	fr: {
		meta: { homeTitle: 'Livraison de sushi élégante', homeDescription: 'Site de livraison de sushi inspiré du Japon avec commande multilingue et parcours d’achat fluide.', checkoutTitle: 'Paiement', successTitle: 'Commande confirmée' },
		nav: { menu: 'Menu', story: 'Savoir-faire', checkout: 'Paiement' },
		hero: { eyebrow: 'Le calme de Kyoto, livré vite', title: 'Des sushi préparés avec cérémonie, livrés pour ce soir.', subtitle: 'Nigiri de saison, sashimi impeccable, rolls signatures et accompagnements chauds dans une expérience mobile raffinée.', primaryCta: 'Voir le menu', secondaryCta: 'Commander' },
		highlights: ['28 min de livraison en moyenne', 'Poisson premium préparé chaque jour', 'Stripe ou paiement à la livraison'],
		menu: { title: 'Menu sélectionné', subtitle: 'Filtrez par catégorie, ouvrez les détails produit, personnalisez puis ajoutez au panier.', all: 'Tout', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Boissons', sides: 'Accompagnements', 'combo-meals': 'Menus' }, details: 'Personnaliser', addToCart: 'Ajouter', popular: 'Les favoris' },
		tags: { signature: 'Signature', fresh: 'Fraîche découpe', bestSeller: 'Best-seller', crispy: 'Croustillant', warm: 'Réconfort', pairing: 'Accord', chef: 'Choix du chef' },
		cart: { title: 'Votre commande', empty: 'Votre panier est vide. Ajoutez quelques plats pour commencer.', viewCart: 'Voir le panier', subtotal: 'Sous-total', deliveryFee: 'Livraison', total: 'Total', checkout: 'Passer au paiement', edit: 'Modifier', remove: 'Supprimer' },
		product: { quantity: 'Quantité', options: 'Options', addons: 'Suppléments', notes: 'Notes', specialInstructions: 'Sans sésame, plus de sauce soja, couper plus petit…' },
		checkout: { title: 'Paiement', subtitle: 'Confirmez les informations, choisissez le mode de retrait et le paiement.', customerInfo: 'Informations client', fullName: 'Nom complet', phone: 'Téléphone', email: 'Email', fulfillment: 'Mode de remise', delivery: 'Livraison', pickup: 'À emporter', address: 'Adresse', city: 'Ville', postalCode: 'Code postal', notes: 'Notes', payment: 'Paiement', stripe: 'Paiement en ligne Stripe', cash: 'Paiement à la livraison', submitDelivery: 'Valider la livraison', submitPickup: 'Valider le retrait', empty: 'Votre panier est vide. Revenez au menu pour commencer.', backToMenu: 'Retour au menu', secureNote: 'Stripe est prêt pour une intégration backend ultérieure.' },
		success: { title: 'Merci. Votre commande est confirmée.', subtitle: 'Une structure de commande locale a été enregistrée pour faciliter de futures intégrations.', orderLabel: 'Numéro de commande', backHome: 'Retour au menu' },
		story: { title: 'Horaires', body: 'Du lundi au dimanche\n11 h 30 à 22 h 00', stats: ['Notre adresse\n123 Tokyo Street, Kyoto\n100-0001, Japon', 'E-mail\ninfo@sushizen.com', 'Téléphone\n+81 75-555-0123'] },
		seo: { faqTitle: 'Questions fréquentes', faqs: [{ q: 'Les sushi sont-ils préparés à la commande ?', a: 'Oui. Le site est pensé pour des sushi, sashimi, rolls et accompagnements préparés à la commande, avec une sensation de fraîcheur immédiate.' }, { q: 'Le client peut-il choisir livraison ou retrait ?', a: 'Oui. Le checkout gère la livraison et le retrait dans le même parcours, avec les détails de commande mis à jour instantanément.' }, { q: 'Peut-on ajouter des notes ou des extras avant de valider ?', a: 'Oui. Chaque produit peut inclure quantité, options, suppléments et notes avant l’ajout au panier.' }] },
	},
	de: {
		meta: { homeTitle: 'Eleganter Sushi-Lieferservice', homeDescription: 'Japanisch inspirierter Sushi-Shop mit Mehrsprachigkeit, schnellem Checkout und starker Performance.', checkoutTitle: 'Kasse', successTitle: 'Bestellung bestätigt' },
		nav: { menu: 'Menü', story: 'Handwerk', checkout: 'Kasse' },
		hero: { eyebrow: 'Kyoto-Ruhe, schnell geliefert', title: 'Sushi mit Ritual gefertigt, für heute Abend verpackt.', subtitle: 'Saisonales Nigiri, feines Sashimi, Signature Rolls und warme Beilagen in einem mobilen Bestellfluss.', primaryCta: 'Menü ansehen', secondaryCta: 'Zur Kasse' },
		highlights: ['28 Min. Lieferzeit im Schnitt', 'Premium-Fisch täglich geschnitten', 'Stripe oder Barzahlung bei Lieferung'],
		menu: { title: 'Kuratiertes Menü', subtitle: 'Nach Kategorien filtern, Produktdetails öffnen, anpassen und in den Warenkorb legen.', all: 'Alle', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Getränke', sides: 'Beilagen', 'combo-meals': 'Kombis' }, details: 'Anpassen', addToCart: 'In den Warenkorb', popular: 'Besonders beliebt' },
		tags: { signature: 'Signature', fresh: 'Frisch geschnitten', bestSeller: 'Bestseller', crispy: 'Knusprig', warm: 'Wärmend', pairing: 'Pairing', chef: 'Chef-Empfehlung' },
		cart: { title: 'Deine Bestellung', empty: 'Dein Warenkorb ist leer. Füge zuerst ein paar Gerichte hinzu.', viewCart: 'Warenkorb', subtotal: 'Zwischensumme', deliveryFee: 'Liefergebühr', total: 'Gesamt', checkout: 'Zur Kasse', edit: 'Bearbeiten', remove: 'Entfernen' },
		product: { quantity: 'Menge', options: 'Optionen', addons: 'Extras', notes: 'Hinweise', specialInstructions: 'Kein Sesam, extra Sojasauce, kleiner schneiden…' },
		checkout: { title: 'Kasse', subtitle: 'Lieferdaten bestätigen, Zahlungsart wählen und Bestellung abschicken.', customerInfo: 'Kundendaten', fullName: 'Vollständiger Name', phone: 'Telefonnummer', email: 'E-Mail', fulfillment: 'Erfüllung', delivery: 'Lieferung', pickup: 'Abholung', address: 'Straße', city: 'Stadt', postalCode: 'PLZ', notes: 'Bestellhinweise', payment: 'Zahlungsart', stripe: 'Stripe Online-Zahlung', cash: 'Barzahlung bei Lieferung', submitDelivery: 'Lieferbestellung aufgeben', submitPickup: 'Abholbestellung aufgeben', empty: 'Dein Warenkorb ist leer. Kehre zum Menü zurück.', backToMenu: 'Zurück zum Menü', secureNote: 'Stripe ist als Online-Zahlungsweg für spätere Backend-Anbindung vorbereitet.' },
		success: { title: 'Danke. Deine Bestellung ist bestätigt.', subtitle: 'Eine strukturierte Bestellnutzlast wurde lokal gespeichert, damit spätere Integrationen sauber anschließen können.', orderLabel: 'Bestellnummer', backHome: 'Zurück zum Menü' },
		story: { title: 'Öffnungszeiten', body: 'Montag bis Sonntag\n11:30 bis 22:00 Uhr', stats: ['Unsere Adresse\n123 Tokyo Street, Kyoto\n100-0001, Japan', 'E-Mail\ninfo@sushizen.com', 'Telefon\n+81 75-555-0123'] },
		seo: { faqTitle: 'Häufige Fragen', faqs: [{ q: 'Wird das Sushi frisch auf Bestellung vorbereitet?', a: 'Ja. Das Menü ist auf frisch zubereitete Sushi, Sashimi, Rolls und warme Beilagen ausgelegt, damit jede Bestellung möglichst frisch wirkt.' }, { q: 'Können Kundinnen und Kunden Lieferung oder Abholung wählen?', a: 'Ja. Im Checkout lassen sich Lieferung und Abholung im selben Ablauf auswählen, inklusive sofort aktualisierter Bestelldetails.' }, { q: 'Können vor dem Hinzufügen Extras oder Hinweise angegeben werden?', a: 'Ja. Produkte unterstützen Mengenänderungen, Optionen, Add-ons und Bestellhinweise, bevor sie in den Warenkorb gelegt werden.' }] },
	},
	es: {
		meta: { homeTitle: 'Entrega de sushi elegante', homeDescription: 'Tienda de sushi inspirada en Japón con i18n, diseño refinado y compra rápida.', checkoutTitle: 'Pago', successTitle: 'Pedido confirmado' },
		nav: { menu: 'Menú', story: 'Artesanía', checkout: 'Pago' },
		hero: { eyebrow: 'Calma de Kioto, entrega rápida', title: 'Sushi preparado con ceremonia, listo para esta noche.', subtitle: 'Nigiri de temporada, sashimi impecable, rolls de autor y platos calientes en una experiencia móvil pulida.', primaryCta: 'Ver menú', secondaryCta: 'Ir al pago' },
		highlights: ['28 min de entrega promedio', 'Pescado premium cortado cada día', 'Stripe o efectivo al recibir'],
		menu: { title: 'Menú curado', subtitle: 'Filtra por categoría, abre detalles, personaliza y añade al carrito.', all: 'Todo', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bebidas', sides: 'Acompañamientos', 'combo-meals': 'Combos' }, details: 'Personalizar', addToCart: 'Añadir', popular: 'Favoritos' },
		tags: { signature: 'Firma', fresh: 'Recién cortado', bestSeller: 'Más vendido', crispy: 'Crujiente', warm: 'Reconfortante', pairing: 'Maridaje', chef: 'Selección del chef' },
		cart: { title: 'Tu pedido', empty: 'Tu carrito está vacío. Añade algunos platos para empezar.', viewCart: 'Ver carrito', subtotal: 'Subtotal', deliveryFee: 'Envío', total: 'Total', checkout: 'Continuar al pago', edit: 'Editar', remove: 'Quitar' },
		product: { quantity: 'Cantidad', options: 'Opciones', addons: 'Extras', notes: 'Notas', specialInstructions: 'Sin sésamo, más soja, cortar más pequeño…' },
		checkout: { title: 'Pago', subtitle: 'Confirma tus datos, elige entrega o recogida y finaliza el pedido.', customerInfo: 'Información del cliente', fullName: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico', fulfillment: 'Modalidad', delivery: 'Entrega', pickup: 'Recogida', address: 'Dirección', city: 'Ciudad', postalCode: 'Código postal', notes: 'Notas del pedido', payment: 'Método de pago', stripe: 'Pago online con Stripe', cash: 'Efectivo contra entrega', submitDelivery: 'Confirmar entrega', submitPickup: 'Confirmar recogida', empty: 'Tu carrito está vacío. Vuelve al menú primero.', backToMenu: 'Volver al menú', secureNote: 'Stripe queda preparado como ruta de pago online para una futura integración backend.' },
		success: { title: 'Gracias. Tu pedido está confirmado.', subtitle: 'Guardamos una estructura de pedido local para conectar backend y pagos más adelante.', orderLabel: 'Número de pedido', backHome: 'Volver al menú' },
		story: { title: 'Horario', body: 'De lunes a domingo\n11:30 a 22:00', stats: ['Nuestra dirección\n123 Tokyo Street, Kyoto\n100-0001, Japón', 'Correo electrónico\ninfo@sushizen.com', 'Teléfono\n+81 75-555-0123'] },
		seo: { faqTitle: 'Preguntas frecuentes', faqs: [{ q: '¿El sushi se prepara al momento?', a: 'Sí. La experiencia está planteada para sushi, sashimi, rolls y acompañamientos preparados al pedido, con una sensación clara de frescura.' }, { q: '¿Se puede elegir entre entrega y recogida?', a: 'Sí. El checkout permite elegir entrega o recogida dentro del mismo flujo y actualiza los detalles del pedido al instante.' }, { q: '¿Se pueden añadir notas o extras antes de pagar?', a: 'Sí. Cada producto permite ajustar cantidad, opciones, extras y notas antes de enviarlo al carrito.' }] },
	},
	pt: {
		meta: { homeTitle: 'Entrega de sushi elegante', homeDescription: 'Loja de sushi inspirada no Japão com i18n, design refinado e checkout fluido.', checkoutTitle: 'Checkout', successTitle: 'Pedido confirmado' },
		nav: { menu: 'Menu', story: 'Artesanato', checkout: 'Checkout' },
		hero: { eyebrow: 'Calma de Kyoto, entrega rápida', title: 'Sushi preparado com cerimónia, pronto para esta noite.', subtitle: 'Nigiri sazonal, sashimi impecável, rolls de assinatura e acompanhamentos quentes numa experiência mobile-first.', primaryCta: 'Ver menu', secondaryCta: 'Ir para checkout' },
		highlights: ['28 min de entrega média', 'Peixe premium cortado diariamente', 'Stripe ou dinheiro na entrega'],
		menu: { title: 'Menu curado', subtitle: 'Filtre por categoria, abra detalhes do produto, personalize e adicione ao carrinho.', all: 'Tudo', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bebidas', sides: 'Acompanhamentos', 'combo-meals': 'Combos' }, details: 'Personalizar', addToCart: 'Adicionar', popular: 'Favoritos' },
		tags: { signature: 'Assinatura', fresh: 'Corte fresco', bestSeller: 'Mais pedido', crispy: 'Crocante', warm: 'Reconfortante', pairing: 'Harmonização', chef: 'Escolha do chef' },
		cart: { title: 'O seu pedido', empty: 'O carrinho está vazio. Adicione alguns pratos para começar.', viewCart: 'Ver carrinho', subtotal: 'Subtotal', deliveryFee: 'Taxa de entrega', total: 'Total', checkout: 'Continuar', edit: 'Editar', remove: 'Remover' },
		product: { quantity: 'Quantidade', options: 'Opções', addons: 'Extras', notes: 'Notas', specialInstructions: 'Sem sésamo, extra molho de soja, cortar menor…' },
		checkout: { title: 'Checkout', subtitle: 'Confirme os dados, escolha entrega ou recolha e finalize o pedido.', customerInfo: 'Informação do cliente', fullName: 'Nome completo', phone: 'Telefone', email: 'Email', fulfillment: 'Método', delivery: 'Entrega', pickup: 'Recolha', address: 'Morada', city: 'Cidade', postalCode: 'Código postal', notes: 'Notas do pedido', payment: 'Método de pagamento', stripe: 'Pagamento online Stripe', cash: 'Dinheiro na entrega', submitDelivery: 'Finalizar entrega', submitPickup: 'Finalizar recolha', empty: 'O carrinho está vazio. Volte ao menu primeiro.', backToMenu: 'Voltar ao menu', secureNote: 'Stripe fica preparado como caminho de pagamento online para futura integração backend.' },
		success: { title: 'Obrigado. O seu pedido foi confirmado.', subtitle: 'Guardámos localmente uma estrutura de pedido para facilitar integrações futuras.', orderLabel: 'Número do pedido', backHome: 'Voltar ao menu' },
		story: { title: 'Horário', body: 'De segunda a domingo\n11:30 às 22:00', stats: ['Nossa morada\n123 Tokyo Street, Kyoto\n100-0001, Japão', 'Email\ninfo@sushizen.com', 'Telefone\n+81 75-555-0123'] },
		seo: { faqTitle: 'Perguntas frequentes', faqs: [{ q: 'O sushi é preparado na hora?', a: 'Sim. O site foi pensado para sushi, sashimi, rolls e acompanhamentos preparados por encomenda, com foco numa perceção clara de frescura.' }, { q: 'É possível escolher entrega ou recolha?', a: 'Sim. O checkout permite alternar entre entrega e recolha no mesmo fluxo, com os detalhes do pedido atualizados de imediato.' }, { q: 'É possível adicionar notas ou extras antes do checkout?', a: 'Sim. Cada produto aceita ajustes de quantidade, opções, extras e notas antes de entrar no carrinho.' }] },
	},
	it: {
		meta: { homeTitle: 'Consegna sushi elegante', homeDescription: 'Sito sushi ispirato al Giappone con i18n, design raffinato e checkout veloce.', checkoutTitle: 'Checkout', successTitle: 'Ordine confermato' },
		nav: { menu: 'Menu', story: 'Maestria', checkout: 'Checkout' },
		hero: { eyebrow: 'Calma di Kyoto, consegna rapida', title: 'Sushi preparato con rito, pronto per stasera.', subtitle: 'Nigiri stagionali, sashimi impeccabile, rolls signature e contorni caldi in un’esperienza mobile-first raffinata.', primaryCta: 'Scopri il menu', secondaryCta: 'Vai al checkout' },
		highlights: ['28 min di consegna media', 'Pesce premium tagliato ogni giorno', 'Stripe o contanti alla consegna'],
		menu: { title: 'Menu curato', subtitle: 'Filtra per categoria, apri i dettagli prodotto, personalizza e aggiungi al carrello.', all: 'Tutto', categories: { sushi: 'Sushi', sashimi: 'Sashimi', rolls: 'Rolls', drinks: 'Bevande', sides: 'Contorni', 'combo-meals': 'Combo' }, details: 'Personalizza', addToCart: 'Aggiungi', popular: 'Più amati' },
		tags: { signature: 'Signature', fresh: 'Taglio fresco', bestSeller: 'Best seller', crispy: 'Croccante', warm: 'Comfort', pairing: 'Abbinamento', chef: 'Scelta dello chef' },
		cart: { title: 'Il tuo ordine', empty: 'Il carrello è vuoto. Aggiungi qualche piatto per iniziare.', viewCart: 'Vedi carrello', subtotal: 'Subtotale', deliveryFee: 'Consegna', total: 'Totale', checkout: 'Procedi al checkout', edit: 'Modifica', remove: 'Rimuovi' },
		product: { quantity: 'Quantità', options: 'Opzioni', addons: 'Extra', notes: 'Note', specialInstructions: 'Niente sesamo, più salsa di soia, taglia più piccolo…' },
		checkout: { title: 'Checkout', subtitle: 'Conferma i dati, scegli consegna o ritiro e completa l’ordine.', customerInfo: 'Informazioni cliente', fullName: 'Nome completo', phone: 'Telefono', email: 'Email', fulfillment: 'Modalità', delivery: 'Consegna', pickup: 'Ritiro', address: 'Indirizzo', city: 'Città', postalCode: 'CAP', notes: 'Note ordine', payment: 'Metodo di pagamento', stripe: 'Pagamento online con Stripe', cash: 'Contanti alla consegna', submitDelivery: 'Conferma consegna', submitPickup: 'Conferma ritiro', empty: 'Il carrello è vuoto. Torna prima al menu.', backToMenu: 'Torna al menu', secureNote: 'Stripe è predisposto come percorso di pagamento online per una futura integrazione backend.' },
		success: { title: 'Grazie. Il tuo ordine è confermato.', subtitle: 'Abbiamo salvato localmente un payload ordine strutturato per collegare facilmente backend e pagamenti in futuro.', orderLabel: 'Numero ordine', backHome: 'Torna al menu' },
		story: { title: 'Orari di apertura', body: 'Dal lunedì alla domenica\n11:30 - 22:00', stats: ['Il nostro indirizzo\n123 Tokyo Street, Kyoto\n100-0001, Giappone', 'Email\ninfo@sushizen.com', 'Telefono\n+81 75-555-0123'] },
		seo: { faqTitle: 'Domande frequenti', faqs: [{ q: 'Il sushi viene preparato al momento?', a: 'Sì. L’esperienza è pensata per sushi, sashimi, rolls e contorni preparati su ordinazione, così ogni ordine comunica freschezza.' }, { q: 'Si può scegliere tra consegna e ritiro?', a: 'Sì. Il checkout gestisce consegna e ritiro nello stesso flusso e aggiorna subito i dettagli dell’ordine.' }, { q: 'Si possono aggiungere note o extra prima del checkout?', a: 'Sì. Ogni prodotto consente di regolare quantità, opzioni, extra e note prima di entrare nel carrello.' }] },
	},
};

export function getDictionary(locale: Locale) {
	return translations[locale];
}
