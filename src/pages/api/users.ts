import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../core/User";


const url = 'https://my-json-server.typicode.com/speedsis/base_user/user/'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  
  const { data } = await axios.get(url);
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const body = req.body 
    

  res.status(200).send(data);
}