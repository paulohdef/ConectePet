import { NextPage, GetServerSideProps } from "next";
import Layout from "../../components/templates/Layout";
import axios from "axios";
import useSWR from "swr";
import Router from "next/router";

// import { withIronSessionSsr } from "iron-session/next";
// import ironConfig from "../../utils/iron-config";
// import CentroCusto from "@/src/core/CentroCusto";
// import TableCentroCusto from "@/src/components/TableCentroCusto";
import { Tutores } from "@/typing";
import TableTutores from "./components/TableTutores";
import { modalTutoresState, typeRequestTutores } from "@/src/atoms/modalAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useState } from "react";

interface TutoresProps {
  listTutores: Tutores[];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const TutoresPage: NextPage<TutoresProps> = ({ listTutores }: TutoresProps) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/tutores`,
    fetcher,
    {
      fallbackData: listTutores,
      refreshInterval: 100,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const setShowModal = useSetRecoilState(modalTutoresState);
  const [typeRequestTutor, SetTypeRequestTutor] =
    useRecoilState(typeRequestTutores);

  //   console.log('resposta swr', data)
  const [value, setValue] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-4 px-4">
          <div className="flex w-full flex-row mb-4 justify-start">
            <div className="flex-1">
              <div className="relative md:w-1/3">
                <input
                  type="search"
                  className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="Pesquisa..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <div className="absolute top-0 left-0 inline-flex items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      stroke="none"
                    ></rect>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </div>
              </div>
            </div>
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-gray-400 m-5 hover:bg-gray-600"
              }
              data-toggle="tab"
              role="tablist"
              onClick={() => {
                setShowModal(true);
                SetTypeRequestTutor("POST");
              }}
            >
              <i className="fas fa-space-shuttle text-base mr-1"></i> CADASTRAR
              TUTOR
            </button>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="xl:col-span-3">
              <TableTutores tutoresData={data} />
            </div>
          </div>
          <div className="flex justify-end  items-center py-4">
            <ul className="flex pl-0 list-none rounded my-2">
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                <a
                  className="transition  cursor-pointer"
                  onClick={() => setPageIndex(pageIndex - 1)}
                >
                  Anterior
                </a>
              </li>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                <a
                  className="page-link cursor-pointer"
                  onClick={() => setPageIndex(1)}
                >
                  1
                </a>
              </li>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                <a
                  className="page-link cursor-pointer"
                  onClick={() => setPageIndex(2)}
                >
                  2
                </a>
              </li>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                <a
                  className="page-link cursor-pointer"
                  onClick={() => setPageIndex(3)}
                >
                  3
                </a>
              </li>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
                <a
                  className="page-link cursor-pointer"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Próxima
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TutoresPage;
