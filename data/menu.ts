export interface MenuItem {
  id: number;
  name: string;
  price?: number;
  prices?: {
    small?: number;
    medium?: number;
    large?: number;
    half?: number;
    full?: number;
  };
  description?: string;
  image: string;
}

export interface MenuCategory {
  id: number;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 1,
    name: "PIZZAS",
    icon: "🍕",
    items: [
      {
        id: 1,
        name: "Fajita Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Spicy chicken fajita with bell peppers and onions",
        image: "/images/pizzas/Fajita.avif"
      },
      {
        id: 2,
        name: "Tikka Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Marinated chicken tikka with special sauce",
        image: "/images/pizzas/Tikka.jpg"
      },
      {
        id: 3,
        name: "B.B.Q Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "BBQ chicken with smoky flavor",
        image: "/images/pizzas/BBQ.webp"
      },
      {
        id: 4,
        name: "Cheese Lover",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Extra cheese loaded pizza",
        image: '/images/pizzas/Cheese-Lover.jpeg'
      },
      {
        id: 5,
        name: "Supreme Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Loaded with multiple toppings",
        image: "/images/pizzas/Supreme.jpg"
      },
      {
        id: 6,
        name: "Vegetarian Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Fresh vegetables and cheese",
        image: "/images/pizzas/Vegetarian.jpeg"
      },
      {
        id: 7,
        name: "Tandoori Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Tandoori chicken with spicy sauce",
        image: "/images/pizzas/Tandoori.jpeg"
      },
      {
        id: 8,
        name: "Behari Kabab Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Behari kabab with special spices",
        image: "/images/pizzas/Behari-Kabab.jpeg"
      },
      {
        id: 9,
        name: "Usman Special",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Our signature special pizza",
        image: "/images/pizzas/Cheese-Lover.jpeg"
      },
      {
        id: 10,
        name: "Crown Crust Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza with crown-shaped crust",
        image: "/images/pizzas/Crown-Crust.jpeg"
      },
      {
        id: 11,
        name: "Kabab Crust Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza crust filled with kabab",
        image: "/images/pizzas/Kabab-Crust.jpg"
      },
      {
        id: 12,
        name: "Lazania Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza meets lasagna fusion",
        image: '/images/pizzas/Lazania.jpeg'
      },
      {
        id: 13,
        name: "Malai Boti Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Creamy malai boti topping",
        image: "/images/pizzas/Malai-Boti.jpeg"
      },
      {
        id: 14,
        name: "Sandwich Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Sandwich-style layered pizza",
        image: "/images/pizzas/Sandwich.jpeg"
      },
      {
        id: 15,
        name: "Nuggets Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Topped with crispy nuggets",
        image: "/images/pizzas/Nuggets.jpeg"
      },
      {
        id: 16,
        name: "Extra Topping",
        prices: { small: 70, medium: 150, large: 200 },
        description: "Add extra toppings to your pizza",
        image: "/images/pizzas/Cheese-Lover.jpeg"
      }
    ]
  },
  {
    id: 2,
    name: "BURGERS",
    icon: "🍔",
    items: [
      {
        id: 17,
        name: "Normal Grill Burger + Fries",
        price: 450,
        description: "Grilled chicken patty with fresh vegetables",
        image: "/images/burgers/Normal-Grill-Burger+Fries.jpeg"
      },
      {
        id: 18,
        name: "Special Grill Burger + Fries",
        price: 500,
        description: "Special grilled burger with extra toppings",
        image: "/images/burgers/Special-Grill-Burger+Fries.jpeg"
      },
      {
        id: 19,
        name: "Stuffed Jalapeno Burger + Fries",
        price: 600,
        description: "Spicy jalapeno stuffed burger",
        image: "/images/burgers/Stuffed-Jalapeno-Burger+Fries.jpg"
      },
      {
        id: 20,
        name: "Smash Beef Burger",
        price: 450,
        description: "Smashed beef patty burger",
        image: "/images/burgers/Special-Grill-Burger+Fries.jpeg"
      },
      {
        id: 21,
        name: "Smash Cheese Beef Burger + Fries",
        price: 850,
        description: "Double smashed beef with melted cheese",
        image: "/images/burgers/Smash-Cheese-Burger+Fries.jpeg"
      },
      {
        id: 22,
        name: "Chipotle Burger",
        price: 500,
        description: "Smoky chipotle sauce burger",
        image: "/images/burgers/Chipotle.jpg"
      },
      {
        id: 23,
        name: "Zinger Burger",
        price: 390,
        description: "Crispy fried chicken fillet",
        image: "/images/burgers/Zinger.jpg"
      },
      {
        id: 24,
        name: "Zinger Cheese Burger",
        price: 440,
        description: "Zinger with melted cheese",
        image: '/images/burgers/Patty-Burger+Fries.jpeg'
      },
      {
        id: 25,
        name: "Karizma Burger",
        price: 350,
        description: "Our signature karizma style burger",
        image: "/images/burgers/Karizma.jpg"
      },
      {
        id: 26,
        name: "Karizma Cheese Burger",
        price: 400,
        description: "Karizma with extra cheese",
        image: "/images/burgers/Special-Grill-Burger+Fries.jpeg"
      },
      {
        id: 27,
        name: "Patty Burger + Fries",
        price: 260,
        description: "Simple and delicious beef patty",
        image: "/images/burgers/Patty-Burger+Fries.jpeg"
      },
      {
        id: 28,
        name: "Bar BQ Burger + Fries",
        price: 260,
        description: "BBQ sauce flavored burger",
        image: '/images/burgers/Patty-Pizza.jpeg'
      },
      {
        id: 29,
        name: "Tower Burger + Fries",
        price: 350,
        description: "Multi-layered tower burger",
        image: "/images/burgers/Tower-Burger+Fries.jpeg"
      },
      {
        id: 30,
        name: "Chapli Burger + Fries",
        price: 250,
        description: "Traditional chapli kabab burger",
        image: '/images/burgers/Chipotle.jpg'
      },
      {
        id: 31,
        name: "Tikka Cheese Burger + Fries",
        price: 350,
        description: "Chicken tikka with cheese",
        image: '/images/burgers/Special-Grill-Burger+Fries.jpeg'
      },
      {
        id: 32,
        name: "Zinger Pizza Burger",
        price: 500,
        description: "Zinger meets pizza in a burger",
        image: "/images/burgers/Boti-PIzza.jpg"
      },
      {
        id: 33,
        name: "Chapli Pizza Burger",
        price: 450,
        description: "Chapli kabab pizza-style burger",
        image: "/images/burgers/Chapli-Pizza.jpeg"
      },
      {
        id: 34,
        name: "Patty Pizza Burger",
        price: 450,
        description: "Beef patty pizza burger",
        image: "/images/burgers/Patty-Pizza.jpeg"
      },
      {
        id: 35,
        name: "Boti Pizza Burger",
        price: 450,
        description: "Chicken boti pizza burger",
        image: "/images/burgers/Boti-Pizza-Burger.jpeg"
      },
      {
        id: 36,
        name: "Malai Boti Pizza Burger",
        price: 450,
        description: "Creamy malai boti pizza burger",
        image: "/images/burgers/Malai-Boti.png"
      }
    ]
  },
  {
    id: 3,
    name: "WRAPS",
    icon: "🌯",
    items: [
      {
        id: 37,
        name: "Turkish Wrap",
        price: 550,
        description: "Turkish-style chicken wrap",
        image: "/images/wraps/Turkish-Wrap.avif"
      },
      {
        id: 38,
        name: "Afghani Wrap",
        price: 600,
        description: "Afghani spiced chicken wrap",
        image: "/images/wraps/Afghani-Wrap.jpeg"
      },
      {
        id: 39,
        name: "Lebanese Wrap",
        price: 650,
        description: "Lebanese-style grilled wrap",
        image: "/images/wraps/Lebanese-Wrap.avif"
      },
      {
        id: 40,
        name: "Zinger Wrap",
        price: 500,
        description: "Crispy zinger in a wrap",
        image: "/images/wraps/Zinger-Wrap.jpeg"
      },
      {
        id: 41,
        name: "Traditional Wrap",
        price: 550,
        description: "Traditional Pakistani wrap",
        image: '/images/wraps/Traditional-Wrap.jpeg'
      },
      {
        id: 42,
        name: "Fajita Wrap",
        price: 500,
        description: "Spicy chicken fajita wrap",
        image: '/images/wraps/Fajita-Wrap.jpeg'
      },
      {
        id: 43,
        name: "Chicken Shawarma",
        price: 280,
        description: "Classic chicken shawarma",
        image: "/images/wraps/Chicken-Cheese-Shawarma.jpeg"
      },
      {
        id: 44,
        name: "Chicken Cheese Shawarma",
        price: 330,
        description: "Shawarma with melted cheese",
        image: "/images/wraps/Kabab-Cheese-Paratha.jpeg"
      },
      {
        id: 45,
        name: "Zinger Shawarma",
        price: 340,
        description: "Crispy zinger shawarma",
        image: "/images/wraps/Zinger-Shawarma.jpeg"
      },
      {
        id: 46,
        name: "Zinger Cheese Shawarma",
        price: 390,
        description: "Zinger shawarma with cheese",
        image: "/images/wraps/Zinger-Cheese-Shawarma.jpeg"
      },
      {
        id: 47,
        name: "Chicken Paratha",
        price: 350,
        description: "Chicken wrapped in paratha",
        image: "/images/wraps/Chicken-Paratha.jpeg"
      },
      {
        id: 48,
        name: "Chicken Cheese Paratha",
        price: 400,
        description: "Chicken paratha with cheese",
        image: "/images/wraps/Chicken-Shawarma.jpeg"
      },
      {
        id: 49,
        name: "Kabab Paratha",
        price: 300,
        description: "Kabab wrapped in paratha",
        image: "/images/wraps/Zinger-Shawarma.jpeg"
      },
      {
        id: 50,
        name: "Kabab Cheese Paratha",
        price: 350,
        description: "Kabab paratha with cheese",
        image: "/images/wraps/Kabab-Cheese-Paratha.jpeg"
      },
      {
        id: 51,
        name: "Crunch Shawarma",
        price: 350,
        description: "Extra crunchy shawarma",
        image: "/images/wraps/Crunch-Shawarma.jpeg"
      },
      {
        id: 52,
        name: "Crunch Cheese Shawarma",
        price: 400,
        description: "Crunchy shawarma with cheese",
        image: "/images/wraps/Chicken-Shawarma.jpeg"
      },
      {
        id: 53,
        name: "Malai Boti Paratha",
        price: 450,
        description: "Creamy malai boti in paratha",
        image: "/images/wraps/Chicken-Cheese-Shawarma.jpeg"
      },
      {
        id: 54,
        name: "Zinger Paratha",
        price: 350,
        description: "Zinger wrapped in paratha",
        image: "/images/wraps/Zinger-Cheese-Shawarma.jpeg"
      },
      {
        id: 55,
        name: "Zinger Cheese Paratha",
        price: 400,
        description: "Zinger paratha with cheese",
        image: "/images/wraps/Turkish-Wrap.avif"
      },
      {
        id: 56,
        name: "Platter Shawarma",
        price: 600,
        description: "Full shawarma platter",
        image: "/images/wraps/platter-shawarma.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "SANDWICHES",
    icon: "🥪",
    items: [
      {
        id: 57,
        name: "Grill Sandwich",
        price: 650,
        description: "Grilled chicken sandwich",
        image: "/images/sandwiches/Grill Sandwich.avif"
      },
      {
        id: 58,
        name: "Grill Cheese Sandwich",
        price: 700,
        description: "Grilled sandwich with cheese",
        image: "/images/sandwiches/Grill Cheese Sandwich.jpeg"
      },
      {
        id: 59,
        name: "Chicken Sandwich",
        price: 350,
        description: "Classic chicken sandwich",
        image: "/images/sandwiches/Chicken Sandwich.jpeg"
      },
      {
        id: 60,
        name: "Club Sandwich",
        price: 400,
        description: "Triple-layered club sandwich",
        image: "/images/sandwiches/Club Sandwich.jpeg"
      },
      {
        id: 61,
        name: "Special Sandwich",
        price: 450,
        description: "Our special loaded sandwich",
        image: "/images/sandwiches/Special Sandwich.jpeg"
      }
    ]
  },
  {
    id: 5,
    name: "PASTA",
    icon: "🍝",
    items: [
      {
        id: 62,
        name: "Creamy Pasta",
        prices: { half: 450, full: 750 },
        description: "Rich and creamy white sauce pasta",
        image: "/images/pasta/Creamy Pasta.jpeg"
      },
      {
        id: 63,
        name: "Special Spicy Pasta",
        prices: { half: 450, full: 700 },
        description: "Spicy red sauce pasta",
        image: "/images/pasta/Special Spicy Pasta.jpeg"
      },
      {
        id: 64,
        name: "Penne Pasta",
        prices: { half: 400, full: 700 },
        description: "Classic penne pasta",
        image: "/images/pasta/Penne Pasta.jpeg"
      }
    ]
  },
  {
    id: 6,
    name: "HOT CORNER",
    icon: "🔥",
    items: [
      {
        id: 65,
        name: "Fries",
        prices: { half: 150, full: 300 },
        description: "Crispy golden french fries",
        image: "/images/hot-corner/Fries.webp"
      },
      {
        id: 66,
        name: "Chicken Fries",
        prices: { half: 250, full: 350 },
        description: "Fries topped with chicken",
        image: "/images/hot-corner/Chicken Fries.jpeg"
      },
      {
        id: 67,
        name: "BBQ Fries",
        prices: { half: 200, full: 350 },
        description: "Fries with BBQ sauce",
        image: "/images/hot-corner/BBQ Fries.jpeg"
      },
      {
        id: 68,
        name: "Masala Fries",
        prices: { half: 200, full: 300 },
        description: "Spicy masala-flavored fries",
        image: "/images/hot-corner/Masala Fries.jpeg"
      },
      {
        id: 69,
        name: "Cheese Fries",
        prices: { half: 300, full: 450 },
        description: "Fries loaded with melted cheese",
        image: "/images/hot-corner/Cheese Fries.jpeg"
      },
      {
        id: 70,
        name: "Loaded Fries",
        prices: { half: 300, full: 500 },
        description: "Fully loaded with all toppings",
        image: "/images/hot-corner/Loaded Fries.jpeg"
      },
      {
        id: 71,
        name: "Zinger Piece",
        price: 150,
        description: "Single crispy zinger piece",
        image: "/images/hot-corner/Zinger Piece.jpeg"
      },
      {
        id: 72,
        name: "Nuggets (5pc)",
        price: 200,
        description: "5 pieces crispy chicken nuggets",
        image: "/images/hot-corner/Nuggets-5.jpeg"
      },
      {
        id: 73,
        name: "Nuggets (10pc)",
        price: 350,
        description: "10 pieces crispy chicken nuggets",
        image: "/images/hot-corner/Nuggets-10.jpeg"
      },
      {
        id: 74,
        name: "Hot Wings (5pc)",
        price: 300,
        description: "5 pieces spicy hot wings",
        image: "/images/hot-corner/Hot Wings-5.jpeg"
      },
      {
        id: 75,
        name: "Hot Wings (10pc)",
        price: 550,
        description: "10 pieces spicy hot wings",
        image: "/images/hot-corner/Hot Wings-10.jpeg"
      }
    ]
  },
  {
    id: 7,
    name: "BBQ",
    icon: "🍢",
    items: [
      {
        id: 76,
        name: "Chicken Tikka Boti (4pc)",
        price: 180,
        description: "4 pieces grilled chicken tikka",
        image: "/images/bbq/Chicken Tikka Boti (4pc).webp"
      },
      {
        id: 77,
        name: "Nablet (4pc)",
        price: 120,
        description: "4 pieces grilled nablet",
        image: "/images/hot-corner/Nablet-4.jpeg"
      },
      {
        id: 78,
        name: "Chicken Malai Boti",
        price: 200,
        description: "Creamy marinated grilled chicken",
        image: "/images/bbq/Chicken Malai Boti.jpeg"
      },
      {
        id: 79,
        name: "Chicken Tandoori Boti",
        price: 200,
        description: "Tandoori-style grilled chicken",
        image: "/images/bbq/Chicken Tandoori Boti.jpeg"
      },
      {
        id: 80,
        name: "Chicken Leg Piece",
        price: 130,
        description: "Grilled chicken leg piece",
        image: "/images/bbq/Chicken Leg Piece.jpeg"
      },
      {
        id: 81,
        name: "Chicken Chest Piece",
        price: 200,
        description: "Grilled chicken breast piece",
        image: "/images/bbq/Chicken Chest Piece.jpeg"
      },
      {
        id: 82,
        name: "Chicken Malai Boti Piece",
        price: 130,
        description: "Single piece malai boti",
        image: "/images/bbq/Chicken Malai Boti Piece.jpeg"
      },
      {
        id: 83,
        name: "Chicken Kabab",
        price: 200,
        description: "Spiced grilled chicken kabab",
        image: "/images/bbq/Chicken Tikka Boti (4pc).webp"
      },
      {
        id: 84,
        name: "Chicken Cheese Kabab",
        price: 200,
        description: "Chicken kabab with cheese filling",
        image: "/images/bbq/Chicken Cheese Kabab.jpeg"
      },
      {
        id: 85,
        name: "Reshmi Kabab",
        price: 200,
        description: "Soft and tender reshmi kabab",
        image: "/images/bbq/Reshmi Kabab.jpeg"
      }
    ]
  },
  {
    id: 8,
    name: "DEALS",
    icon: "📦",
    items: [
      {
        id: 86,
        name: "DEAL 1",
        price: 2800,
        description: "2 Large Pizza (Tikka/Fajita) + 1×1.5L Drink",
        image: "/images/deals/Deal1.png"
      },
      {
        id: 87,
        name: "DEAL 2",
        price: 1850,
        description: "2 Zinger Burger + 2 Small Pizza (Tikka/Fajita) + 1L Drink",
        image: "/images/deals/Deal2.avif"
      },
      {
        id: 88,
        name: "DEAL 3",
        price: 1800,
        description: "1 Medium Pizza + 2 Chicken Shawarma + 2 Zinger Burger + 1L Drink",
        image: "/images/deals/Deal3.jpeg"
      },
      {
        id: 89,
        name: "DEAL 4",
        price: 2100,
        description: "2 Chicken Shawarma + 2 Zinger Burger + 1L Drink",
        image: "/images/deals/Deal4.jpeg"
      },
      {
        id: 90,
        name: "DEAL 5",
        price: 2100,
        description: "2 Small Pizza (10.5\") + 1 Large Pizza + 1L Drink",
        image: "/images/deals/Deal5.jpeg"
      },
      {
        id: 91,
        name: "DEAL 6",
        price: 1300,
        description: "2 Zinger Burgers + 1 Small Pizza (10.5\") + 1L Drink",
        image: "/images/deals/Deal6.jpeg"
      },
      {
        id: 92,
        name: "DEAL 7",
        price: 950,
        description: "Small Pizza (Tikka/Fajita) + 2 Pieces Special Medium Pizza + 0.5L Drink",
        image: "/images/deals/Deal7.jpg"
      },
      {
        id: 93,
        name: "DEAL 8",
        price: 1500,
        description: "2 Special Medium Pizza + 0.5L Drink",
        image: "/images/deals/Deal8.jpeg"
      },
      {
        id: 94,
        name: "DEAL 9",
        price: 2750,
        description: "2 Medium Pizza + 2 Zinger Burger + 1.5L Drink",
        image: "/images/deals/Deal9.jpeg"
      },
      {
        id: 95,
        name: "DEAL 10",
        price: 3100,
        description: "1 Large Pizza + 1 Medium Pizza + 2 Zinger Burgers + Chicken Shawarma + 1.5L Drink",
        image: "/images/deals/Deal10.jpeg"
      }
    ]
  }
];