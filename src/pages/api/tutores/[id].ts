import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Tutores } from "@/typing";
// import { withIronSessionApiRoute } from "iron-session/next";
// import ironConfig from "../../../utils/iron-config";

function tutoresHandle(req: any, res: any) {
  const id = req.query.id as string;

  switch (req.method) {
    case "GET": {
      return getTutores();
    }
    case "PATCH":
      return updateTutores(req.body);

    case "DELETE":
      return deleteTutores();

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getTutores() {
    try {
      const { data } = await axios.get(
        `${process.env.NEST_API_HOST}/users/${id}`
      );

      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      if (axios.isAxiosError(e)) {
        res.status(e.response!.status).json(e.response?.data);
      } else {
        res.status(500).json({ message: "Ocorreu um erro interno" });
      }
    }
  }

  async function updateTutores(body: Tutores) {
    const { id, nome, email, celular, dataNascimento, cep } = body;

    try {
      const { data } = await axios.put(`${process.env.NEST_API_HOST}/users`, {
        id,
        nome,
        email,
        celular,
        dataNascimento,
        cep,
      });

      //res.status(200).json(data.centro_custo);
    } catch (e) {
      console.error(e);
      if (axios.isAxiosError(e)) {
        res.status(e.response!.status).json(e.response?.data);
      } else {
        res.status(500).json({ message: "Ocorreu um erro interno" });
      }
    }
  }

  async function deleteTutores() {
    try {
      const { data } = await axios.delete(
        `${process.env.NEST_API_HOST}/users/${id}`
      );

      res.status(200).send();
    } catch (e) {
      console.error(e);
      if (axios.isAxiosError(e)) {
        res.status(e.response!.status).json(e.response?.data);
      } else {
        res.status(500).json({ message: "Ocorreu um erro interno" });
      }
    }
  }
}
export default tutoresHandle;
