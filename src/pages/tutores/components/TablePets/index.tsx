import moment from "moment";
import Link from "next/link";
import { Pets, Tutores } from "@/typing";
import {
  PencilSVG,
  TrashSVG,
  IconeUsers,
  IconePet,
} from "../../../../components/icons";
import {
  modalPetsState,
  modalTutoresState,
  typeRequestPets,
  typeRequestTutores,
} from "@/src/atoms/modalAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ModalTutores from "@/src/components/modal/ModalTutores";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalPets from "@/src/components/modal/ModalPets";
import useSWR from "swr";
// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TablePetsProps {
  petsData: Pets[];
  usersId: any;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const formatDate = (value: string) => {
  return moment().format("DD/MM/YYYY"); //moment(value).format(moment.HTML5_FMT.DATE)
};
async function deletePet(id: any) {
  await axios
    .delete(`${process.env.NEXT_PUBLIC_API_HOST}/tutores/pets/${id}`)
    .then((err) => console.log(err));
  return console.log(id);
}

export default function TablePets({ petsData, usersId }: TablePetsProps) {
  const showModalPets = useRecoilValue(modalPetsState);
  const setShowModal = useSetRecoilState(modalPetsState);
  const [typeRequestPet, SetTypeRequestPet] = useRecoilState(typeRequestPets);

  const [pet, setPet] = useState({});

  return (
    <>
      <table className={` w-full    overflow-hidden m-6 `}>
        <thead
          className={`
             border-t-2 border-b-2 border-gray-400
        `}
        >
          <tr>
            <th className={` text-left text-xs p-2`}>Nome</th>
            <th className={` text-left text-xs p-2`}>Raça</th>
            <th className={` text-left text-xs p-2`}>Idade</th>
            <th className={` text-left text-xs p-2`}>Gênero</th>
            <th className={` text-left text-xs p-2`}>Sexo</th>
            <th className={` text-left text-xs p-2`}>Castrado</th>
            <th className={` text-left text-xs p-2`}>Ações</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {petsData?.map(
            (
              { id, nome, raca, idade, genero, sexo, castrado }: any,
              i: any
            ) => (
              <tr
                key={id}
                className={`${i % 2 === 0 ? "bg-gray-200" : "bg-gray-50"}`}
              >
                <td className={` text-left text-xs  p-2`}>{nome}</td>
                <td className={` text-left text-xs  p-2`}>{raca} </td>
                <td className={` text-left text-xs  p-2`}> {idade} </td>
                <td className={` text-left text-xs  p-2`}> {genero} </td>
                <td className={` text-left text-xs  p-2`}> {sexo} </td>
                <td className={` text-left text-xs  p-2`}> {castrado} </td>

                <td>
                  <button
                    className="btn btn__compact btn__delete m-3"
                    onClick={() => {
                      setPet({
                        id,
                        nome,
                        raca,
                        idade,
                        genero,
                        sexo,
                        castrado,
                      });
                      SetTypeRequestPet("PUT");
                      setShowModal(true);
                    }}
                  >
                    <PencilSVG />
                  </button>
                  <button
                    className="btn btn__compact btn__delete m-3"
                    onClick={() => {
                      deletePet(id);
                    }}
                  >
                    <TrashSVG />
                  </button>
                  <Link href={`/pets/${id}`} passHref>
                    <button
                      className="btn btn__compact btn__delete m-3"
                      onClick={() => {}}
                    >
                      <IconePet />
                    </button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {showModalPets && <ModalPets petData={pet} usersId={usersId} />}
    </>
  );
}
