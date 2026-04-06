import type { Locale } from '../lib/i18n';
import type { MenuCategory, Product } from '../lib/types';

const t = (en: string, zh: string, fr: string, de: string, es: string, pt: string, it: string) =>
	({ en, zh, fr, de, es, pt, it }) satisfies Record<Locale, string>;

export const menuProducts: Product[] = [
	{
		id: 'salmon-nigiri',
		slug: 'salmon-nigiri',
		category: 'sushi',
		price: 14,
		image: '/images/menu/salmon-nigiri.webp',
		title: t('Salmon Nigiri Set', '三文鱼握寿司拼', 'Assortiment nigiri saumon', 'Lachs-Nigiri Set', 'Set de nigiri de salmón', 'Conjunto de nigiri de salmão', 'Set nigiri al salmone'),
		description: t('Silky salmon over warm seasoned rice with yuzu-kosho gloss.', '柔滑三文鱼搭配温热寿司饭，并点缀柚子胡椒香气。', 'Saumon soyeux sur riz assaisonné tiède avec une touche de yuzu-kosho.', 'Zarter Lachs auf warmem Sushi-Reis mit Yuzu-Kosho-Note.', 'Salmón sedoso sobre arroz templado con brillo de yuzu-kosho.', 'Salmão macio sobre arroz temperado com toque de yuzu-kosho.', 'Salmone vellutato su riso tiepido condito con tocco di yuzu-kosho.'),
		tagKeys: ['signature', 'fresh'],
		options: [
			{
				id: 'style',
				label: t('Preparation', '做法', 'Préparation', 'Zubereitung', 'Preparación', 'Preparação', 'Preparazione'),
				required: true,
				choices: [
					{ id: 'classic', label: t('Classic', '经典', 'Classique', 'Klassisch', 'Clásico', 'Clássico', 'Classico') },
					{ id: 'aburi', label: t('Lightly torched', '轻炙烧', 'Légèrement flambé', 'Leicht flambiert', 'Ligeramente sellado', 'Levemente maçaricado', 'Leggermente scottato'), priceDelta: 2 },
				],
			},
		],
		addons: [
			{ id: 'wasabi', label: t('Fresh wasabi', '新鲜山葵', 'Wasabi frais', 'Frischer Wasabi', 'Wasabi fresco', 'Wasabi fresco', 'Wasabi fresco'), price: 1.5 },
			{ id: 'miso', label: t('Mini miso soup', '迷你味噌汤', 'Mini soupe miso', 'Mini-Misosuppe', 'Mini sopa miso', 'Mini sopa miso', 'Mini zuppa di miso'), price: 3 },
		],
	},
	{
		id: 'bluefin-sashimi',
		slug: 'bluefin-sashimi',
		category: 'sashimi',
		price: 18,
		image: '/images/menu/bluefin-sashimi.webp',
		title: t('Bluefin Sashimi', '蓝鳍金枪鱼刺身', 'Sashimi de thon rouge', 'Bluefin-Sashimi', 'Sashimi de atún rojo', 'Sashimi de atum bluefin', 'Sashimi di tonno rosso'),
		description: t('Thick, pristine slices with ponzu mist and shaved daikon.', '厚切新鲜蓝鳍金枪鱼，搭配柚子醋与萝卜丝。', 'Tranches épaisses et nettes, ponzu léger et daikon râpé.', 'Kräftige, makellose Scheiben mit Ponzu und Daikon.', 'Láminas impecables con ponzu y daikon rallado.', 'Fatias impecáveis com ponzu e daikon laminado.', 'Fette impeccabili con ponzu e daikon affettato.'),
		tagKeys: ['chef', 'fresh'],
		options: [
			{
				id: 'cut',
				label: t('Cut style', '切法', 'Style de coupe', 'Schnittart', 'Estilo de corte', 'Tipo de corte', 'Stile di taglio'),
				choices: [
					{ id: 'thick', label: t('Thick cut', '厚切', 'Coupe épaisse', 'Dicker Schnitt', 'Corte grueso', 'Corte espesso', 'Taglio spesso') },
					{ id: 'delicate', label: t('Delicate slices', '薄切', 'Tranches fines', 'Feine Scheiben', 'Láminas finas', 'Fatias delicadas', 'Fette delicate') },
				],
			},
		],
		addons: [
			{ id: 'ponzu', label: t('Extra ponzu', '额外柚子醋', 'Ponzu en plus', 'Extra Ponzu', 'Ponzu extra', 'Ponzu extra', 'Ponzu extra'), price: 1 },
			{ id: 'rice', label: t('Side sushi rice', '配寿司饭', 'Riz à sushi', 'Sushi-Reis dazu', 'Arroz de sushi', 'Arroz de sushi', 'Riso sushi'), price: 2.5 },
		],
	},
	{
		id: 'dragon-roll',
		slug: 'dragon-roll',
		category: 'rolls',
		price: 16,
		image: '/images/menu/dragon-roll.webp',
		title: t('Dragon Roll', '飞龙卷', 'Dragon roll', 'Dragon Roll', 'Dragon roll', 'Dragon roll', 'Dragon roll'),
		description: t('Tempura shrimp, avocado fan, cucumber, and sweet soy lacquer.', '天妇罗虾、牛油果、黄瓜与甜酱油亮泽收尾。', 'Crevette tempura, avocat, concombre et laque de soja sucré.', 'Tempura-Garnele, Avocado, Gurke und süßer Sojalack.', 'Langostino tempura, aguacate, pepino y glaseado de soja dulce.', 'Camarão tempura, abacate, pepino e glaze de soja doce.', 'Gambero tempura, avocado, cetriolo e laccatura di soia dolce.'),
		tagKeys: ['bestSeller', 'crispy'],
		options: [
			{
				id: 'sauce',
				label: t('Finishing sauce', '收尾酱汁', 'Sauce finale', 'Finish-Sauce', 'Salsa final', 'Molho final', 'Salsa finale'),
				required: true,
				choices: [
					{ id: 'soy', label: t('Sweet soy', '甜酱油', 'Soja sucrée', 'Süße Soja', 'Soja dulce', 'Soja doce', 'Soia dolce') },
					{ id: 'spicy-mayo', label: t('Spicy mayo', '辣蛋黄酱', 'Mayo épicée', 'Scharfe Mayo', 'Mayonesa picante', 'Maionese picante', 'Maionese piccante'), priceDelta: 1 },
				],
			},
		],
		addons: [
			{ id: 'crunch', label: t('Tempura crunch', '天妇罗脆粒', 'Croustillant tempura', 'Tempura-Crunch', 'Crujiente tempura', 'Crunch tempura', 'Crunch tempura'), price: 1 },
			{ id: 'ginger', label: t('Pickled ginger', '腌姜', 'Gingembre mariné', 'Eingelegter Ingwer', 'Jengibre encurtido', 'Gengibre em conserva', 'Zenzero marinato'), price: 0.5 },
		],
	},
	{
		id: 'truffle-tuna-roll',
		slug: 'truffle-tuna-roll',
		category: 'rolls',
		price: 19,
		image: '/images/menu/truffle-roll.webp',
		title: t('Truffle Tuna Roll', '松露金枪鱼卷', 'Roll thon truffe', 'Trüffel-Thunfisch-Roll', 'Roll de atún y trufa', 'Roll de atum com trufa', 'Roll tonno e tartufo'),
		description: t('Tuna tartare, chive, crisp shallot, and a whisper of black truffle.', '金枪鱼塔塔、细香葱、脆洋葱与淡淡黑松露香。', 'Tartare de thon, ciboulette, échalote croustillante et touche de truffe noire.', 'Thunfisch-Tatar, Schnittlauch, knusprige Schalotte und schwarzer Trüffel.', 'Tartar de atún, cebollino, chalota crujiente y trufa negra.', 'Tártaro de atum, cebolinho, chalota crocante e trufa negra.', 'Tartare di tonno, erba cipollina, scalogno croccante e tartufo nero.'),
		tagKeys: ['chef', 'signature'],
		addons: [
			{ id: 'truffle', label: t('Extra truffle glaze', '额外松露酱', 'Glace truffe en plus', 'Extra Trüffelglasur', 'Glaseado extra de trufa', 'Glaze extra de trufa', 'Glassa al tartufo extra'), price: 2.5 },
		],
	},
	{
		id: 'yuzu-sparkling-tea',
		slug: 'yuzu-sparkling-tea',
		category: 'drinks',
		price: 6,
		image: '/images/menu/yuzu-tea.webp',
		title: t('Yuzu Sparkling Tea', '柚子气泡茶', 'Thé pétillant au yuzu', 'Yuzu-Sprudeltee', 'Té espumoso de yuzu', 'Chá espumante de yuzu', 'Tè frizzante allo yuzu'),
		description: t('Citrus lift, jasmine tea perfume, and bright bubbles.', '柑橘清香、茉莉花茶香与轻盈气泡感。', 'Agrumes, parfum de jasmin et bulles vives.', 'Zitrusfrische, Jasmintee und feine Perlage.', 'Toque cítrico, jazmín y burbuja ligera.', 'Toque cítrico, jasmim e bolha leve.', 'Agrumi, gelsomino e bollicine leggere.'),
		tagKeys: ['pairing'],
		addons: [
			{ id: 'mochi', label: t('Mochi sweet', '麻糬甜点', 'Mochi', 'Mochi', 'Mochi', 'Mochi', 'Mochi'), price: 2.5 },
		],
	},
	{
		id: 'miso-soup',
		slug: 'miso-soup',
		category: 'sides',
		price: 5,
		image: '/images/menu/miso-soup.webp',
		title: t('White Miso Soup', '白味噌汤', 'Soupe miso blanche', 'Weiße Misosuppe', 'Sopa miso blanca', 'Sopa de missô branco', 'Zuppa miso bianca'),
		description: t('Silken tofu, scallion, wakame, and comforting umami.', '嫩豆腐、葱花、裙带菜与温润鲜味。', 'Tofu soyeux, ciboule, wakame et umami réconfortant.', 'Seidentofu, Frühlingszwiebel, Wakame und sanftes Umami.', 'Tofu sedoso, cebolleta, wakame y umami reconfortante.', 'Tofu macio, cebolinho, wakame e umami reconfortante.', 'Tofu morbido, cipollotto, wakame e umami avvolgente.'),
		tagKeys: ['warm'],
		addons: [
			{ id: 'tofu', label: t('Extra tofu', '额外豆腐', 'Tofu en plus', 'Extra Tofu', 'Tofu extra', 'Tofu extra', 'Tofu extra'), price: 1 },
		],
	},
	{
		id: 'gyoza-trio',
		slug: 'gyoza-trio',
		category: 'sides',
		price: 9,
		image: '/images/menu/gyoza.webp',
		title: t('Crispy Gyoza Trio', '脆底煎饺拼', 'Trio de gyoza croustillants', 'Knusprige Gyoza-Trio', 'Trío de gyozas crujientes', 'Trio de gyoza crocantes', 'Tris di gyoza croccanti'),
		description: t('Pan-seared dumplings with sesame-chili dip and herbs.', '香煎饺子搭配芝麻辣酱与香草点缀。', 'Raviolis poêlés avec sauce sésame-piment.', 'Gebratene Dumplings mit Sesam-Chili-Dip.', 'Empanadillas a la plancha con salsa sésamo-picante.', 'Guiozas douradas com molho de sésamo e chili.', 'Gyoza rosolati con salsa sesamo-peperoncino.'),
		tagKeys: ['crispy', 'bestSeller'],
		addons: [
			{ id: 'dip', label: t('Extra dipping sauce', '额外蘸酱', 'Sauce supplémentaire', 'Extra Dip', 'Salsa extra', 'Molho extra', 'Salsa extra'), price: 1 },
		],
	},
	{
		id: 'omakase-dinner',
		slug: 'omakase-dinner',
		category: 'combo-meals',
		price: 34,
		image: '/images/menu/omakase.webp',
		title: t('Omakase Dinner Set', '主厨精选晚餐套餐', 'Menu dîner omakase', 'Omakase Dinner Set', 'Cena omakase', 'Jantar omakase', 'Cena omakase'),
		description: t('Nigiri, sashimi, roll, side, and dessert plated as a balanced tasting set.', '握寿司、刺身、卷物、配菜与甜点组成的平衡品鉴套餐。', 'Nigiri, sashimi, roll, accompagnement et dessert en menu complet.', 'Nigiri, Sashimi, Roll, Beilage und Dessert als ausgewogenes Menü.', 'Nigiri, sashimi, roll, acompañamiento y postre en un menú completo.', 'Nigiri, sashimi, roll, acompanhamento e sobremesa num menu completo.', 'Nigiri, sashimi, roll, contorno e dessert in un set completo.'),
		tagKeys: ['chef', 'popular'],
		options: [
			{
				id: 'portion',
				label: t('Set size', '套餐规格', 'Taille du menu', 'Menügröße', 'Tamaño del menú', 'Tamanho do menu', 'Dimensione del set'),
				required: true,
				choices: [
					{ id: 'standard', label: t('Standard', '标准', 'Standard', 'Standard', 'Estándar', 'Padrão', 'Standard') },
					{ id: 'deluxe', label: t('Deluxe', '豪华', 'Deluxe', 'Deluxe', 'Deluxe', 'Deluxe', 'Deluxe'), priceDelta: 8 },
				],
			},
		],
		addons: [
			{ id: 'tea', label: t('Yuzu sparkling tea', '柚子气泡茶', 'Thé pétillant yuzu', 'Yuzu-Sprudeltee', 'Té espumoso de yuzu', 'Chá espumante de yuzu', 'Tè frizzante allo yuzu'), price: 4 },
			{ id: 'mochi', label: t('Matcha mochi', '抹茶麻糬', 'Mochi matcha', 'Matcha-Mochi', 'Mochi de matcha', 'Mochi matcha', 'Mochi al matcha'), price: 3 },
		],
	},
	{
		id: 'sakura-bento',
		slug: 'sakura-bento',
		category: 'combo-meals',
		price: 27,
		image: '/images/menu/sakura-bento.webp',
		title: t('Sakura Bento Combo', '樱花便当套餐', 'Bento sakura', 'Sakura Bento Kombi', 'Combo bento sakura', 'Combo bento sakura', 'Combo bento sakura'),
		description: t('Balanced lunch box with roll, salad, tamago, and a small dessert.', '平衡便当组合，含卷物、沙拉、玉子烧与小甜点。', 'Bento équilibré avec roll, salade, tamago et petit dessert.', 'Ausgewogene Bento-Box mit Roll, Salat, Tamago und Dessert.', 'Caja equilibrada con roll, ensalada, tamago y postre.', 'Bento equilibrado com roll, salada, tamago e sobremesa.', 'Bento equilibrato con roll, insalata, tamago e dessert.'),
		tagKeys: ['bestSeller', 'pairing'],
	},
	{
		id: 'truffle-salmon-carpaccio',
		slug: 'truffle-salmon-carpaccio',
		category: 'sashimi',
		price: 17,
		image: '/images/menu/deluxe-sashimi-bowl.jpg',
		title: t('Deluxe Sashimi Bowl', '豪华刺身拼盘', 'Bol sashimi deluxe', 'Deluxe Sashimi Bowl', 'Deluxe Sashimi Bowl', 'Tigela deluxe de sashimi', 'Deluxe Sashimi Bowl'),
		description: t('The freshest, most vibrant cuts of seasonal fish resting on a bed of ice.', '最新鲜、最丰润的时令鱼生，铺陈在冰床之上。', 'Les coupes saisonnières les plus fraîches et les plus éclatantes reposent sur un lit de glace.', 'Frische, leuchtende Stücke saisonalen Fischs auf einem Bett aus Eis.', 'Los cortes de pescado de temporada más frescos y vibrantes sobre una cama de hielo.', 'Os cortes sazonais mais frescos e vibrantes servidos sobre uma cama de gelo.', 'I tagli stagionali più freschi e vibranti serviti su un letto di ghiaccio.'),
		tagKeys: ['fresh', 'signature'],
		addons: [
			{ id: 'ponzu', label: t('Extra truffle ponzu', '额外松露柚子醋', 'Ponzu truffe en plus', 'Extra Trüffel-Ponzu', 'Ponzu de trufa extra', 'Ponzu de trufa extra', 'Ponzu al tartufo extra'), price: 1.5 },
		],
	},
	{
		id: 'volcano-roll',
		slug: 'volcano-roll',
		category: 'rolls',
		price: 18,
		image: '/images/menu/volcano-roll.jpg',
		title: t('Volcano Roll', '火山卷', 'Volcano roll', 'Volcano Roll', 'Volcano roll', 'Volcano roll', 'Volcano roll'),
		description: t('Spicy tuna and crab baked with spicy mayo and tempura crunch.', '辣金枪鱼与蟹肉搭配辣酱炙烤，并撒上天妇罗脆粒。', 'Thon épicé et chair de crabe gratinés avec mayo épicée et croustillant tempura.', 'Würziger Thunfisch und Krabbe, überbacken mit scharfer Mayo und Tempura-Crunch.', 'Atún picante y cangrejo horneados con mayonesa picante y crujiente tempura.', 'Atum picante e caranguejo gratinados com maionese picante e crocante tempura.', 'Tonno piccante e granchio gratinati con maionese piccante e tempura croccante.'),
		tagKeys: ['bestSeller', 'crispy'],
		options: [
			{
				id: 'heat',
				label: t('Spice level', '辣度', 'Niveau d’épices', 'Schärfegrad', 'Nivel de picante', 'Nível de picante', 'Livello di piccante'),
				choices: [
					{ id: 'medium', label: t('Medium', '中辣', 'Moyen', 'Mittel', 'Medio', 'Médio', 'Medio') },
					{ id: 'hot', label: t('Hot', '重辣', 'Fort', 'Scharf', 'Picante', 'Picante', 'Piccante'), priceDelta: 1 },
				],
			},
		],
	},
	{
		id: 'otoro-nigiri-box',
		slug: 'otoro-nigiri-box',
		category: 'sushi',
		price: 24,
		image: '/images/menu/otoro-nigiri-box.jpg',
		title: t('Otoro Nigiri Box', '大腹金枪鱼握寿司盒', 'Coffret nigiri otoro', 'Otoro Nigiri Box', 'Caja de nigiri otoro', 'Caixa de nigiri otoro', 'Box nigiri otoro'),
		description: t('Premium fatty tuna nigiri with rich umami and a soft finish.', '精选大腹金枪鱼握寿司，油脂丰润，入口柔滑。', 'Nigiri d’otoro premium, riche en umami et fondant.', 'Premium-Otoro-Nigiri mit intensivem Umami und weichem Finish.', 'Nigiri premium de otoro con umami profundo y textura suave.', 'Nigiri premium de otoro com umami intenso e textura macia.', 'Nigiri premium di otoro con umami ricco e finale morbido.'),
		tagKeys: ['chef', 'fresh'],
		options: [
			{
				id: 'count',
				label: t('Portion', '份量', 'Portion', 'Portion', 'Porción', 'Porção', 'Porzione'),
				required: true,
				choices: [
					{ id: 'four', label: t('4 pieces', '4贯', '4 pièces', '4 Stück', '4 piezas', '4 peças', '4 pezzi') },
					{ id: 'six', label: t('6 pieces', '6贯', '6 pièces', '6 Stück', '6 piezas', '6 peças', '6 pezzi'), priceDelta: 6 },
				],
			},
		],
	},
];

export const menuCategories: MenuCategory[] = ['sushi', 'sashimi', 'rolls', 'drinks', 'sides', 'combo-meals'];
