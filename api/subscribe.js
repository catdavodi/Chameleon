// pages/api/subscribe.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { email } = req.body;
  
        // Here, you can save the email to a database or file, or send it to an external service
        // Example: Save the email to a JSON file
        const fs = require('fs');
        const emails = JSON.parse(fs.readFileSync('emails.json', 'utf-8'));
        emails.push(email);
        fs.writeFileSync('emails.json', JSON.stringify(emails, null, 2));
  
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'An error occurred.' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed.' });
    }
  }
  