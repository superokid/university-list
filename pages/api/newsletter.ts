// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    fs.readFile('data/users.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return;
      }
      const obj = JSON.parse(data);
      obj.emails.push(email);
      fs.writeFile('data/users.json', JSON.stringify(obj), 'utf8', (err) => {
        if (err) {
          res.statusCode = 500;
          return;
        }
        res.statusCode = 200;
        res.json({ data: 'success' });
      });
    });
  } else if (req.method === 'GET') {
    fs.readFile('data/users.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return;
      }
      res.statusCode = 200;
      res.json({ data: JSON.parse(data).emails });
    });
  }
};

export default handler;
