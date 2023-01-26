// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { search } = req.body;
    const run = async () => {
      const income = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${search}&key=${process.env.API_KEY}`
      );
      res.status(200).json(income.data);
    };
    run();
  } else {
    res.status(200).json({ name: 'John Doe' });
  }
}
