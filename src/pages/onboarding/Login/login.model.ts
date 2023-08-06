import {z} from 'zod'

export const customerLoginFormSchema = z.object({
        email: z.string().trim().email({message: 'Please enter a valid email'}),
        password: z.string().trim().min(2, { message: "password must be a minimum of 2 characters"}),
})


export const customerLogin = customerLoginFormSchema.extend({
    organization_id: z.string().trim(),
    app_url:  z.string().url(),
})

export type customerLoginFormInterface = z.infer<typeof customerLoginFormSchema>

export type customerLoginInterface = z.infer<typeof customerLogin>