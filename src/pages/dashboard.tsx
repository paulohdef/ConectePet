import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/templates/Layout";
import Card from "../components/templates/shortcodes/card";
import Requisicao from "../core/Requisicao";

import { SubmitHandler, useForm } from "react-hook-form";
import { NextRouter, useRouter } from "next/dist/client/router";

import axios from "axios";

type DashboarPageProps = {
  requerimento: Requisicao[];
};

const DashboarPage: NextPage<DashboarPageProps> = (props) => {
  const router: NextRouter = useRouter();

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <h1 className="text-xl pt-4 font-bold justify-center flex text-black dark:text-white">
        Sistema de Gerenciamento de Pets (ConectePet)
      </h1>
      <h3 className="text-x pt-10 justify-center flex text-black dark:text-white">
        Seja bem vindo ao SIGPETS, fique a vontade para gerenciar as vacinas dos
        Pets dos seus clientes !
      </h3>
      <div className="px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            <div className="flex justify-center mt-6">
              <Link href="/vacinas" passHref>
                <button className=" px-6 py-2 relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
                  Acessar Vacinas
                </button>
              </Link>
              <br />
              <br />
              <br />
            </div>
            <div className="flex justify-center mt-6">
              <br />
              <br />
              <br />
              <Link href="/tutores" passHref>
                <button className=" px-6 py-2 relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
                  Acessar Tutores
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DashboarPage;
