import { Product } from "../product/Product";

export type Category = {
  id: string;
  name: string;
  products?: Array<Product>;
};
