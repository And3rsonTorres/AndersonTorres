/**
 * A Zod schema that defines the validation rules for a contact form.
 *
 * - `FirstName`: A string with a minimum length of 2 characters.
 * - `LastName`: A string with a minimum length of 2 characters.
 * - `Email`: A valid email address.
 * - `Message`: A string with a minimum length of 10 characters.
 */
import { z } from "zod";

export const ContactSchema = z.object({
  FirstName: z.string().min(2, "First Name is too short"),
  LastName: z.string().min(2, "Last Name is too short"),
  Email: z.string().email("Please Provide a Valid Email"),
  Message: z.string().min(10, "Plese provide more details in your message"),
  allowContact: z.boolean(),
});
