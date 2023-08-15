import { z } from 'zod';

export const SignUpBaseSchema = z.object({
  first_name: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, { message: 'First name must be 2 or more characters long' }),
  last_name: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, { message: 'Last name must be 2 or more characters long' }),
  email: z.string().trim().email({ message: 'Please enter a valid email' }),
});

export const SignUpFormSchema = SignUpBaseSchema.extend({
  password: z.string().trim().min(2, { message: 'password must be a minimum of 2 characters' }),
});

const customerContactInfoSchema = z.array(
  z.object({
    contact_data: z.string().email(),
    contact_type: z.enum(['phone_number', 'email']),
  }),
);

export const SignUpSchema = SignUpFormSchema.extend({
  organization_id: z.string().trim(),
  contact_infos: customerContactInfoSchema,
});

export type SignUpFormInterface = z.infer<typeof SignUpFormSchema>;

export type SignUpInterface = z.infer<typeof SignUpSchema>;
