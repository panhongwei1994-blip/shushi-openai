import type { Locale } from '../lib/i18n';
import type { MenuCategory, Product } from '../lib/types';

const t = (en: string, zh: string, fr: string, de: string, es: string, pt: string, it: string) =>
	({ en, zh, fr, de, es, pt, it }) satisfies Record<Locale, string>;

export const menuProducts: Product[] = [
	{
		id: 'salmon-nigiri',
		slug: 'salmon-nigiri',
		category: 'sushi',
		price: 22,
		image: '/images/menu/salmon-nigiri.webp',
		title: t('Salmon Nigiri', '三文鱼握寿司', 'Nigiri de saumon', 'Lachs-Nigiri', 'Nigiri de salmón', 'Nigiri de salmão', 'Nigiri al salmone'),
		description: t('Glossy salmon laid over warm seasoned rice with a clean, buttery finish.', '油润三文鱼覆在温热寿司饭上，口感细腻而柔和。', 'Saumon brillant sur riz tiède assaisonné, avec une finale douce et beurrée.', 'Glänzender Lachs auf warmem Sushi-Reis mit weichem, buttrigem Finish.', 'Salmón brillante sobre arroz templado con un final suave y mantecoso.', 'Salmão brilhante sobre arroz temperado com final suave e amanteigado.', 'Salmone lucido su riso tiepido condito con finale morbido e burroso.'),
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
		price: 28,
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
		price: 24,
		image: '/images/menu/dragon-roll.webp',
		title: t('Golden Dragon Roll', '金龙卷', 'Golden Dragon Roll', 'Golden Dragon Roll', 'Golden Dragon Roll', 'Golden Dragon Roll', 'Golden Dragon Roll'),
		description: t('Crispy shrimp tempura, cucumber, avocado, and a glossy sweet soy finish.', '酥脆天妇罗虾、黄瓜、牛油果与亮泽甜酱油层层包裹。', 'Crevette tempura croustillante, concombre, avocat et finition brillante au soja sucré.', 'Knusprige Tempura-Garnele, Gurke, Avocado und glänzendes süßes Soja-Finish.', 'Tempura crujiente de camarón, pepino, aguacate y acabado brillante de soja dulce.', 'Camarão tempura crocante, pepino, abacate e finalização brilhante de soja doce.', 'Gambero tempura croccante, cetriolo, avocado e finitura lucida alla soia dolce.'),
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
		price: 26,
		image: '/images/menu/truffle-roll.webp',
		title: t('Crispy Tuna Roll', '酥脆金枪鱼卷', 'Roll croustillant au thon', 'Knusprige Thunfisch-Roll', 'Roll crujiente de atún', 'Roll crocante de atum', 'Roll croccante al tonno'),
		description: t('A rich tuna roll topped with crisp garnish, layered sauce, and bold texture.', '浓郁金枪鱼卷搭配酥脆点缀与层次分明的酱汁口感。', 'Un roll au thon généreux avec garniture croustillante, sauce onctueuse et texture marquée.', 'Eine kräftige Thunfisch-Roll mit knusprigem Topping, cremiger Sauce und markanter Textur.', 'Un roll de atún intenso con topping crujiente, salsa cremosa y mucha textura.', 'Um roll de atum intenso com cobertura crocante, molho cremoso e bastante textura.', 'Un roll di tonno ricco con topping croccante, salsa cremosa e texture decisa.'),
		tagKeys: ['chef', 'signature'],
		addons: [
			{ id: 'truffle', label: t('Extra truffle glaze', '额外松露酱', 'Glace truffe en plus', 'Extra Trüffelglasur', 'Glaseado extra de trufa', 'Glaze extra de trufa', 'Glassa al tartufo extra'), price: 2.5 },
		],
	},
	{
		id: 'yuzu-sparkling-tea',
		slug: 'yuzu-sparkling-tea',
		category: 'drinks',
		price: 9,
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
		price: 8,
		image: '/images/menu/miso-soup.webp',
		title: t('Miso Soup', '味噌汤', 'Soupe miso', 'Misosuppe', 'Sopa miso', 'Sopa de missô', 'Zuppa di miso'),
		description: t('A warm bowl of tofu, wakame, and mellow umami broth.', '一碗带有豆腐、裙带菜与柔和鲜味的热味噌汤。', 'Un bol chaud de tofu, wakamé et bouillon miso tout en douceur.', 'Eine warme Schale mit Tofu, Wakame und mildem Umami-Brühe.', 'Un cuenco caliente con tofu, wakame y caldo umami suave.', 'Uma tigela quente com tofu, wakame e caldo umami suave.', 'Una ciotola calda con tofu, wakame e brodo umami delicato.'),
		tagKeys: ['warm'],
		addons: [
			{ id: 'tofu', label: t('Extra tofu', '额外豆腐', 'Tofu en plus', 'Extra Tofu', 'Tofu extra', 'Tofu extra', 'Tofu extra'), price: 1 },
		],
	},
	{
		id: 'gyoza-trio',
		slug: 'gyoza-trio',
		category: 'sides',
		price: 14,
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
		price: 72,
		image: '/images/menu/omakase.webp',
		title: t('Omakase Dinner Platter', '主厨精选晚餐拼盘', 'Plateau dîner omakase', 'Omakase Dinner Platter', 'Plato omakase de cena', 'Travessa omakase de jantar', 'Piatto omakase da cena'),
		description: t('A composed chef selection of nigiri, sashimi, maki, and warm bites for a full evening table.', '主厨甄选握寿司、刺身、卷物与热食组合成一整套晚餐体验。', 'Une sélection du chef composée de nigiri, sashimi, maki et bouchées chaudes pour un dîner complet.', 'Eine Chef-Auswahl aus Nigiri, Sashimi, Maki und warmen Häppchen für einen vollständigen Abendtisch.', 'Una selección del chef con nigiri, sashimi, maki y bocados calientes para una cena completa.', 'Uma seleção do chef com nigiri, sashimi, maki e pratos quentes para um jantar completo.', 'Una selezione dello chef con nigiri, sashimi, maki e bocconi caldi per una cena completa.'),
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
		price: 54,
		image: '/images/menu/sakura-bento.webp',
		title: t('Sakura Bento Box', '樱花便当盒', 'Boîte bento sakura', 'Sakura Bento Box', 'Caja bento sakura', 'Caixa bento sakura', 'Box bento sakura'),
		description: t('An elegant boxed set with curated sushi pieces, small rolls, and chef-finished sides.', '一款组合精致寿司、卷物与主厨小菜的高级便当盒。', 'Un coffret élégant avec sushi choisis, petits rolls et accompagnements finalisés par le chef.', 'Eine elegante Box mit kuratierten Sushi-Stücken, kleinen Rolls und sorgfältig abgestimmten Beilagen.', 'Una caja elegante con piezas de sushi seleccionadas, rolls pequeños y acompañamientos del chef.', 'Uma caixa elegante com peças de sushi selecionadas, pequenos rolls e acompanhamentos finalizados pelo chef.', 'Una box elegante con sushi selezionato, piccoli rolls e contorni rifiniti dallo chef.'),
		tagKeys: ['bestSeller', 'pairing'],
	},
	{
		id: 'truffle-salmon-carpaccio',
		slug: 'truffle-salmon-carpaccio',
		category: 'sashimi',
		price: 44,
		image: '/images/menu/deluxe-sashimi-bowl.jpg',
		title: t('Deluxe Sashimi Bowl', '豪华刺身拼盘', 'Bol sashimi deluxe', 'Deluxe Sashimi Bowl', 'Deluxe Sashimi Bowl', 'Tigela deluxe de sashimi', 'Deluxe Sashimi Bowl'),
		description: t('The freshest, most vibrant cuts of seasonal fish arranged over ice for a pristine sashimi presentation.', '最新鲜、最丰润的时令鱼生陈列于冰床之上，呈现干净利落的高级刺身感。', 'Les coupes saisonnières les plus fraîches et éclatantes sont dressées sur glace pour une présentation sashimi impeccable.', 'Frische, leuchtende Stücke saisonalen Fischs auf Eis angerichtet für eine makellose Sashimi-Präsentation.', 'Los cortes de pescado de temporada más frescos y vibrantes se presentan sobre hielo para una experiencia de sashimi impecable.', 'Os cortes sazonais mais frescos e vibrantes são servidos sobre gelo para uma apresentação impecável de sashimi.', 'I tagli stagionali più freschi e vibranti sono presentati su ghiaccio per un sashimi impeccabile.'),
		tagKeys: ['fresh', 'chef'],
		addons: [
			{ id: 'ponzu', label: t('Extra truffle ponzu', '额外松露柚子醋', 'Ponzu truffe en plus', 'Extra Trüffel-Ponzu', 'Ponzu de trufa extra', 'Ponzu de trufa extra', 'Ponzu al tartufo extra'), price: 1.5 },
		],
	},
	{
		id: 'volcano-roll',
		slug: 'volcano-roll',
		category: 'rolls',
		price: 41,
		image: '/images/menu/volcano-roll.jpg',
		title: t('Volcano Roll', '火山卷', 'Volcano roll', 'Volcano Roll', 'Volcano roll', 'Volcano roll', 'Volcano roll'),
		description: t('Spicy tuna and crab folded into a hot, rich roll with baked mayo and tempura crunch.', '辣金枪鱼与蟹肉卷入热辣浓郁的卷物中，再覆以炙烤酱与天妇罗脆粒。', 'Thon épicé et crabe dans un roll chaud et généreux, fini avec mayo gratinée et croustillant tempura.', 'Würziger Thunfisch und Krabbe in einer heißen, reichen Roll mit überbackener Mayo und Tempura-Crunch.', 'Atún picante y cangrejo en un roll intenso y caliente, terminado con mayonesa gratinada y crujiente tempura.', 'Atum picante e caranguejo num roll quente e intenso, finalizado com maionese gratinada e crocante tempura.', 'Tonno piccante e granchio in un roll caldo e ricco, rifinito con maionese gratinata e tempura croccante.'),
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
		price: 57,
		image: '/images/menu/otoro-nigiri-box.jpg',
		title: t('Otoro Nigiri Box', '大腹金枪鱼握寿司盒', 'Coffret nigiri otoro', 'Otoro Nigiri Box', 'Caja de nigiri otoro', 'Caixa de nigiri otoro', 'Box nigiri otoro'),
		description: t('Premium fatty tuna nigiri with deep umami, silky marbling, and a luxurious finish.', '精选大腹金枪鱼握寿司，油脂细密、鲜味深厚，入口极为柔滑。', 'Nigiri d’otoro premium au marbré soyeux, à l’umami profond et à la finale luxueuse.', 'Premium-Otoro-Nigiri mit seidiger Marmorierung, tiefem Umami und luxuriösem Finish.', 'Nigiri premium de otoro con veteado sedoso, umami profundo y acabado lujoso.', 'Nigiri premium de otoro com marmoreio sedoso, umami profundo e final luxuoso.', 'Nigiri premium di otoro con marezzatura setosa, umami profondo e finale lussuoso.'),
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
