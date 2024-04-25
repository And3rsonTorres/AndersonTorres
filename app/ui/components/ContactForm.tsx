import { Input, Textarea, Tooltip, Button, Card, CardBody } from "@nextui-org/react";

const ContactUs = () => {
  return (
    <Card className="flex flex-col items-center justify-center p-4 my-10 bg-gradient-to-br  from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500 rounded-xl shadow-md border-2 border-indigo-500 ">
      <CardBody>
        <h2 className="text-2xl font-semibold text-center  mb-6">Reach Out</h2>
        <Tooltip content="Enter your name" placement="left-start" className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500 rounded-full p-0.5">
            <Input  isRequired  autoFocus type="name" placeholder="Name" />
        </Tooltip>
        <Tooltip content="Optional Email" placement="left-start" className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500 rounded-full p-0.5">
            <Input  placeholder="Email" autoFocus  type="email" />
        </Tooltip>
        <Tooltip content="Let me know " placement="left-start" className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-emerald-700 dark:to-emerald-500 rounded-full p-0.5">
            <Textarea  isRequired placeholder="Message"  autoFocus type="mesage"/>
        </Tooltip>
          <Button
            autoFocus
            className="bg-primary hover:bg-primary-300 mt-4 w-full rounded-full p-3 "
          >
            Send
          </Button>
      </CardBody>
    </Card>
  );
};

export default ContactUs;
