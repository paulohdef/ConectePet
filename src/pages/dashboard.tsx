import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/templates/Layout";
import Card from "../components/templates/shortcodes/card";
import Requisicao from "../core/Requisicao";

import { SubmitHandler, useForm } from 'react-hook-form'
import { NextRouter, useRouter } from 'next/dist/client/router'


import axios from 'axios'

type DashboarPageProps = {
  requerimento: Requisicao[];
};

const DashboarPage: NextPage<DashboarPageProps> = (props) => {



  const router : NextRouter = useRouter();

  const { register, handleSubmit } = useForm<any>()

  async function onSubmit(data: any) : Promise<void>{
    
    const { username } = data;

    try{

      await axios.post(`http://localhost:3030/login`, {
        
        "username":"bob",
        "password": 123
      });

      console.log("teste")

      alert("Usuário existe");

    } catch(error){

      console.log(error);
      alert("Usuário não existe");

    }

  }




  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            <div>
              <section className="max-w-4xl p-6 mx-auto bg-gray-400 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold justify-center flex text-white dark:text-white">
                  Buscar Tutor
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="username"
                      >
                        Insira o Nome de Usuário do Tutor
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('username')}
                      />
                    </div>
                    <div className="flex justify-start mt-2">
                      <button type="submit" className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-grey-700 focus:outline-none focus:bg-gray-600">
                        Buscar
                      </button>
                    </div>
                  </div>
                </form>

              </section>
            </div>

            <div className="flex justify-center mt-6">
              <Link href="/cadastro">
                <button className=" px-6 py-2 relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
                  Cadastrar PET
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
              <Link href="cadastroVacina">
                <button className=" px-6 py-2 relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
                  Cadastrar Vacina
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
