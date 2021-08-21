import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { Category } from "../category/Category";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  Category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
};
