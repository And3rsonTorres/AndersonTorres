import { EmailProps } from "../Interface/interface";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default function mail(data: string, recipient?: string) {
  const msg: EmailProps = {
    to: process.env.RECIPIENT || recipient, // Change to your recipient
    from: process.env.MY_EMAIL, // Change to your verified sender
    subject: "New Reply to Your Website",
    text: data,
    html: `<html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
                font-family: Arial, sans-serif;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            .header {
                padding: 20px 0;
                text-align: center;
                background-color: #007BFF;
                color: #ffffff;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
            }
            .content p {
                margin: 0;
                margin-bottom: 10px;
                color: #333333;
            }
            .blockquote {
                background-color: #f2f2f2;
                padding: 15px;
                margin: 10px 0;
                border-left: 5px solid #007BFF;
            }
            .blockquote p {
                margin: 0;
                color: #333333;
            }
            .unsubscribe-btn {
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
            .unsubscribe-btn a {
                display: inline-block;
                background-color: #dc3545;
                color: #ffffff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
            }
            .unsubscribe-btn a:hover {
                background-color: #c82333;
            }
        </style>
    </head>
    <body>
    
    <div class="container">
        <div class="header">
            <h1>New Reply to Your Website</h1>
        </div>
        <div class="content">
            <p>Dear Anderson Torres,</p>
            <p>You have received a new reply to your website:</p>
            <blockquote class="blockquote">
                ${data}
            </blockquote>
            <div class="unsubscribe-btn">
                <a href="#" style="color: #ffffff; text-decoration: none;">Unsubscribe</a>
            </div>
        </div>
    </div>
    
    </body>
    </html>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
}
