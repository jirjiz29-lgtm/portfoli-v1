import { Testimonial } from "@/types";

/**
 * HONESTY RULE:
 * Never invent fake clients, testimonials, or quotes.
 * This structure exists so testimonials can be added when client permission is granted.
 * The UI will remain completely hidden if there are no items with `verified: true`.
 */
export const testimonials: Testimonial[] = [
  /*
  Example template to populate when client permission is obtained:
  {
    id: "testimonial-1",
    name: "TODO_CLIENT_NAME",
    role: "TODO_CLIENT_ROLE",
    company: "TODO_COMPANY_NAME",
    quote: "TODO_VERIFIED_CLIENT_QUOTE",
    project: "TODO_PROJECT_REFERENCE",
    verified: false, // Set to true only after written client approval
  }
  */
];

export const hasVerifiedTestimonials = testimonials.some((t) => t.verified);
