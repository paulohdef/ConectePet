import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Vacinas } from "@/typing";

function vacinasHandle(req: any, res: any) {
  const id = req.query.id as string;

  console.log(id);

  switch (req.method) {
    case "GET": {
      return getPets();
    }
    case "PUT":
      return updateVacinas(req.body);

    case "DELETE":
      return deleteVacinas();

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getPets() {
    try {
      const { data } = await axios.get(
        `${process.env.NEST_API_HOST}/pets/${id}`
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

  async function updateVacinas(body: Vacinas) {
    const { id, nome, dataInicio, dataFim, fornecedor, atendeGenero } = body;

    try {
      const { data } = await axios.put(`${process.env.NEST_API_HOST}/vacinas`, {
        id,
        nome,
        dataInicio,
        dataFim,
        fornecedor,
        atendeGenero,
      });

      console.log("retorno do id", data);
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
export default vacinasHandle;
