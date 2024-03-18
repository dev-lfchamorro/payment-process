import { v4 as uuidv4 } from "uuid";
import { EProducsSection } from "../../../enums";
import { ProductsMap } from "../../../types";
import ImgBooks from "./../../../assets/images/products/books.jpg";
import ImgCoffeMarker from "./../../../assets/images/products/coffe-marker.jpg";
import ImgFurniture from "./../../../assets/images/products/furniture.jpg";
import ImgIphone14 from "./../../../assets/images/products/iphone14.jpg";
import ImgSneakers from "./../../../assets/images/products/sneakers.jpg";
import ImgSportsSweatshirts from "./../../../assets/images/products/sports-sweatshirts.jpg";
import ImgSpringBags from "./../../../assets/images/products/spring-bags.jpg";
import ImgSunGlassess from "./../../../assets/images/products/sunglassess.jpg";

export const productsData: ProductsMap = {
  [EProducsSection.highlighted]: [
    {
      brand: "Nike",
      category: "Zapatillas deportivas",
      hasDiscount: false,
      id: uuidv4(),
      image: ImgSneakers,
      name: "AZ Infusion",
      price: 225999,
      shipment: 13500,
    },
    {
      brand: "Apple",
      category: "Teléfonos",
      discount: 10,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgIphone14,
      name: "iPhone 11 Pro Max",
      price: 4325000,
      shipment: 10500,
    },
    {
      brand: "Louis Vuitton",
      category: "Bolsos primavera",
      id: uuidv4(),
      image: ImgSpringBags,
      name: "Speedy",
      price: 460999,
      shipment: 5000,
    },
    {
      brand: "GMO",
      category: "Accesorios",
      discount: 65,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgSunGlassess,
      name: "Two Black",
      price: 286900,
      shipment: 25000,
    },
  ],
  [EProducsSection.offer]: [
    {
      brand: "Oster",
      category: "Cocina",
      discount: 22,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgCoffeMarker,
      name: "Coffestyle",
      price: 225999,
      shipment: 14000,
    },
    {
      brand: "Norma",
      category: "Lectura",
      discount: 25,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgBooks,
      name: "¿Cuál verdad?",
      price: 38500,
      shipment: 7000,
    },
    {
      brand: "H House",
      category: "Hogar",
      discount: 58,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgFurniture,
      name: "500 Lí",
      price: 365000,
      shipment: 0,
    },
    {
      brand: "Adidas",
      category: "Deportes",
      discount: 44,
      hasDiscount: true,
      id: uuidv4(),
      image: ImgSportsSweatshirts,
      name: "Poe Safe",
      price: 85900,
      shipment: 6500,
    },
  ],
};
