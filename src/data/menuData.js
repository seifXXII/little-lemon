// Menu items data for Little Lemon
export const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    image: "/assets/images/greek-salad.jpg",
    category: "mains",
  },
  {
    id: 2,
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$7.99",
    image: "/assets/images/bruschetta.svg",
    category: "mains",
  },
  {
    id: 3,
    name: "Grilled Fish",
    description:
      "Fresh catch of the day grilled to perfection with Mediterranean herbs and served with seasonal vegetables.",
    price: "$15.99",
    image: "/assets/images/restaurant-food.jpg",
    category: "mains",
  },
  {
    id: 4,
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$6.99",
    image: "/assets/images/lemon-dessert.jpg",
    category: "desserts",
  },
];

// Menu categories
export const menuCategories = [
  { id: "lunch", label: "Lunch" },
  { id: "mains", label: "Mains" },
  { id: "desserts", label: "Desserts" },
  { id: "alacarte", label: "A La Carte" },
  { id: "specials", label: "Specials" },
];

// Restaurant info
export const restaurantInfo = {
  name: "Little Lemon",
  location: "Chicago",
  tagline:
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
};
