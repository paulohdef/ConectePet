import axios from "axios";
// import ironConfig from "../../../utils/iron-config";
// import { withIronSessionApiRoute } from "iron-session/next";
// import CentroCusto from "@/src/core/CentroCusto";

function tutoresHandle(req: any, res: any) {
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
      const { data } = await axios.get(`${process.env.NEST_API_HOST}/users`);

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
    const { id, nome, email, celular, dataNascimento, cep, password } = data;

    try {
      const { data } = await axios.put(`${process.env.NEST_API_HOST}/users`, {
        id,
        nome,
        email,
        celular,
        dataNascimento,
        password,
        cep,
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
    const { nome, email, celular, dataNascimento, cep, password } = data;
    try {
      const { data } = await axios.post(`${process.env.NEST_API_HOST}/users`, {
        nome,
        email,
        celular,
        dataNascimento,
        cep,
        password,
      });
      // console.log(`meu retorno ${JSON.stringify(data)}`)

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
