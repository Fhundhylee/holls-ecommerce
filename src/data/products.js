import watch from "../assets/images/watch.png";
import headset from "../assets/images/headset.png";
import camera from "../assets/images/canon.png";
import nike from "../assets/images/nike.png";
import blender from "../assets/images/blender.png";
import iphone from "../assets/images/iphone.png";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 10",
    price: 599,
    image: watch,
    rating: 4.9,
    description:
      "The latest Apple Watch with advanced health tracking, fitness features, and a premium titanium design.",
  },

  {
    id: 2,
    name: "Sony WH-1000XM6",
    price: 449,
    image: headset,
    rating: 4.8,
    description:
      "Industry-leading noise cancellation headphones with exceptional sound quality and long battery life.",
  },

  {
    id: 3,
    name: "Canon EOS R8",
    price: 1499,
    image: camera,
    rating: 4.9,
    description:
      "A professional full-frame mirrorless camera designed for creators and photographers.",
  },

  {
    id: 4,
    name: "Nike Air Force 1",
    price: 140,
    image: nike,
    rating: 4.7,
    description:
      "An iconic sneaker combining timeless style, comfort, and durability for everyday wear.",
  },

  {
    id: 5,
    name: "KitchenAid Mixer",
    price: 399,
    image: blender,
    rating: 4.8,
    description:
      "A premium stand mixer perfect for baking, cooking, and creating delicious recipes.",
  },

  {
    id: 6,
    name: "iPhone 16 Pro Max",
    price: 1299,
    image: iphone,
    rating: 5.0,
    description:
      "Apple's flagship smartphone featuring cutting-edge performance, a stunning display, and an advanced camera system.",
  },
];

export default products;
