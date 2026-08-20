export type MenuPrice = {
  label: string;
  price: number;
};

export type MenuItemData = {
  name: string;
  description?: string;
  price?: number;
  prices?: MenuPrice[];
};

export type MenuCategoryData = {
  id: string;
  name: string;
  description?: string;
  items: MenuItemData[];
};

export type MenuGroupData = {
  id: string;
  name: string;
  description?: string;
  categories: MenuCategoryData[];
};

/* =========================================================
   LA MARQUISE RESTAURANT
   ========================================================= */

export const restaurantMenu: MenuGroupData[] = [
  {
    id: "cuisine",
    name: "Cuisine",
    description:
      "Cuisine internationale, spécialités orientales, grillades et créations de La Marquise.",
    categories: [
      {
        id: "amuse-bouches",
        name: "Amuse-Bouches",
        items: [
          {
            name: "Crevettes Coco",
            description:
              "Crevettes, pomme de terre croquantes, sauce au miel.",
            price: 5000,
          },
          {
            name: "Nachos au Cheddar & Jalapeños",
            description:
              "Nachos, sauce cheddar, olives noires, jalapeño, sauce guacamole.",
            price: 6500,
          },
          {
            name: "Croquettes Poulet",
            description:
              "Purée de poulet, pomme de terre croquantes, sauce soya.",
            price: 4500,
          },
          {
            name: "Edamame",
            description:
              "Haricots verts japonais, sauce soya.",
            price: 6500,
          },
          {
            name: "Légumes Croquants",
            description:
              "Légumes sautés, vermicelles chinois, pomme de terre croquantes, sauce maison.",
            price: 4000,
          },
          {
            name: "Pommes Frites au Fromage",
            description:
              "Fromage cheddar, sauce avocat.",
            price: 4000,
          },
          {
            name: "Pommes Frites Nature",
            price: 2000,
          },
        ],
      },

      {
        id: "salades-entrees-froides",
        name: "Salades & Entrées Froides",
        items: [
          {
            name: "Carpaccio de Bœuf",
            description:
              "Tranches de viande fines, purée de champignons, poivre noir, parmesan, sauce carpaccio.",
            price: 7500,
          },
          {
            name: "Foie Gras",
            description:
              "Deux tranches de foie gras, salade mesclun, pain de mie, confit de figues.",
            price: 15500,
          },
          {
            name: "Saumon Maki",
            description:
              "Roulé de saumon fumé, crabe, mayonnaise, caviar noir, citron.",
            price: 14000,
          },
          {
            name: "Mozzarella Fraîche",
            description:
              "Fromage mozzarella fraîche, tomates, olives secs, basilic, sauce pesto.",
            price: 12500,
          },
          {
            name: "Tartare de Saumon",
            description:
              "Saumon frais mariné, avocat, citron, basilic, échalote.",
            price: 12500,
          },
          {
            name: "Bol de Poké",
            description:
              "Riz japonais, saumon frais, Saint-Jacques, thon rouge, caviar rouge, caviar noir, edamame, avocat.",
            price: 18000,
          },
          {
            name: "Salade Verte",
            description:
              "Mâche, roquette, champignons de Paris, feuilles de chêne, tomates cerises, figues sèches, avocats, tomates séchées.",
            price: 10000,
          },
          {
            name: "Salade du Chèvre Chaud",
            description:
              "Fromage de chèvre, salade mesclun, sauce balsamique au miel, sésame, pomme.",
            price: 11000,
          },
          {
            name: "Salade Poulet Asiatique",
            description:
              "Choux chinois, coriandre, carottes, sésame, arachides, sauce Chinatown.",
            price: 9500,
          },
          {
            name: "Salade de Crabe Frais",
            description:
              "Crabes frais, salade mesclun, mayonnaise, avocats, aneth, huile d'olive, sauce citron.",
            price: 17000,
          },
          {
            name: "Salade Bœuf Thaïlandaise",
            description:
              "Viande, laitue, menthe, poivrons, mangues, tomates cerises, basilic, sauce thaïlandaise.",
            price: 9500,
          },
          {
            name: "Salade Niçoise au Thon",
            description:
              "Laitue, tomates cerises, haricots, olives, thon, œufs, sauce citron.",
            price: 11000,
          },
          {
            name: "Salade aux Crevettes",
            description:
              "Crevettes, mélange de salades, tomates cerises, avocat, orange, pommes, sauce maison.",
            price: 11500,
          },
          {
            name: "Salade La Marquise",
            description:
              "Quinoa rouge et blanc, mangue, poivron, menthe, tomates, persil.",
            price: 8500,
          },
        ],
      },

      {
        id: "soupes",
        name: "Soupes",
        items: [
          {
            name: "Soupe à l'Oignon",
            description:
              "Oignon blanc parfumé, parmesan, truffe.",
            price: 6000,
          },
          {
            name: "Soupe Minestrone",
            description:
              "Mélange de légumes, herbes de Provence.",
            price: 5000,
          },
        ],
      },

      {
        id: "entrees-chaudes",
        name: "Entrées Chaudes",
        items: [
          {
            name: "Bâtonnets de Mozzarella",
            description:
              "6 pièces mozzarella panées, herbes, sauce maison.",
            price: 5500,
          },
          {
            name: "Duo Teriyaki",
            description:
              "Mix de brochettes poulet et viande marinées, ananas, brocoli, sauce teriyaki.",
            price: 5500,
          },
          {
            name: "Tempura de Crevette",
            description:
              "4 pièces tempura crevettes, sauce guacamole, sauce tempura.",
            price: 8000,
          },
          {
            name: "Calamars du Pêcheur",
            description:
              "8 pièces calamars marinés, mélange de salade, sauce tartare, citron.",
            price: 7500,
          },
          {
            name: "Bœuf à la Cubaine",
            description:
              "Filet de bœuf, légumes grillés, vermicelle, sésame blanc, sauce La Marquise.",
            price: 5000,
          },
          {
            name: "Ailes de BBQ",
            description:
              "5 pièces ailes de poulet, sauce BBQ, parmesan.",
            price: 5000,
          },
          {
            name: "Ailes de Buffalo",
            description:
              "5 pièces ailes de poulet, sauce Buffalo, parmesan.",
            price: 5000,
          },
          {
            name: "Crevettes Gratinées",
            description:
              "Crevettes sautées à l'ail, crème gratinée, céleri.",
            price: 8000,
          },
        ],
      },

      {
        id: "pates",
        name: "Pâtes",
        items: [
          {
            name: "Penne à l'Arrabiata",
            description:
              "Penne, olives noires, sauce tomate piquante, fromage parmesan.",
            price: 7500,
          },
          {
            name: "Spaghetti Épicé aux Crevettes",
            description:
              "Pâtes spaghetti, crevettes, fromage parmesan, sauce tomate.",
            price: 12500,
          },
          {
            name: "Fettuccini Alfredo",
            description:
              "Pâtes fettuccini, crème fraîche, poitrine de volaille, champignons, parmesan.",
            price: 10000,
          },
          {
            name: "Linguini aux Fruits de Mer",
            description:
              "Linguini, calamars, crevettes, moules, parmesan.",
            price: 14000,
          },
          {
            name: "Penne à la Citrouille",
            description:
              "Penne, sauce crème, moules, citrouille caramélisée, parmesan.",
            price: 11000,
          },
        ],
      },

      {
        id: "pizzas-restaurant",
        name: "Pizzas",
        items: [
          {
            name: "Saumon Fumé",
            description:
              "Fromage Philadelphia, saumon fumé, roquette, câpre, citron.",
            price: 15000,
          },
          {
            name: "Quatre Fromages",
            description:
              "Quatre tomates, roquefort, mozzarella, emmental, parmesan.",
            price: 11000,
          },
          {
            name: "Légumes",
            description:
              "Sauce tomate, artichauts, maïs, poivrons, oignons, champignons, tomates cerises, olives, fromage mozzarella.",
            price: 10000,
          },
          {
            name: "Bresaola",
            description:
              "Sauce tomate, fromage mozzarella, roquette, bresaola, parmesan.",
            price: 15000,
          },
          {
            name: "Fruits de Mer",
            description:
              "Sauce tomate, basilic, calamars, crevettes, moules, fromage mozzarella.",
            price: 12000,
          },
          {
            name: "Capricciosa",
            description:
              "Sauce tomate, artichauts, maïs, poivrons, dinde fumée, olives, fromage mozzarella.",
            price: 10000,
          },
          {
            name: "Saucisse Orientale",
            description:
              "Sauce tomate, soujouk, fromage mozzarella, tomate.",
            price: 11000,
          },
          {
            name: "Pepperoni",
            description:
              "Sauce tomate, saucisses piquantes, fromage mozzarella.",
            price: 11000,
          },
          {
            name: "Margherita",
            description:
              "Sauce tomate, fromage mozzarella.",
            price: 7500,
          },
          {
            name: "Crevettes",
            description:
              "Sauce tomate à l'ail, crevettes, fromage mozzarella.",
            price: 11000,
          },
        ],
      },

      {
        id: "plats",
        name: "Plats",
        items: [
          {
            name: "Bœuf à la Mongolienne",
            description:
              "Mélange de poivrons, filet de bœuf mariné, sauce mongolienne, riz.",
            price: 12000,
          },
          {
            name: "Filet Mignon",
            description:
              "Filet de bœuf grillé, pommes Anna, parmesan, thym, purée de champignons, légumes sautés.",
            price: 13000,
          },
          {
            name: "Roulade de Poulet",
            description:
              "Blanc de poulet, pomme fumée, légumes croquants, dinde, basilic, crème fraîche.",
            price: 13500,
          },
          {
            name: "Cuisse de Canard Confit",
            description:
              "Cuisse de canard, épinards sautés, pommes sarladaises, purée de carottes, sauce agrumes.",
            price: 17000,
          },
          {
            name: "Filet de Bar",
            description:
              "Filet de bar, sauce tomate piquante, purée de carottes, couscous aux légumes, sauce poisson.",
            price: 12500,
          },
          {
            name: "Gambas Grillées",
            description:
              "Crevettes gambas, purée de betteraves, riz biryani, sauce gratinée.",
            price: 17000,
          },
          {
            name: "Saumon Grillé",
            description:
              "Filet de saumon frais, poireaux, courgettes, purée betteraves, sauce au beurre blanc.",
            price: 19000,
          },
          {
            name: "Crevettes Aigre Douce",
            description:
              "Mélange de poivrons, crevettes tempura, oignons, carottes, sauce aigre douce.",
            price: 15000,
          },
          {
            name: "Coquilles Saint-Jacques",
            description:
              "Saint-Jacques, endive, amandes, crème au beurre fondu.",
            price: 20000,
          },
        ],
      },

      {
        id: "burgers-restaurant",
        name: "Burgers",
        items: [
          {
            name: "Classic Cheese Burger",
            description:
              "Filet de bœuf, tomate, oignons, laitue, sauce maison, frites, légumes.",
            price: 9000,
          },
          {
            name: "Mushroom Burger",
            description:
              "Filet de bœuf, champignons à la crème, frites, légumes.",
            price: 10000,
          },
          {
            name: "Coal Grilled Chicken Burger",
            description:
              "Blanc de poulet grillé au charbon, fromage mozzarella fumé, salade, sauce moutarde au miel, frites, légumes.",
            price: 11000,
          },
          {
            name: "Chicken Mozzarella Burger",
            description:
              "Blanc de poulet grillé, mozzarella panée, oignons, laitue, frites, légumes, sauce moutarde au miel.",
            price: 11000,
          },
        ],
      },

      {
        id: "grillades",
        name: "Grillades",
        items: [
          {
            name: "Arayes La Marquise",
            description:
              "Pain libanais grillé farci de soujouk.",
            price: 7000,
          },
          {
            name: "Arayes Kafta",
            description:
              "Pain libanais grillé farci de kafta.",
            price: 6500,
          },
          {
            name: "Brochette de Viande",
            description:
              "Brochettes de viande marinée et grillée, servie avec divers condiments.",
            price: 8500,
          },
          {
            name: "Taouk",
            description:
              "Brochettes de poulet mariné, sauce à l'ail, cornichons et frites.",
            price: 9000,
          },
          {
            name: "Kabab Orfali",
            description:
              "Viande émincée, grillée, piment, aubergines, tomates et oignons.",
            price: 9500,
          },
          {
            name: "Kafta Grillée",
            description:
              "Viande émincée moulue au persil et oignons grillés, servie avec divers condiments.",
            price: 8500,
          },
          {
            name: "Kabab Khech Khash",
            description:
              "Viande émincée et moulue bien pimentée, servie avec divers condiments.",
            price: 9500,
          },
          {
            name: "Kabab Halabi",
            description:
              "Viande émincée et moulue, sauce piment, servie avec divers condiments.",
            price: 9000,
          },
          {
            name: "Grillade Mixte",
            description:
              "Brochette de viande, brochette de poulet, deux kafta.",
            price: 11000,
          },
          {
            name: "Poulet Désossé Grillé",
            description:
              "Poulet mariné et grillé, servi avec cornichons, sauce à l'ail et frites.",
            price: 14000,
          },
          {
            name: "½ Poulet Désossé Grillé",
            description:
              "Demi poulet mariné et grillé, servi avec cornichons, sauce à l'ail et frites.",
            price: 9000,
          },
        ],
      },

      {
        id: "coin-oriental",
        name: "Coin Oriental",
        description:
          "Mezzés froids et chauds inspirés de la cuisine libanaise.",
        items: [
          {
            name: "Taboulé",
            description:
              "Salade traditionnelle de persil, oignons, tomates, blé concassé.",
            price: 5000,
          },
          {
            name: "Fatouch",
            description:
              "Salade orientale, zaatar sumac, laitues, tomates, persil, menthe, concombres, radis, pain arabe grillé.",
            price: 6000,
          },
          {
            name: "Salade Raheb",
            description:
              "Salade d'aubergines grillées, poivrons, tomates, oignons, menthe.",
            price: 5000,
          },
          {
            name: "Salade Artichaut",
            description:
              "Cœur d'artichaut à la sauce de menthe, mâche, roquette, tomates.",
            price: 7000,
          },
          {
            name: "Hommos Nature",
            description:
              "Purée de pois chiches, crème de sésame, jus de citron.",
            price: 5000,
          },
          {
            name: "Hommos Piquant",
            description:
              "Purée de pois chiches à piment rouge.",
            price: 5500,
          },
          {
            name: "Hommos Pesto",
            description:
              "Purée de pois chiches à la sauce pesto.",
            price: 6000,
          },
          {
            name: "Moutabal",
            description:
              "Purée d'aubergines, crème de sésame, ail, jus de citron.",
            price: 5000,
          },
          {
            name: "Moutabal Betteraves",
            description:
              "Purée d'aubergines aux betteraves.",
            price: 5500,
          },
          {
            name: "Kebbé Végétarien",
            description:
              "Blé concassé, tomates, oignons, persil, menthe.",
            price: 5000,
          },
          {
            name: "Labneh",
            description:
              "Labneh, concombres, menthe, olives noires, huile d'olive.",
            price: 4000,
          },
          {
            name: "Ailes de Poulet",
            description:
              "Ailes de poulet à la provençale, coriandre, ail.",
            price: 6000,
          },
          {
            name: "Foie de Poulet",
            description:
              "Foie de poulet, ail, citron, sauce grenade.",
            price: 4500,
          },
          {
            name: "Makanik",
            description:
              "Saucisses libanaises poêlées, sauce citron.",
            price: 6500,
          },
          {
            name: "Soujouk",
            description:
              "Saucisses libanaises poêlées, sauce piquante.",
            price: 6500,
          },
          {
            name: "Samké Harra",
            description:
              "Filet de poisson au four, sauce aux légumes piquante.",
            price: 6000,
          },
          {
            name: "Crevettes à la Provençale",
            description:
              "Crevettes roses à la provençale, coriandre, ail.",
            price: 7500,
          },
          {
            name: "Pomme de Terre à la Provençale",
            description:
              "Dés de pommes de terre à la sauce provençale piquante.",
            price: 5000,
          },
          {
            name: "Viande Ras Asfour",
            description:
              "Émincé de viande cuit à la mélasse de grenadine.",
            price: 6000,
          },
          {
            name: "Hommos Viande",
            description:
              "Viande poêlée servie sur un lit de hommos nature.",
            price: 6500,
          },
          {
            name: "Falafel",
            description:
              "Mélange de légumineuses épicées, sauce sésame, légumes frais, cornichons.",
            price: 7000,
          },
          {
            name: "Oumsaliyé Poulet",
            description:
              "4 pièces de blanc de poulet aux vermicelles, sauce aigre douce.",
            price: 7500,
          },
          {
            name: "Kebbé Nature",
            description:
              "4 boulettes farcies de viande et pignons de pin.",
            price: 5000,
          },
          {
            name: "Kebbé Sayfi",
            description:
              "Viande au blé concassé sous forme ovale.",
            price: 6000,
          },
          {
            name: "Oumsaliyé Crevettes",
            description:
              "4 crevettes aux vermicelles, sauce aigre douce.",
            price: 9000,
          },
          {
            name: "Rouleaux Fromage",
            description:
              "4 feuilles farcies au fromage.",
            price: 5000,
          },
          {
            name: "Sambousik Viande",
            description:
              "4 pâtes spéciales libanaises farcies à la viande hachée.",
            price: 5000,
          },
          {
            name: "Sambousik Épinards",
            description:
              "4 pâtes spéciales libanaises farcies aux épinards marinés.",
            price: 5000,
          },
        ],
      },

      {
        id: "desserts-restaurant",
        name: "Desserts",
        items: [
          {
            name: "Kinafeh",
            price: 6500,
          },
          {
            name: "Maamoul Bébène",
            price: 6000,
          },
          {
            name: "Oumsaliyéh",
            price: 6500,
          },
          {
            name: "Aïshi Alsaraya",
            price: 6000,
          },
          {
            name: "Flan à la Framboise",
            price: 5000,
          },
          {
            name: "Pain Perdu au Caramel",
            price: 6500,
          },
          {
            name: "Blueberry Cheesecake",
            price: 6500,
          },
          {
            name: "Fondant au Chocolat",
            price: 6500,
          },
          {
            name: "Savarin à la Sauce Agrumes",
            price: 5500,
          },
          {
            name: "Brownies au Chocolat Crémeux",
            price: 5500,
          },
          {
            name: "La Marquise au Chocolat",
            price: 7000,
          },
        ],
      },
    ],
  },

  /* =======================================================
     BAR
     Data will be populated in the next pass.
     ======================================================= */

  {
  id: "bar",
  name: "Bar & Cocktails",
  description:
    "Cocktails, spiritueux, whiskies, bières, boissons fraîches et créations du bar.",
  categories: [
    {
      id: "aperitifs",
      name: "Apéritifs",
      items: [
        {
          name: "Negroni",
          description: "Gin, Campari, Vermouth Doux.",
          price: 7000,
        },
        {
          name: "Aperol Sour",
          description:
            "Aperol, jus d’orange & de citron, sucre glace.",
          price: 7000,
        },
        {
          name: "Kir",
          description: "Vin blanc, crème de cassis.",
          price: 7000,
        },
        {
          name: "Manhattan",
          description: "Whisky Canadian, Martini Rouge.",
          price: 7000,
        },
        {
          name: "Kir Royal",
          description: "Champagne, crème de cassis.",
          price: 17000,
        },
      ],
    },

    {
      id: "digestifs",
      name: "Digestifs",
      items: [
        {
          name: "Pink Panther",
          description:
            "Rhum blanc, Amaretto, crème, grenadine.",
          price: 7000,
        },
        {
          name: "Amaretto Sour",
          description:
            "Amaretto, jus d’orange & de citron, sucre.",
          price: 7000,
        },
        {
          name: "Black Russian",
          description: "Vodka, Kahlua.",
          price: 7000,
        },
        {
          name: "Midori Sour",
          description: "Midori, jus de citron, sucre.",
          price: 7000,
        },
      ],
    },

    {
      id: "cocktails-classiques",
      name: "Cocktails Classiques",
      items: [
        {
          name: "Long Island Iced Tea",
          description: "Cinq esprits, Coca, citron.",
          price: 7000,
        },
        {
          name: "Caipirinha",
          description: "Sagatiba, citron vert, sucre.",
          price: 7000,
        },
        {
          name: "Mai Tai",
          description:
            "Rhum, Triple Sec, citron vert, orgeat.",
          price: 7000,
        },
        {
          name: "Mojito",
          description:
            "Rhum, citron vert, menthe fraîche, sucre brun, soda.",
          price: 7000,
        },
        {
          name: "Pinacolada",
          description: "Rhum, noix de coco, ananas.",
          price: 7000,
        },
        {
          name: "Caipiroja",
          description: "Vodka, citron vert, sucre.",
          price: 7000,
        },
        {
          name: "Classic Margarita",
          description:
            "Tequila, Triple Sec, lemon — ananas, banane, fraise, framboise, kiwi, melon ou pastèque.",
          price: 7000,
        },
        {
          name: "Blue Lagoon",
          description: "Vodka, Curaçao bleu, jus de citron.",
          price: 7000,
        },
        {
          name: "God Father",
          description: "Jack Daniels, Amaretto.",
          price: 7000,
        },
        {
          name: "Old Fashioned",
          description:
            "Bourbon Whiskey, sucre, Angostura Amer.",
          price: 7000,
        },
        {
          name: "Moscow Mule",
          description:
            "Vodka, citron, bière de gingembre.",
          price: 7000,
        },
        {
          name: "Kiwi Punch",
          description:
            "Kiwi frais, citron, tonic, gin.",
          price: 7000,
        },
        {
          name: "Gin Basil",
          description:
            "Gin, basilic frais, citron, sucre.",
          price: 7000,
        },
      ],
    },

    {
      id: "long-drinks",
      name: "Long Drinks",
      items: [
        {
          name: "Campari",
          description: "Orange · Soda.",
          price: 6500,
        },
        {
          name: "Vodka",
          description:
            "Jus d’orange · Perrier · Jus de pomme · Red Bull · Soda · Sprite · Tonic.",
          price: 6500,
        },
        {
          name: "Whisky Coca",
          price: 6500,
        },
        {
          name: "Gin Tonic",
          price: 6500,
        },
      ],
    },

    {
      id: "spiritueux",
      name: "Spiritueux",
      items: [
        {
          name: "Martini Bianco",
          price: 5500,
        },
        {
          name: "Martini Rosso",
          price: 5500,
        },
        {
          name: "Campari",
          price: 5500,
        },
        {
          name: "Aperol",
          price: 5500,
        },
      ],
    },

    {
      id: "liqueurs",
      name: "Liqueurs",
      items: [
        {
          name: "Amaretto Disarono",
          price: 7000,
        },
        {
          name: "Amarola",
          price: 6500,
        },
        {
          name: "Baileys",
          price: 7000,
        },
        {
          name: "Cointreau",
          price: 12000,
        },
        {
          name: "Grand Marnier",
          price: 12000,
        },
        {
          name: "Goldschlager",
          price: 8000,
        },
        {
          name: "Malibu",
          price: 6500,
        },
      ],
    },

    {
      id: "scotch-whisky",
      name: "Scotch Whisky",
      items: [
        {
          name: "Ballantine’s 12 Years",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
        {
          name: "Ballantine’s 21 Years",
          prices: [
            { label: "Verre", price: 20000 },
            { label: "Bouteille", price: 200000 },
          ],
        },
        {
          name: "Johnny Walker Black",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
        {
          name: "Johnny Walker Double Black",
          prices: [
            { label: "Verre", price: 9000 },
            { label: "Bouteille", price: 85000 },
          ],
        },
        {
          name: "Johnny Walker Gold",
          prices: [
            { label: "Verre", price: 10500 },
            { label: "Bouteille", price: 105000 },
          ],
        },
        {
          name: "Johnny Walker Blue",
          prices: [
            { label: "Verre", price: 20000 },
            { label: "Bouteille", price: 200000 },
          ],
        },
        {
          name: "Chivas Regal 12 Years",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
        {
          name: "Chivas Regal 18 Years",
          prices: [
            { label: "Verre", price: 12500 },
            { label: "Bouteille", price: 125000 },
          ],
        },
        {
          name: "Royal Salute",
          prices: [
            { label: "Verre", price: 20000 },
            { label: "Bouteille", price: 190000 },
          ],
        },
      ],
    },

    {
      id: "irish-whisky",
      name: "Irish Whisky",
      items: [
        {
          name: "John Jameson",
          prices: [
            { label: "Verre", price: 5500 },
            { label: "Bouteille", price: 55000 },
          ],
        },
      ],
    },

    {
      id: "malt-whisky",
      name: "Malt Whisky",
      items: [
        {
          name: "Glenfidich 12 Years",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
        {
          name: "Glenfidich 18 Years",
          prices: [
            { label: "Verre", price: 13000 },
            { label: "Bouteille", price: 120000 },
          ],
        },
        {
          name: "Johnny Walker Green",
          prices: [
            { label: "Verre", price: 12000 },
            { label: "Bouteille", price: 110000 },
          ],
        },
      ],
    },

    {
      id: "american-whisky",
      name: "American Whisky",
      items: [
        {
          name: "Jack Daniel’s",
          prices: [
            { label: "Verre", price: 5500 },
            { label: "Bouteille", price: 45000 },
          ],
        },
        {
          name: "Jack Daniel’s S.B",
          prices: [
            { label: "Verre", price: 12000 },
            { label: "Bouteille", price: 70000 },
          ],
        },
        {
          name: "Gentleman Jack",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
      ],
    },

    {
      id: "gin",
      name: "Gin",
      items: [
        {
          name: "Gordon’s",
          prices: [
            { label: "Verre", price: 5000 },
            { label: "Bouteille", price: 45000 },
          ],
        },
        {
          name: "Bombay",
          prices: [
            { label: "Verre", price: 5000 },
            { label: "Bouteille", price: 50000 },
          ],
        },
        {
          name: "Hendrix",
          prices: [
            { label: "Verre", price: 7000 },
            { label: "Bouteille", price: 65000 },
          ],
        },
      ],
    },

    {
      id: "vodka",
      name: "Vodka",
      items: [
        {
          name: "Absolut",
          prices: [
            { label: "Verre", price: 5000 },
            { label: "Bouteille", price: 45000 },
          ],
        },
        {
          name: "Grey Goose",
          prices: [
            { label: "Verre", price: 7500 },
            { label: "Bouteille", price: 75000 },
          ],
        },
        {
          name: "Belvedere",
          prices: [
            { label: "Verre", price: 8000 },
            { label: "Bouteille", price: 80000 },
          ],
        },
      ],
    },

    {
      id: "rhum",
      name: "Rhum",
      items: [
        {
          name: "Bacardi Blanco",
          prices: [
            { label: "Verre", price: 5000 },
            { label: "Bouteille", price: 60000 },
          ],
        },
        {
          name: "Bacardi Gold",
          prices: [
            { label: "Verre", price: 7000 },
            { label: "Bouteille", price: 70000 },
          ],
        },
      ],
    },

    {
      id: "tequila",
      name: "Tequila",
      items: [
        {
          name: "Camino Blanco",
          prices: [
            { label: "Verre", price: 6000 },
            { label: "Bouteille", price: 45000 },
          ],
        },
        {
          name: "Camino Gold",
          prices: [
            { label: "Verre", price: 7000 },
            { label: "Bouteille", price: 55000 },
          ],
        },
        {
          name: "Patron Silver",
          prices: [
            { label: "Verre", price: 9000 },
            { label: "Bouteille", price: 85000 },
          ],
        },
      ],
    },

    {
      id: "champagne",
      name: "Champagne",
      items: [
        {
          name: "Flûte de Champagne",
          price: 17000,
        },
        {
          name: "Moët & Chandon Brut",
          price: 80000,
        },
        {
          name: "Moët & Chandon Rosé",
          price: 105000,
        },
        {
          name: "Moët & Chandon Nectar",
          price: 105000,
        },
        {
          name: "Laurent Perrier Brut",
          price: 75000,
        },
        {
          name: "Laurent Perrier Rosé",
          price: 90000,
        },
        {
          name: "Ruinart Blanc de Blanc",
          price: 120000,
        },
        {
          name: "Ruinart Brut de Blanc",
          price: 80000,
        },
      ],
    },

    {
      id: "brandy-cognacs",
      name: "Brandy & Cognacs",
      items: [
        {
          name: "Courvoisier Vsop",
          prices: [
            { label: "Verre", price: 12000 },
            { label: "Bouteille", price: 110000 },
          ],
        },
        {
          name: "Courvoisier Xo",
          prices: [
            { label: "Verre", price: 22000 },
            { label: "Bouteille", price: 180000 },
          ],
        },
        {
          name: "Hennesey Vsop",
          prices: [
            { label: "Verre", price: 12000 },
            { label: "Bouteille", price: 105000 },
          ],
        },
        {
          name: "Hennesey Xo",
          prices: [
            { label: "Verre", price: 22000 },
            { label: "Bouteille", price: 180000 },
          ],
        },
      ],
    },

    {
      id: "arak-pastis",
      name: "Arak & Pastis",
      items: [
        {
          name: "Arak Kefraya",
          price: 45000,
        },
        {
          name: "Arak Kefraya ½ Btl",
          price: 25000,
        },
        {
          name: "Pastis",
          price: 6000,
        },
        {
          name: "Ricard",
          price: 6000,
        },
      ],
    },

    {
      id: "bieres",
      name: "Bières",
      items: [
        {
          name: "Mexicaine",
          price: 3500,
        },
        {
          name: "Isenberg (Pression)",
          price: 3000,
        },
        {
          name: "Mutzig",
          price: 3000,
        },
        {
          name: "Export 33",
          price: 3000,
        },
        {
          name: "Castel",
          price: 3000,
        },
        {
          name: "Heineken",
          price: 3000,
        },
      ],
    },

    {
      id: "cocktails-sans-alcool",
      name: "Cocktails Sans Alcool",
      items: [
        {
          name: "Lemon Squash",
          description:
            "Jus de citron, Angostura Orange, sucre.",
          price: 4500,
        },
        {
          name: "Minted Lemonade",
          description:
            "Jus de citron, menthe fraîches, orange, sucre, glaçons frappés.",
          price: 4500,
        },
        {
          name: "Strawberry Minted",
          description:
            "Fraises fraîches, menthe fraîches, orange, sucre, glaçons frappés.",
          price: 5500,
        },
        {
          name: "Virgin Pina",
          description:
            "Jus d’ananas, orange, noix de coco, crème.",
          price: 4500,
        },
        {
          name: "Orange Velvet",
          description:
            "Jus d’ananas, orange, fruit de la passion, sucre, crème.",
          price: 4500,
        },
        {
          name: "Leo’s",
          description:
            "Jus d’orange, jus de citron, grenadine, ananas, amande, soda.",
          price: 4500,
        },
        {
          name: "Five Fruits Cocktail",
          description:
            "Orange, ananas, citron, fruit de la passion, mangue, grenadine.",
          price: 4500,
        },
        {
          name: "Baby Face",
          description:
            "Fraise, fruit de la passion, orange, ananas, citron.",
          price: 4500,
        },
        {
          name: "Virgin Mojito",
          description:
            "Citron vert, menthe fraîche, sucre brun, soda.",
          price: 4500,
        },
        {
          name: "Virgin Kiwi",
          description: "Kiwi frais, citron, tonic.",
          price: 5500,
        },
      ],
    },

    {
      id: "jus-frais",
      name: "Jus Frais",
      items: [
        {
          name: "Pommes",
          price: 4000,
        },
        {
          name: "Ananas",
          price: 3500,
        },
        {
          name: "Orange",
          price: 4000,
        },
        {
          name: "Carotte",
          price: 3500,
        },
      ],
    },

    {
      id: "soda-jus",
      name: "Soda & Jus",
      items: [
        {
          name: "Jus de Pomme",
          price: 2500,
        },
        {
          name: "Jus d’Orange",
          price: 2500,
        },
        {
          name: "Jus d’Ananas",
          price: 2500,
        },
        {
          name: "Jus de Raisin",
          price: 2500,
        },
        {
          name: "Tonic",
          price: 1500,
        },
        {
          name: "Soda",
          price: 1500,
        },
        {
          name: "Coca Cola",
          price: 1500,
        },
        {
          name: "Coca Cola Zero",
          price: 2000,
        },
        {
          name: "Sprite",
          price: 1500,
        },
        {
          name: "Fanta",
          price: 1500,
        },
        {
          name: "Perrier",
          price: 2500,
        },
        {
          name: "San Pellegrino",
          price: 3000,
        },
        {
          name: "Red Bull",
          price: 2500,
        },
        {
          name: "Tangui 1.5",
          price: 1500,
        },
        {
          name: "Tangui 0.5",
          price: 500,
        },
        {
          name: "Supermont 1.5",
          price: 1500,
        },
        {
          name: "Supermont 0.5",
          price: 500,
        },
      ],
    },

    {
      id: "cafes-the",
      name: "Cafés & Thé",
      items: [
        {
          name: "Nespresso",
          price: 2500,
        },
        {
          name: "Barista",
          price: 1500,
        },
        {
          name: "Café Turque",
          price: 2500,
        },
        {
          name: "Chococchino",
          price: 3500,
        },
        {
          name: "Macchiatto",
          price: 3500,
        },
        {
          name: "Café Latté",
          price: 3500,
        },
        {
          name: "Cappuccino",
          price: 3500,
        },
        {
          name: "Thé",
          price: 1500,
        },
      ],
    },
  ],
},

  /* =======================================================
     WINES
     Data will be populated after the Bar.
     ======================================================= */

  {
  id: "wines",
  name: "Carte des vins",
  description:
    "Une sélection de vins blancs, moelleux, rosés et rouges, complétée par plusieurs appellations françaises et des vins du Liban.",
  categories: [
    {
      id: "vins-blancs",
      name: "Vins Blancs",
      items: [
        {
          name: "L’Oiseau Bleu",
          price: 22500,
        },
        {
          name: "Tempus Blanc (Pays d’Oc 14%)",
          price: 24500,
        },
        {
          name: "Mouton Cadet",
          price: 29500,
        },
        {
          name: "Belleruche (Côtes-du-Rhône)",
          price: 32000,
        },
        {
          name: "Pouilly-Fumé (Le Troncsec)",
          price: 34000,
        },
        {
          name: "Sancerre (La Chatellenie)",
          price: 35000,
        },
        {
          name: "Chablis (Moulineau)",
          price: 40000,
        },
        {
          name: "Bretèches",
          price: 30000,
        },
        {
          name: "Blanc de Blanc (Kefraya)",
          price: 31000,
        },
        {
          name: "Château Kefraya",
          price: 35000,
        },
        {
          name: "Compte M",
          price: 55000,
        },
      ],
    },

    {
      id: "vins-blancs-moelleux",
      name: "Vins Blancs Moelleux",
      items: [
        {
          name: "Carillonade (Monbazillac)",
          price: 24000,
        },
        {
          name: "Château Mautain 2020",
          price: 25500,
        },
        {
          name: "Louis Eschenauer (Sauternes 2019)",
          price: 28000,
        },
        {
          name: "Château Calvet Sauternes",
          price: 32000,
        },
        {
          name: "Château Bordenave 2020",
          price: 33500,
        },
      ],
    },

    {
      id: "vins-roses",
      name: "Vins Rosés",
      items: [
        {
          name: "Le Malicieux",
          price: 21500,
        },
        {
          name: "Côtes de Provence (Henri Gaillard)",
          price: 26000,
        },
        {
          name: "Côte des Roses (Gérard Bertrand)",
          price: 29500,
        },
        {
          name: "Belleruche (Côtes-du-Rhône)",
          price: 31000,
        },
        {
          name: "Bretèches 2020",
          price: 30000,
        },
        {
          name: "Château Kefraya",
          price: 32000,
        },
      ],
    },

    {
      id: "vins-rouges",
      name: "Vins Rouges",
      items: [
        {
          name: "Louiston Royal (Bordeaux)",
          price: 22000,
        },
        {
          name: "Font-Destiac 2015",
          price: 23000,
        },
        {
          name: "Belleruche (Côtes-du-Rhône)",
          price: 30000,
        },
        {
          name: "Sancerre (Le Rabault)",
          price: 35500,
        },
      ],
    },

    {
      id: "medoc",
      name: "Médoc",
      items: [
        {
          name: "Marquis de Rothberg 2019",
          price: 24500,
        },
        {
          name: "Château Haut Maurac 2013 (Cru Bourgeois)",
          price: 29000,
        },
        {
          name: "Château La Branne 2017 (Cru Bourgeois)",
          price: 30000,
        },
        {
          name: "Château Les Grands Chênes 2019",
          price: 32500,
        },
      ],
    },

    {
      id: "haute-medoc",
      name: "Haute-Médoc",
      items: [
        {
          name: "Château Troupian 2020 (Cru Bourgeois)",
          price: 28000,
        },
        {
          name: "Château du Cartillon 2019 (Cru Bourgeois)",
          price: 31000,
        },
        {
          name: "Château Lestage Simon 2019 (Cru Bourgeois)",
          price: 33000,
        },
        {
          name: "Château Barreyres 2021 (Cru Bourgeois)",
          price: 35000,
        },
      ],
    },

    {
      id: "saint-emilion",
      name: "Saint-Émilion",
      items: [
        {
          name: "Château des Jouans 2018",
          price: 28500,
        },
        {
          name: "Château L’Épine 2020",
          price: 33500,
        },
        {
          name: "Château Cantin 2019 (Grand Cru)",
          price: 45000,
        },
        {
          name: "Château Montlabert 2018 (Grand Cru)",
          price: 80000,
        },
      ],
    },

    {
      id: "margaux",
      name: "Margaux",
      items: [
        {
          name: "Mouton Cadet 2021 (Bordeaux)",
          price: 29500,
        },
        {
          name: "Château Mongravey 2017 (Cru Bourgeois)",
          price: 43000,
        },
        {
          name: "Château Bouquet de Monbrison 2015",
          price: 48000,
        },
        {
          name: "Château d’Arsac 2016 (Bordeaux)",
          price: 58000,
        },
        {
          name: "Château Giscours 2017 (Grand Cru)",
          price: 93000,
        },
      ],
    },

    {
      id: "saint-julien",
      name: "Saint-Julien",
      items: [
        {
          name: "Château Lalande-Borie 2017",
          price: 47000,
        },
        {
          name: "Les Fiefs de Lagrange 2017",
          price: 88000,
        },
      ],
    },

    {
      id: "pomerol",
      name: "Pomerol",
      items: [
        {
          name: "Château Marcadis 2020",
          price: 32000,
        },
        {
          name: "Château Neuf du Pape 2017 (Guigal)",
          price: 59000,
        },
        {
          name: "Château Croix de Rouze 2014",
          price: 59000,
        },
        {
          name: "Château La Pointe 2013",
          price: 82000,
        },
      ],
    },

    {
      id: "vins-liban",
      name: "Vins du Liban",
      items: [
        {
          name: "Compte de M 2018 (Grand Cru Kefraya)",
          price: 71000,
        },
        {
          name: "Château Kefraya 2017",
          price: 45000,
        },
        {
          name: "Coteaux 2018",
          price: 34000,
        },
        {
          name: "Bretèches 2020 (Château Kefraya)",
          price: 31000,
        },
      ],
    },
  ],
},
];

/* =========================================================
   LA MARQUISE FAST FOOD
   Categories ready. Full data comes after Restaurant.
   ========================================================= */

export const fastFoodMenu: MenuGroupData[] = [
  {
  id: "food",
  name: "Fast Food",
  description:
    "Starters, burgers, fried chicken, sandwiches et pizzas.",
  categories: [
    {
      id: "starters",
      name: "Starters",
      items: [
        {
          name: "French Fries",
          description: "Pommes frites, ketchup.",
          price: 1500,
        },
        {
          name: "Spicy French Fries",
          description: "Pommes frites pimentées, sauce maison.",
          price: 2000,
        },
        {
          name: "Nuggets (5 pcs)",
          description:
            "5 pièces blanc de poulet panés, sauce maison.",
          price: 2500,
        },
        {
          name: "Nuggets (8 pcs)",
          description:
            "8 pièces blanc de poulet panés, sauce maison.",
          price: 3500,
        },
        {
          name: "Chicken Cheese Bites (5 pcs)",
          description:
            "5 pièces poulet panés farcis au fromage mozzarella, sauce moutarde au miel.",
          price: 4500,
        },
        {
          name: "Crunchy Beef Balls (5 pcs)",
          description:
            "5 pièces viande panées farcies au fromage mozzarella, sauce BBQ.",
          price: 3500,
        },
        {
          name: "Onion Rings (8 pcs)",
          description:
            "8 pièces rondelles d’oignon panées, sauce cheddar.",
          price: 2000,
        },
        {
          name: "Chicken Wings (6 pcs)",
          description:
            "6 pièces ailes de poulet croustillantes, sauce BBQ ou Buffalo.",
          price: 3500,
        },
        {
          name: "Crispy Chicken (5 pcs)",
          description:
            "5 pièces blanc de poulet croustillant, sauce maison.",
          price: 4000,
        },
        {
          name: "Popcorn Chicken",
          description:
            "100 grammes blanc de poulet croustillant, sauce BBQ.",
          price: 3500,
        },
        {
          name: "Cheese Stick (5 pcs)",
          description:
            "5 pièces bâtons de fromage panés, sauce maison.",
          price: 3000,
        },
        {
          name: "Chicken Donuts (2 pcs)",
          description:
            "Blanc de poulet forme donut farcis au fromage mozzarella et cheddar, sauce cheddar.",
          price: 4000,
        },
        {
          name: "Let's Share",
          description:
            "4 onion rings, 2 chicken donuts, 4 cheese sticks, 4 crunchy beef balls, 4 chicken wings, 4 crispy chicken, 2 World Cola.",
          price: 17000,
        },
      ],
    },

    {
      id: "salads",
      name: "Salads",
      items: [
        {
          name: "Tuna Pasta Salad",
          description:
            "Pâtes farfalle, thon, tomates, laitues, mayonnaise, maïs, sauce citron.",
          price: 5000,
        },
        {
          name: "Veggie Salad",
          description:
            "Laitues, concombres, tomates, oignons, menthe, sauce citron.",
          price: 3000,
        },
        {
          name: "Caesar Salad",
          description:
            "Laitues, blanc de poulet grillé, maïs, fromage parmesan, sauce Caesar.",
          price: 5000,
        },
        {
          name: "Roasted Beef Salad",
          description:
            "Laitues, tomates, filet de bœuf grillé, maïs, betteraves, sauce vinaigrette.",
          price: 4500,
        },
      ],
    },

    {
      id: "kids-meal",
      name: "Kids Meal",
      items: [
        {
          name: "Beef Kids",
          description:
            "1 mini burger viande, 2 pcs nuggets, pommes frites, jus Capri-Sun, ketchup.",
          price: 4500,
        },
        {
          name: "Chicken Kids",
          description:
            "1 mini burger poulet, 2 pcs nuggets, pommes frites, jus Capri-Sun, ketchup.",
          price: 4500,
        },
        {
          name: "Nuggets Kids",
          description:
            "4 pcs nuggets, pommes frites, jus Capri-Sun, ketchup.",
          price: 4500,
        },
        {
          name: "Chicken Donuts Kids",
          description:
            "2 pcs chicken donuts, pommes frites, jus Capri-Sun, ketchup.",
          price: 5500,
        },
        {
          name: "Hungry Kids",
          description:
            "1 mini burger viande, 1 pcs chicken donuts, 1 pcs nuggets, pommes frites, jus Capri-Sun, ketchup.",
          price: 6500,
        },
      ],
    },

    {
      id: "sandwiches",
      name: "Sandwiches",
      items: [
        {
          name: "Fajitas",
          description:
            "Blanc de poulet, laitues, poivrons verts, oignons, champignons, fromage mozzarella et cheddar, sauce avocat.",
          price: 4000,
        },
        {
          name: "Philadelphia",
          description:
            "Filet de bœuf, laitues, poivrons verts, oignons, champignons, fromage mozzarella, sauce avocat.",
          price: 3500,
        },
        {
          name: "Marquise Chicken",
          description:
            "Blanc de poulet, laitues, champignons, fromage mozzarella et cheddar, sauce spéciale.",
          price: 4000,
        },
        {
          name: "Mexicano",
          description:
            "Blanc de poulet, laitues, poivrons verts, oignons, champignons, piment, fromage mozzarella et cheddar, maïs, sauce mayonnaise épicée.",
          price: 4000,
        },
        {
          name: "Douala Chicken",
          description:
            "Blanc de poulet, laitues, champignons, fromage mozzarella et cheddar, maïs, sauce mayonnaise épicée.",
          price: 4000,
        },
        {
          name: "Marquise Steak",
          description:
            "Filet de bœuf, laitues, champignons, fromage mozzarella et cheddar, sauce spéciale.",
          price: 4000,
        },
        {
          name: "Francisco",
          description:
            "Blanc de poulet, laitues, maïs, sauce soja mayonnaise, fromage mozzarella.",
          price: 4500,
        },
        {
          name: "Add Combo",
          description:
            "Pommes frites et boissons gazeuses : World Cola, Orangina, Djino ou Youzou.",
          price: 2000,
        },
      ],
    },

    {
      id: "fried-chicken",
      name: "Fried Chicken",
      items: [
        {
          name: "Wings Meal",
          description:
            "8 pcs ailes de poulet, salade choux, frites, sauce BBQ ou Buffalo, World Cola.",
          price: 7000,
        },
        {
          name: "Wings Value",
          description:
            "18 pcs ailes de poulet, 2 salades choux, 2 frites, 2 sauces BBQ ou Buffalo, 2 World Cola.",
          price: 14000,
        },
        {
          name: "Wings Family",
          description:
            "30 pcs ailes de poulet, 3 salades choux, 2 frites, 3 sauces BBQ ou Buffalo, 3 World Cola.",
          price: 22000,
        },
        {
          name: "Chicken Meal",
          description:
            "5 pcs poulets panés, salade choux, frites, sauce à l’ail, World Cola.",
          price: 7000,
        },
        {
          name: "Royal Chicken Meal",
          description:
            "15 pcs poulets panés, 2 salades choux, 2 frites, 2 sauces à l’ail, 3 World Cola.",
          price: 18000,
        },
        {
          name: "Family Chicken Meal",
          description:
            "20 pcs poulets panés, 3 salades choux, 2 frites, 3 sauces à l’ail, 4 World Cola.",
          price: 23000,
        },
        {
          name: "Crispy Meal",
          description:
            "5 pcs blanc de poulets, salade choux, frites, sauce maison, World Cola.",
          price: 6500,
        },
        {
          name: "Crispy Family",
          description:
            "15 pcs blanc de poulets, 2 salades choux, 2 frites, 2 sauces maison, 3 World Cola.",
          price: 18000,
        },
      ],
    },

    {
  id: "beef-burgers",
  name: "Beef Burgers",
  items: [
    {
      name: "Hamburger",
      description:
        "Burger viande, ketchup, choux mayonnaise, cornichons.",
      price: 3000,
    },
    {
      name: "Cheese Burger",
      description:
        "Burger viande, cornichons, ketchup, fromage cheddar, choux mayonnaise.",
      price: 3500,
    },
    {
      name: "Double Cheese Burger",
      description:
        "2 burgers viande, choux mayonnaise, tomates, oignons, 2 fromages cheddar, ketchup, cornichons.",
      price: 5000,
    },
    {
      name: "American Burger",
      description:
        "Burger viande, laitues, tomates, oignons, sauce cheddar, sauce maison.",
      price: 4500,
    },
    {
      name: "Double American Burger",
      description:
        "2 burgers viande, laitues, tomates, oignons, sauce cheddar, sauce maison.",
      price: 6500,
    },
    {
      name: "Italian Burger",
      description:
        "Burger viande, pesto mayonnaise, rocca, ketchup, oignons caramélisés.",
      price: 3500,
    },
    {
      name: "BBQ Burger",
      description:
        "Burger viande, laitues, oignons, sauce BBQ, sauce maison.",
      price: 3000,
    },
    {
      name: "Chilli Burger",
      description:
        "Burger viande, laitues, jalapeños, mayonnaise à l’avocat, pommes de terre croquantes, cornichons, sauce maison.",
      price: 3000,
    },
    {
      name: "Soujouk Burger",
      description:
        "Burger soujouk, laitues, tomates, cornichons, sauce mayonnaise à l’ail.",
      price: 3500,
    },
    {
      name: "Mushroom Burger",
      description:
        "Viande burger, sauce champignon, laitue, sauce maison, sauce cheddar.",
      price: 4000,
    },
    {
      name: "Add Combo",
      description:
        "Pommes frites et boissons gazeuses : World Cola, Orangina, Djino ou Youzou.",
      price: 2000,
    },
    {
      name: "Beef Burger Box",
      description:
        "1 cheese burger, 1 BBQ burger, 1 mushroom burger, 1 Italian burger, 2 French fries, 3 World Cola.",
      price: 18000,
    },
  ],
},

{
  id: "chicken-burgers",
  name: "Chicken Burgers",
  items: [
    {
      name: "Chicken Burger",
      description:
        "Burger poulet, laitues, tomates, cornichons, sauce mayonnaise à l’ail.",
      price: 3500,
    },
    {
      name: "Chicken Cheese Burger",
      description:
        "Burger poulet, laitues, tomates, cornichons, fromage cheddar, sauce mayonnaise à l’ail.",
      price: 4000,
    },
    {
      name: "Zinger Burger",
      description:
        "Blanc de poulet croquant, laitues, tomates, maïs, cornichons, fromage cheddar, sauce maison.",
      price: 4500,
    },
    {
      name: "Spicy Chicken Burger",
      description:
        "Burger poulet, laitues, sauce mayonnaise à l’avocat, sauce cheddar, jalapeños, pommes de terre croquantes, sauce barbecue.",
      price: 3500,
    },
    {
      name: "Crunchy Chicken Burger",
      description:
        "Blanc de poulet croquant farci aux fromages mozzarella, laitues, tomates, sauce maison.",
      price: 4500,
    },
    {
      name: "Chicken Mushroom Burger",
      description:
        "Burger poulet, laitue, sauce champignon, cheddar sauce, sauce maison.",
      price: 4500,
    },
    {
      name: "Chicken Burger Box",
      description:
        "1 chicken cheese burger, 1 spicy chicken burger, 1 chicken mushroom burger, 1 zinger burger, 2 French fries, 3 World Cola.",
      price: 19500,
    },
  ],
},

{
  id: "other-burgers",
  name: "Other Burgers",
  items: [
    {
      name: "Fish Burger",
      description:
        "Filet de poisson, laitues, cornichons, sauce tartare.",
      price: 4000,
    },
    {
      name: "Veggie Burger",
      description:
        "Burger végétarien quinoa, laitues, tomates, sauce Marquise.",
      price: 3500,
    },
    {
      name: "Mix Burger Box",
      description:
        "1 cheese burger, 1 mushroom burger, 1 chicken cheese burger, 1 zinger burger, 2 French fries, 3 World Cola.",
      price: 19000,
    },
  ],
},

{
  id: "pizza-fastfood",
  name: "Pizza",
  items: [
    {
      name: "Pizza Margherita",
      description:
        "Sauce tomate, fromage mozzarella, origan.",
      prices: [
        { label: "Petit", price: 3500 },
        { label: "Moyen", price: 5000 },
        { label: "Grand", price: 6500 },
      ],
    },
    {
      name: "Pizza Vegetarian",
      description:
        "Sauce tomate, artichauts, maïs, poivrons, olives, champignons, fromage mozzarella, origan.",
      prices: [
        { label: "Petit", price: 4500 },
        { label: "Moyen", price: 6500 },
        { label: "Grand", price: 8000 },
      ],
    },
    {
      name: "Pizza Smoked Turkey",
      description:
        "Sauce tomate, filet dinde fumée, artichauts, maïs, olives, fromage mozzarella.",
      prices: [
        { label: "Petit", price: 5000 },
        { label: "Moyen", price: 6500 },
        { label: "Grand", price: 8500 },
      ],
    },
    {
      name: "Pizza Smoked Chicken",
      description:
        "Sauce tomate, poulet fumé, champignons, crème fraîche, fromage mozzarella, origan.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9000 },
      ],
    },
    {
      name: "Pizza Siciliana",
      description:
        "Sauce tomate, salamis, olives, maïs, basilic, fromage mozzarella, origan.",
      prices: [
        { label: "Petit", price: 5000 },
        { label: "Moyen", price: 6500 },
        { label: "Grand", price: 8000 },
      ],
    },
    {
      name: "Pizza Pepperoni",
      description:
        "Sauce tomate, saucisses pepperoni, fromage mozzarella.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9000 },
      ],
    },
    {
      name: "Pizza Soujouk",
      description:
        "Sauce tomate, saucisses orientales, fromage mozzarella, rocca.",
      prices: [
        { label: "Petit", price: 5000 },
        { label: "Moyen", price: 7000 },
        { label: "Grand", price: 8000 },
      ],
    },
    {
      name: "Pizza Four Cheese",
      description:
        "Sauce tomate, roquefort, mozzarella, emmental, parmesan, basilic, origan.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7000 },
        { label: "Grand", price: 9000 },
      ],
    },
    {
      name: "Pizza Marquise Steak",
      description:
        "Filet de bœuf, champignons, fromage mozzarella, fromage cheddar, sauce mayonnaise spéciale.",
      prices: [
        { label: "Petit", price: 5000 },
        { label: "Moyen", price: 7000 },
        { label: "Grand", price: 9000 },
      ],
    },
    {
      name: "Pizza Marquise Chicken",
      description:
        "Blanc de poulet, champignons, fromage mozzarella, fromage cheddar, sauce mayonnaise spéciale.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9500 },
      ],
    },
    {
      name: "Pizza Douala Chicken",
      description:
        "Blanc de poulet, champignons, fromage mozzarella, maïs, fromage cheddar, sauce mayonnaise épicée.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9500 },
      ],
    },
    {
      name: "Pizza Chicken Mexican",
      description:
        "Blanc de poulet, poivrons verts, oignons, champignons, maïs, fromage mozzarella et cheddar, sauce mayonnaise épicée.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9500 },
      ],
    },
    {
      name: "Pizza Philadelphia",
      description:
        "Filet de bœuf, poivrons verts, oignons, champignons, fromage mozzarella et cheddar, sauce avocat.",
      prices: [
        { label: "Petit", price: 4500 },
        { label: "Moyen", price: 6500 },
        { label: "Grand", price: 8500 },
      ],
    },
    {
      name: "Pizza Fajitas",
      description:
        "Blanc de poulet, poivrons verts, oignons, champignons, sauce avocat, fromage mozzarella et cheddar.",
      prices: [
        { label: "Petit", price: 5500 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9500 },
      ],
    },
    {
      name: "Pizza Mexican Beef",
      description:
        "Viande de bœuf hachée avec sauce tomate, fromage mozzarella.",
      prices: [
        { label: "Petit", price: 4500 },
        { label: "Moyen", price: 6000 },
        { label: "Grand", price: 8000 },
      ],
    },
    {
      name: "Pizza Shrimp",
      description:
        "Sauce tomate, fromage mozzarella, crevettes, origan, basilic.",
      prices: [
        { label: "Petit", price: 6000 },
        { label: "Moyen", price: 7500 },
        { label: "Grand", price: 9000 },
      ],
    },
  ],
},
    {
  id: "add-ons",
  name: "Add-ons",
  items: [
    {
      name: "BBQ Sauce",
      price: 500,
    },
    {
      name: "Cheddar Sauce",
      price: 500,
    },
    {
      name: "House Sauce",
      price: 500,
    },
    {
      name: "Garlic Sauce",
      price: 500,
    },
    {
      name: "Coleslaw Salad",
      price: 500,
    },
    {
      name: "Spicy Sauce",
      price: 500,
    },
    {
      name: "Honey Mustard Sauce",
      price: 1000,
    },
    {
      name: "Buffalo Sauce",
      price: 500,
    },
    {
      name: "Extra Cheese",
      description: "Burger & sandwich.",
      price: 500,
    },
    {
      name: "Rice",
      description: "Blanc ou Biryani.",
      price: 1500,
    },
  ],
},
  ],
},
{
  id: "desserts",
  name: "Desserts",
  description:
    "Bubble waffles, glaces et gourmandises La Marquise.",
  categories: [
    {
      id: "bubble-waffles",
      name: "Bubble Waffles",
      items: [
        {
          name: "Waffer Crunchy",
          description:
            "Chocolat wafer, chantilly, riz croustillant, sauce chocolat, pépites chocolat blanc.",
          price: 4000,
        },
        {
          name: "The Oreo",
          description:
            "Chocolat Oreo, glace, biscuit Oreo, sauce chocolat blanc, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Lotus",
          description:
            "Spéculoos, glace, biscuit Lotus, riz croustillant, pépites chocolat blanc.",
          price: 4500,
        },
        {
          name: "Coffee Crunch",
          description:
            "Chocolat au café, glace, riz croustillant, sauce chocolat noir, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Rainbow Chocolate",
          description:
            "Chocolat Nutella, chantilly, M&M, sauce chocolat, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Biscotto",
          description:
            "Chocolat au biscuit, glace, riz croustillant, chocolat blanc, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Strawberry",
          description:
            "Chocolat Nutella, fraise, chantilly, sauce fraise, pépites chocolat blanc.",
          price: 4000,
        },
        {
          name: "Peanut Lover",
          description:
            "Chocolat Nutella, sauce arachides, chantilly, arachides concassées, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Kiss Berries",
          description:
            "Raspberry, blueberry, ice cream, chantilly, sauce fraise, pépites chocolat noir.",
          price: 4000,
        },
        {
          name: "Waffles Sticks",
          price: 2000,
        },
      ],
    },

    {
      id: "ice-cream",
      name: "Ice Cream",
      items: [
        {
          name: "Sundae",
          description:
            "Glace vanille au sirop de votre choix : myrtille, caramel, fraise, chocolat, miel, mangue, Nutella, noisette, kiwi, pêche, vanille.",
          prices: [
            { label: "Petit", price: 1500 },
            { label: "Moyen", price: 2500 },
            { label: "Grande", price: 3000 },
          ],
        },
        {
          name: "Sundae Flurry",
          description:
            "Glace vanille mélangée à la sauce de votre choix : biscuit, framboise, myrtille, café, spéculoos, Oreo, fraise, arachide, cerise.",
          prices: [
            { label: "Petit", price: 2500 },
            { label: "Moyen", price: 3500 },
            { label: "Grande", price: 4000 },
          ],
        },
      ],
    },
  ],
},
{
  id: "drinks",
  name: "Boissons",
  description:
    "Milkshakes, jus frais, café, thé et boissons fraîches.",
  categories: [
    {
      id: "milk-shake",
      name: "Milk Shake",
      items: [
        {
          name: "Chocolat",
          description:
            "Sauce chocolat, lait, glace, riz croustillant, sirop chocolat, pépites chocolat noir.",
          price: 3000,
        },
        {
          name: "Strawberry",
          description:
            "Sauce framboise, lait, glace, riz croustillant, sirop fraise, pépites chocolat blanc.",
          price: 3000,
        },
        {
          name: "Caramel",
          description:
            "Sauce caramel, lait, glace, riz croustillant, sirop caramel, pépites chocolat noir.",
          price: 3000,
        },
        {
          name: "Oreo",
          description:
            "Sauce Oreo, lait, glace, biscuit Oreo, riz croustillant, sirop chocolat, pépites chocolat noir.",
          price: 3500,
        },
        {
          name: "Lotus",
          description:
            "Sauce spéculoos, lait, glace, riz croustillant, sirop caramel, pépites chocolat noir.",
          price: 3500,
        },
        {
          name: "Coffee",
          description:
            "Sauce café, lait, glace, riz croustillant, sirop chocolat, pépites chocolat noir.",
          price: 3500,
        },
        {
          name: "Raseberry",
          description:
            "Sauce framboise, lait, glace, riz croustillant, sirop myrtille, pépites chocolat blanc.",
          price: 3000,
        },
        {
          name: "Blue Berry",
          description:
            "Sauce myrtille, lait, glace, riz croustillant, sirop myrtille, pépites chocolat blanc.",
          price: 3000,
        },
        {
          name: "Biscotto",
          description:
            "Chocolat au biscuit, lait, glace, riz croustillant, sirop chocolat, pépites chocolat noir.",
          price: 3500,
        },
      ],
    },

    {
      id: "fresh-juice",
      name: "Fresh Juice",
      items: [
        {
          name: "Carrot Juice",
          prices: [
            { label: "Petit", price: 2000 },
            { label: "Moyen", price: 2500 },
          ],
        },
        {
          name: "Orange Juice",
          prices: [
            { label: "Petit", price: 2500 },
            { label: "Moyen", price: 3000 },
          ],
        },
        {
          name: "Pineapple Juice",
          prices: [
            { label: "Petit", price: 2000 },
            { label: "Moyen", price: 2500 },
          ],
        },
        {
          name: "Apple Juice",
          prices: [
            { label: "Petit", price: 3000 },
            { label: "Moyen", price: 3500 },
          ],
        },
        {
          name: "Watermelon",
          prices: [
            { label: "Petit", price: 2000 },
            { label: "Moyen", price: 2500 },
          ],
        },
        {
          name: "Frosty",
          description: "Fraise, mandarine, limonade.",
          prices: [
            { label: "Petit", price: 1500 },
            { label: "Moyen", price: 2000 },
          ],
        },
      ],
    },

    {
      id: "coffee-tea",
      name: "Coffee & Tea",
      items: [
        {
          name: "Barista Coffee",
          price: 1000,
        },
        {
          name: "Cappuccino",
          price: 2000,
        },
        {
          name: "Cafe Latte",
          price: 2000,
        },
        {
          name: "Machiato Latte",
          price: 2000,
        },
        {
          name: "Choccocino",
          price: 2000,
        },
        {
          name: "Tea",
          price: 1000,
        },
      ],
    },

    {
      id: "soda-juice",
      name: "Soda & Juice",
      items: [
        {
          name: "World Cola",
          price: 1000,
        },
        {
          name: "Orangina",
          price: 1000,
        },
        {
          name: "Vimto",
          price: 1500,
        },
        {
          name: "Djino",
          price: 1000,
        },
        {
          name: "Youzou",
          price: 1000,
        },
        {
          name: "American Cola Zero",
          price: 1000,
        },
        {
          name: "Jus Planet",
          price: 1000,
        },
        {
          name: "Capri-Sun",
          price: 500,
        },
        {
          name: "Tangui Petite",
          price: 500,
        },
        {
          name: "Supermont Petite",
          price: 500,
        },
      ],
    },
  ],
},
];