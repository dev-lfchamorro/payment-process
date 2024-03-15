import { EProducsSection } from "../../../enums";
import { Products } from "../../../types";
import ImgBooks from "./../../../assets/images/products/books.jpg";
import ImgCoffeMarker from "./../../../assets/images/products/coffe-marker.jpg";
import ImgFurniture from "./../../../assets/images/products/furniture.jpg";
import ImgIphone14 from "./../../../assets/images/products/iphone14.jpg";
import ImgSneakers from "./../../../assets/images/products/sneakers.jpg";
import ImgSportsSweatshirts from "./../../../assets/images/products/sports-sweatshirts.jpg";
import ImgSpringBags from "./../../../assets/images/products/spring-bags.jpg";
import ImgSunGlassess from "./../../../assets/images/products/sunglassess.jpg";

type ProductsMap = {
  [key in EProducsSection]: Products[];
};

export const highlightedProducts: ProductsMap = {
  [EProducsSection.highlighted]: [
    {
      brand: "Nike",
      category: "Zapatillas deportivas",
      hasDiscount: false,
      image: ImgSneakers,
      name: "AZ Infusion",
      price: 225999,
    },
    {
      brand: "Apple",
      category: "Teléfonos",
      discount: 10,
      hasDiscount: true,
      image: ImgIphone14,
      name: "iPhone 11 Pro Max",
      price: 4325000,
    },
    {
      brand: "Louis Vuitton",
      category: "Bolsos primavera",
      image: ImgSpringBags,
      name: "Speedy",
      price: 460999,
    },
    {
      brand: "Louis Vuitton",
      category: "Bolsos primavera",
      discount: 65,
      hasDiscount: true,
      image: ImgSunGlassess,
      name: "Speedy",
      price: 460999,
    },
  ],
  [EProducsSection.offer]: [
    {
      brand: "Oster",
      category: "Cocina",
      discount: 22,
      hasDiscount: true,
      image: ImgCoffeMarker,
      name: "Coffestyle",
      price: 225999,
    },
    {
      brand: "Norma",
      category: "Lectura",
      discount: 25,
      hasDiscount: true,
      image: ImgBooks,
      name: "¿Cuál verdad?",
      price: 38500,
    },
    {
      brand: "Louis Vuitton",
      category: "Hogar",
      discount: 58,
      hasDiscount: true,
      image: ImgFurniture,
      name: "500 Lí",
      price: 365000,
    },
    {
      brand: "Adidas",
      category: "Deportes",
      discount: 44,
      hasDiscount: true,
      image: ImgSportsSweatshirts,
      name: "Poe Safe",
      price: 85900,
    },
  ],
};
