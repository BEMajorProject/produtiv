import { z } from 'zod';

export const UserCreateInputObjectSchema = z.object({
  createdAt: z.date()?.optional(),
  username: z.string()?.optional().nullable(),
  password: z.string()?.optional().nullable(),
  email: z.string(),
  googleId: z.string()?.optional().nullable(),
});
