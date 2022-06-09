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

interface TutoresProps {
  listTutores: Tutores[];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const TutoresPage: NextPage<TutoresProps> = ({
  listTutores,
}: TutoresProps) => {
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

  //   console.log('resposta swr', data)

  return (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-4 px-4">
          <div className="flex flex-row mb-4">
            <div className="w-full">
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="xl:col-span-3">
              <TableTutores tutoresData={data} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TutoresPage;

