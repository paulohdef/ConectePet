import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mypic from "../../public/images/logoConecte.png";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { NextRouter, useRouter } from "next/dist/client/router";
import Card from "../components/templates/shortcodes/card";
import Layout from "../components/templates/Layout";

interface cadastroPageProps {}

type FormValues = {
  email: string;
  password: string;
};

const cadastroPage: NextPage<cadastroPageProps> = (props) => {
  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            <div>
              <section className="max-w-4xl p-6 mx-auto bg-gray-400 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold justify-center flex text-white dark:text-white">
                  Cadastro de Vacina
                </h1>
                <form>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="username"
                      >
                        Nome da Vacina
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="passwordConfirmation"
                      >
                        Atende o Gênero
                      </label>
                      <select className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option>Canino</option>
                        <option>Felino</option>

                      </select>
                    </div>
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="passwordConfirmation"
                      >
                        Selecione a dose
                      </label>
                      <select className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option>Primeira dose</option>
                        <option>Segunda dose</option>
                        <option>Terceira dose</option>
                        <option>Reforço Anualmente</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="username"
                      >
                        Lote
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="username"
                      >
                        Fabricante
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="username"
                      >
                        Período de Vacinação
                      </label>
                      <br></br>
                      <label
                        className="text-white dark:text-gray-200 text-sm"
                        htmlFor="username"
                      >
                        De
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="flex w-half px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                      <label
                        className="text-white dark:text-gray-200 text-sm"
                        htmlFor="username"
                      >
                        Até
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="flex w-half px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-grey-700 focus:outline-none focus:bg-gray-600">
                      Cadastrar
                    </button>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Link href="/dashboard">
                      <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-grey-700 focus:outline-none focus:bg-gray-600">
                        Início
                      </button>
                    </Link>
                  </div>
                </form>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default cadastroPage;
