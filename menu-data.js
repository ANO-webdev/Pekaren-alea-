const menuData = {
  cakes: {
    name: 'Kváskové Koláče',
    subtitle: 'Tradičné pečivo a dezerty',
    items: [
      {
        name: 'Cheesecake Slaný Karamel',
        description: 'Klasická cheesecake s karamelom',
        price: 3.90,
        image: 'https://images.unsplash.com/photo-1533134242443-742ce1a0a1a9?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Cheesecake Malina',
        description: 'Šťavnatá cheesecake s malinovým prevolakom',
        price: 3.90,
        image: 'https://images.unsplash.com/photo-1541123603104-852c80b9e741?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Cheesecake Lotus',
        description: 'Cheesecake s Lotus sušienkami',
        price: 3.90,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Cheesecake Pistácia',
        description: 'Luxusná cheesecake s pistaciou',
        price: 4.20,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Pavlova Tortička',
        description: 'Mini Pavlova s ovocom a smotanou',
        price: 3.80,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd57a3d?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Veterník',
        description: 'Tradičný listový šnek s karamelovou krémsou',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a104?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Tartaletka',
        description: 'Čokoládové a ovocné tartaleťky',
        price: 2.90,
        image: 'https://images.unsplash.com/photo-1488477066519-51a339d368cb?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Čoko-Malina Torta',
        description: 'Kúsok čokoládovej torty s maliňami',
        price: 3.90,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Ovocný Rez',
        description: 'Vrstvený dezert s ovocím a šľahačkou',
        price: 3.20,
        image: 'https://images.unsplash.com/photo-1564355808913-afa98e46446a?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Cupcake',
        description: 'Dekorovaný maslový cupcake',
        price: 2.80,
        image: 'https://images.unsplash.com/photo-1587080692701-ba1cf83c2bc2?w=400&h=300&fit=crop',
        category: 'cakes'
      },
      {
        name: 'Makrónka',
        description: 'Jemná francúzska makrónka',
        price: 1.50,
        image: 'https://images.unsplash.com/photo-1569718150521-bcec59baf1f1?w=400&h=300&fit=crop',
        category: 'cakes'
      }
    ]
  },
  beverages: {
    name: 'Nápoje',
    subtitle: 'Káva, čaj a osviežujúce nápoje',
    items: [
      {
        name: 'Espresso',
        description: 'Silná čierna káva',
        price: 1.80,
        image: 'https://images.unsplash.com/photo-1541432557050-44c7dcbbe309?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Espresso Lungo',
        description: 'Dlhé espresso s vodou',
        price: 1.80,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Espresso Doppio',
        description: 'Dvojitý espresso',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a36c42d?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Cappuccino',
        description: 'Vláčna káva so šľahačkou',
        price: 2.40,
        image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Latte Macchiato',
        description: 'Silná káva s teplým mliekom',
        price: 2.60,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Horúca Čokoláda',
        description: 'Hrejivá čokoláda s mliekom',
        price: 2.90,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Čaj z Čerstvej Mäty',
        description: 'Prírodný bylinný čaj',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1597318912503-bc9bcad00980?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Čaj zo Zázvoru',
        description: 'Horúci čaj so zázvorom',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1597318912503-bc9bcad00980?w=400&h=300&fit=crop',
        category: 'beverages'
      },
      {
        name: 'Domáca Limonáda',
        description: 'Osviežujúca domáca limonáda (0,5l)',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1513651857529-ef55a5e4645d?w=400&h=300&fit=crop',
        category: 'beverages'
      }
    ]
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = menuData;
}
