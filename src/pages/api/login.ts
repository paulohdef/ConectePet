import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const header = {
      "Content-Type": "application/json",

      "Access-Control-Allow-Origin": "*",
    };

    const { data } = await axios.post(
      `${process.env.NEST_API_HOST}/auth/signin`,
      {
        email,
        password,
      }
    );

    console.log(`resposta do servidor ${JSON.stringify(data)}`);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Acesso negado."});
  }

}

export default Login;
