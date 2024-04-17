import { z } from "zod";
/**
 * Defines a Zod schema for validating contact form data.
 *
 * The schema includes the following fields:
 * - `Name`: A string with a minimum length of 2 characters.
 * - `Email`: A string that must be a valid email address.
 * - `Message`: A string with a minimum length of 10 characters.
 */
export const ContactSchema = z.object({
  Name: z.string().min(2, "Too short"),
  Email: z.string().email("Not a valid email"),
  Message: z.string().min(10, "Message too short"),
});
