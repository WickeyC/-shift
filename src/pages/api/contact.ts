// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      body: string;
    }
  | {
      message: string;
    };

import mailgun from 'mailgun-js';

const DOMAIN = 'mg.boonsuen.com';

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    try {
      const mg = mailgun({
        apiKey: "key-f75032e6a836ef66ff7a69f95c0d5453",
        domain: DOMAIN,
      });
      const data = JSON.parse(req.body);
  
      const sendToOwner = new Promise((resolve, reject) => {
        mg.messages().send(
          {
            from: `${data.name} <${data.email}>`,
            to: 'ohboonsuen123@gmail.com',
            subject: 'Shift Contact Form Submission',
            text: `New Contact Form Submission Received.\nEmail: ${data.email}\nName: ${data.name}\nMessage:\n${data.message}`,
          },
          (error, body) => {
            if (error) {
              res.status(error.statusCode).json(error);    
              reject(error.statusCode);        
            } else {
              console.log('send to owner', body);
              resolve(body);
            }
          }
        );
      });
  
      const sendToSender = new Promise((resolve, reject) => {
        mg.messages().send(
          {
            from: `Boonsuen Oh <ohboonsuen123@gmail.com>`,
            to: `${data.email}`,
            subject: 'Submission Received!',
            html: `
              <html>
                <img src="https://shift-wdd.vercel.app/img/logo.svg" width="200" />
                <h1>Submission Received!</h1>
                <p>Hi ${data.name}.</p>
                <p>This is an email confirming that we have received your inquiry.</p>
                <p>We'll get back to you soon!</p>
                <h2>Details of the submission</h2>
                <ul>
                  <li>It was submitted at ${new Date().toString()}</li>
                  <li>Your email: ${data.email}</li>
                  <li>Your name: ${data.name}</li>                  
                  <li>The message: ${data.message}</li>
                </ul>
              </html>
            `
          },
          (error, body) => {
            if (error) {
              res.status(error.statusCode).json(error);    
              reject(error.statusCode);        
            } else {
              console.log('send to sender', body);
              resolve(body);
            }
          }
        );
      });
  
      const myData = await Promise.all([sendToOwner, sendToSender]);
      console.log('data 0', myData[0]);
      console.log('data 1', myData[1]);
      res.status(200).json({ body: req.body });
    } catch (error) {
      res.status(500).end();
    }    
  } else {
    res.status(200).json({
      body: 'please use POST request',
    });
  }
};
