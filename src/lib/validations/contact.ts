import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .min(20, "A little more context helps.")
    .max(2000, "Please keep the message under 2000 characters."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
