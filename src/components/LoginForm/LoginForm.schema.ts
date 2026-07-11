import { z } from 'zod';

export const loginSchema = z.object({
  id: z.string().trim().min(1, 'IDを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
