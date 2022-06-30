import { NextPage, GetServerSideProps } from "next";
import Layout from "../../components/templates/Layout";
import axios from "axios";
import useSWR from "swr";
import Router from "next/router";

// import { withIronSessionSsr } from "iron-session/next";
// import ironConfig from "../../utils/iron-config";
// import CentroCusto from "@/src/core/CentroCusto";
// import TableCentroCusto from "@/src/components/TableCentroCusto";
import { Tutores, Vacinas } from "@/typing";
import TableVacinas from "./components/TableVacinas";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalVacinasState, typeRequestVacinas } from "@/src/atoms/modalAtom";

interface VacinasProps {
  listVacinas: Vacinas[];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const VacinasPage: NextPage<VacinasProps> = ({ listVacinas }: VacinasProps) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/vacinas`,
    fetcher,
    {
      fallbackData: listVacinas,
      refreshInterval: 100,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const setShowModal = useSetRecoilState(modalVacinasState);
  const [typeRequestVac, SetTypeRequestVac] = useRecoilState(typeRequestVacinas);



  return (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-4 px-4">
          <div className="flex w-full flex-row mb-4 justify-start">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-gray-400 m-5 hover:bg-gray-600"
              }
              data-toggle="tab"
              role="tablist"
              onClick={() => {
                setShowModal(true);
                SetTypeRequestVac("POST");
              }}
              
            >
              <i className="fas fa-space-shuttle text-base mr-1"></i> CADASTRAR
              VACINA
            </button>
            
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="xl:col-span-3">
              <TableVacinas vacinasData={data} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VacinasPage;
