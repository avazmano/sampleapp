import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  CategoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
