import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserCountOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
  createdAt: SortOrderSchema?.optional(),
  username: SortOrderSchema?.optional(),
  password: SortOrderSchema?.optional(),
  email: SortOrderSchema?.optional(),
  googleId: SortOrderSchema?.optional(),
});
