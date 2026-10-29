import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid work email address." })
    .max(120, { message: "Email is too long." }),
  company: z
    .string()
    .max(100, { message: "Company name is too long." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select the service or area of focus." }),
  budget: z
    .string()
    .min(1, { message: "Please select an estimated budget tier." }),
  details: z
    .string()
    .min(15, { message: "Please describe your project or bottleneck in at least 15 characters." })
    .max(2500, { message: "Details are too long (maximum 2,500 characters)." }),
  _hp: z.string().max(0, { message: "Bot detected." }).optional(), // Honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
