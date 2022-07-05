import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalPetsState,
  modalState,
  typeRequestPets,
} from "@/src/atoms/modalAtom";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "@/src/components/templates/Layout";
import Card from "@/src/components/templates/shortcodes/card";
import Image from "next/image";
// import TablePets from "./components/TablePets";
import useSWR from "swr";
import TableVacinas from "../vacinas/components/TableVacinas";
import TablePetVacinas from "./components/TablePetVacinas";
import TableHistVacinas from "./components/TableHistVacinas";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PetInfoPage = (props: any) => {
  const pets = props?.pet;
  const id = props?.id;
  const vacinasData = props?.vacinas;

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/pets/vacinas/${id}`,
    fetcher,
    {
      fallbackData: vacinasData,
      refreshInterval: 100,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-4 px-4">
          <Card>
            <div className="intro-y box px-5 pt-0 mt-0">
              <div className="flex flex-1 lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-0 -mx-5">
                <div className="ml-5">
                  <div className="w-40 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                    {pets.nome}
                  </div>
                  <div className="text-slate-500"> {pets.raca}</div>
                </div>
              </div>
            </div>

            <div className=" flex flex-wrap mt-4">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className=" mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-gray-400"
                          : "text-blueGray-600 bg-gray-50")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                      VACINAS DISPONÍVEIS
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-gray-400"
                          : "text-blueGray-600 bg-gray-50")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <i className="fas fa-cog text-base mr-1"></i> HISTÓRICO DE
                      VACINAS
                    </a>
                  </li>

                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-white bg-gray-400"
                          : "text-blueGray-600 bg-gray-50")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i> OPÇÃO
                      2
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 4
                          ? "text-white bg-gray-400"
                          : "text-blueGray-600 bg-gray-50")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i> OPÇÃO
                      3
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 5
                          ? "text-white bg-gray-400"
                          : "text-blueGray-600 bg-gray-50")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>
                      OPÇÃO 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap ">
            <div className="lg:w-8/12 pr-4 py-4">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-col border gap-2 border-b-2 m-5 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal p-2 font-semibold  text-base ">
                        VACINAS OFERTADAS
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 m-5 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <TablePetVacinas vacinasData={vacinasData} idPet={id} />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-col border gap-2 border-b-2 m-5 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal p-2 font-semibold  text-base ">
                        HISTÓRICO DE VACINAÇÃO
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 m-5 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <TableHistVacinas vacinasData={data} />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal  p-2 font-semibold  text-base ">
                        OPÇÃO 2
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal  p-2 font-semibold  text-base ">
                        OPÇÃO 3
                      </p>
                    </div>
                  </div>
                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal  p-2 font-semibold  text-base ">
                        OPÇÃO 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PetInfoPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id as string;

  const [{ data: pet }, { data: vacinas }] = await Promise.all([
    await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/pets/${id}`),
    await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/vacinas`),
  ]);

  return {
    props: {
      pet,
      id,
      vacinas,
    },
  };
};
