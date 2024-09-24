import { PagesStructure } from "../enums";
import { NavbarTypes } from "../types";

export const NavbarContext: Array<NavbarTypes> = [
  {
    id: 1,
    name: "Products",
    path: PagesStructure.Products,
    length: 1,
  },
  {
    id: 2,
    name: "Ordered",
    path: PagesStructure.Ordered,
    length: 1
  }
];
