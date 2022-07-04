import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Pets, Tutores } from "@/typing";
// import { withIronSessionApiRoute } from "iron-session/next";
// import ironConfig from "../../../utils/iron-config";

function petsHandle(req: any, res: any) {
  const id = req.query.id as string;

  switch (req.method) {
    case "GET": {
      return getPets();
    }
    case "PUT": {
      console.log(req.body);
      return updatePets(req.body);
    }
    case "DELETE": {
      return getPets();
    }

    default:
      res.setHeader("Allow", ["GET, PUT, DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getPets() {
    try {
      const { data } = await axios.get(
        `${process.env.NEST_API_HOST}/users/tutores/${id}`
      );

      console.log("retorno do id", data);
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
  async function updatePets(body: Pets) {
    const { id, nome, raca, genero, idade, sexo, castrado } = body;

    try {
      const { data } = await axios.put(`${process.env.NEST_API_HOST}/pets`, {
        id,
        nome,
        raca,
        genero,
        idade,
        sexo,
        castrado,
      });

      console.log("retorno do id", data);
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

  async function deleteVacinas() {
    try {
      const { data } = await axios.delete(
        `${process.env.NEST_API_HOST}/vacinas/${id}`
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
export default petsHandle;
