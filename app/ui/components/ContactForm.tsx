/**
 * The `ContactForm` component is a React component that renders a contact form with various input fields, including name, email, and message. The form is built using the `react-hook-form` library and the `zod` library for form validation.

 * The component uses the `useForm` hook from `react-hook-form` to manage the form state and validation. The `ContactSchema` from `@/app/Utils/Validation` is used to define the validation rules for the form fields.

 * When the form is submitted, the `OnSubmit` function is called, which logs the form data to the console and sends a POST request to the `/api/contact` endpoint with the form data.

 * The component also uses the `react-hot-toast` library to display a success message after the form is successfully submitted.

 * The component is styled using Tailwind CSS and includes various UI elements such as a card background, input fields, and a submit button.
 */

"use client";
import { CardBackgroundStyle, InputStyle } from "@/app/Utils/TextUtil";
import { ContactSchema } from "@/app/Utils/Validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const Form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
  });

  const OnSubmit = async (data: z.infer<typeof ContactSchema>) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div
      className={`p-6 max-w-md m-10 sm:mx-auto ${CardBackgroundStyle} mb-20 shadow-md md:max-w-2xl`}
    >
      <form
        onSubmit={Form.handleSubmit(async (data) => {
          await OnSubmit(data);
          (() =>
            toast.success(
              "Your message has been sent! Thanks for your time."
            ))();
          Form.reset();
        })}
      >
        <h2 className="text-2xl text-center mb-4">Contact Us</h2>
        <div className="font-medium">
          <label htmlFor="allowContact">
            <input
              type="checkbox"
              id="allowContact"
              {...Form.register("allowContact")}
            />
            Do Not Contact Me
          </label>
        </div>

        <div className="grid grid-cols-2 font-medium gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>

            <p className="text-sm text-black/45 dark:text-white mb-1">
              Please enter your first name.
            </p>
            <input
              type="text"
              id="firstName"
              {...Form.register("FirstName")}
              className={InputStyle}
            />
            {Form.formState.errors.FirstName && (
              <p className="text-tiny text-danger mb-1">
                {Form.formState.errors.FirstName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block mt-1">
              Last Name
            </label>

            <p className="text-sm text-black/45 dark:text-white mb-1">
              Please include your last name.
            </p>

            <input
              type="text"
              id="lastName"
              {...Form.register("LastName")}
              className={InputStyle}
            />
            {Form.formState.errors.LastName && (
              <p className="text-tiny text-danger mb-1">
                {Form.formState.errors.LastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="email" className="block mt-1">
            Email
          </label>
          <p className="text-sm text-black/45 dark:text-white mb-1">
            Please share your email address so I can respond to your inquiry
            promptly.
          </p>
          <input
            type="email"
            id="email"
            {...Form.register("Email", { required: false })}
            className={InputStyle}
          />
          {Form.formState.errors.Email && (
            <p className="text-tiny text-danger mb-1">
              {Form.formState.errors.Email.message}
            </p>
          )}
        </div>
        <div className="mb-4 font-medium">
          <label htmlFor="message" className="block mt-1">
            Message
          </label>
          <p className="text-sm text-black/45 dark:text-white mb-1">
            Please share any thoughts, inquiries, or potential opportunities you
            have in mind. Looking forward to connecting with you!
          </p>

          <textarea
            id="message"
            {...Form.register("Message")}
            rows={5}
            placeholder="Write your message here..."
            className={InputStyle}
          />
          {Form.formState.errors.Message && (
            <p className="text-tiny text-danger mb-1">
              {Form.formState.errors.Message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Submit
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default ContactForm;
