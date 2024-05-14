import { welcomeContacts } from "@/public/data";
import ContactUs from "../ui/components/ContactForm";
import InfoCard from "../ui/components/InfoCard";
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <InfoCard title="Thanks For Visiting" inputText={welcomeContacts} />
      <ContactUs />
    </div>
  );
}
export default Contact;
