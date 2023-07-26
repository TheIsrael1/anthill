import {z} from 'zod'

export const SignUpFormSchema = z.object({
    first_name: z.string().trim().toLowerCase().min(2, { message: "First name must be 2 or more characters long" }),
    last_name: z.string().trim().toLowerCase().min(2, { message: "Last name must be 2 or more characters long" }),
})

export const  SignUpSchema = SignUpFormSchema.extend({
    organization_id: z.string().trim(),
})

export type SignUpFormInterface = z.infer<typeof SignUpFormSchema>

export type SignUpInterface = z.infer<typeof SignUpSchema>


