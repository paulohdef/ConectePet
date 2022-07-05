import axios from "axios";
// import ironConfig from "../../../utils/iron-config";
// import { withIronSessionApiRoute } from "iron-session/next";
// import CentroCusto from "@/src/core/CentroCusto";

function vacinasHandle(req: any, res: any) {
  switch (req.method) {
    case "GET": {
      return getUsers();
    }
    case "PUT":
      return updateUsers(req.body);
    case "POST":
      return createUser(req.body);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getUsers() {
    try {
      const { data } = await axios.get(`${process.env.NEST_API_HOST}/vacinas`);

      // console.log(`meu retorno ${JSON.stringify(data)}`)

      //console.log("fez o get");
      //console.log(data);

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
  async function updateUsers(data: any) {
    const { id, nome, dataInicio, dataFim, fornecedor, atendeGenero } = data;
    try {
      const { data } = await axios.put(`${process.env.NEST_API_HOST}/vacinas`, {
        id,
        nome,
        dataInicio,
        dataFim,
        fornecedor,
        atendeGenero,
      });

      // console.log(`meu retorno ${JSON.stringify(data)}`)

      //console.log("fez o get");
      //console.log(data);

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

  async function createUser(data: any) {
    const { nome, dataInicio, dataFim, fornecedor, atendeGenero } = data;
    try {
      const { data } = await axios.post(
        `${process.env.NEST_API_HOST}/vacinas`,
        {
          nome,
          dataInicio,
          dataFim,
          fornecedor,
          atendeGenero,
        }
      );

      // console.log(`meu retorno ${JSON.stringify(data)}`)

      //console.log("fez o get");
      //console.log(data);

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
}

export default vacinasHandle;
