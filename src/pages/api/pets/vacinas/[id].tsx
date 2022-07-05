import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Vacinas } from "@/typing";

function vacinasOfPetHandle(req: any, res: any) {
  const id = req.query.id as string;

  console.log(id);

  switch (req.method) {
    case "GET": {
      return getVacinasOfPet();
    }
    case "PUT":
      return updateVacinas(req.body);

    case "DELETE":
      return deleteVacinas();

    case "POST":
      return addVacinaToPet(req.body);

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getVacinasOfPet() {
    try {
      const { data } = await axios.get(
        `${process.env.NEST_API_HOST}/pets/vacinas/${id}`
      );
      res.status(200).json(data.vacinas);
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

  async function addVacinaToPet(data: any) {
    const { petsId, vacinasId } = data;
    console.log(petsId, vacinasId);
    try {
      const { data } = await axios.post(
        `${process.env.NEST_API_HOST}/pets/vacinas`,
        {
          petsId: petsId,
          vacinasId: vacinasId,
        }
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
export default vacinasOfPetHandle;
