import { z } from "zod"

export const loginSchema = z.object({
  // email: z.string().min(1, {message: 'Email is required'}).email(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" })
    .regex(/^[A-Za-z]+$/, { message: "Только латинские буквы" }),
  rememberMe: z.boolean()
})

export type Inputs = z.infer<typeof loginSchema>