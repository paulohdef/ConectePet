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
import { modalTutoresState, typeRequestTutores } from "@/src/atoms/modalAtom";
import { useRecoilState, useSetRecoilState } from "recoil";

interface TutoresProps {
  listTutores: Tutores[];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const TutoresPage: NextPage<TutoresProps> = ({ listTutores }: TutoresProps) => {
  return (
    <div>
      <Layout
        titulo="Dashboar"
        subTitulo="Administrar suas informações"
      ></Layout>
    </div>
  );
};

export default TutoresPage;
