import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  Category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
