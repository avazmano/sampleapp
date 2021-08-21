import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { Category } from "../category/Category";

export type ProductUpdateInput = {
  Category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
};
