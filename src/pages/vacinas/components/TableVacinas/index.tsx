import moment from "moment";
import Link from "next/link";
import { Tutores, Vacinas } from "@/typing";
import {
  modalState,
  modalVacinasState,
  typeRequestVacinas,
} from "@/src/atoms/modalAtom";
import { PencilSVG, TrashSVG } from "../../../../components/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ModalVacinas from "@/src/components/modal/ModalVacinas";
import { useEffect, useState } from "react";
import axios from "axios";
// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TableVacinasProps {
  vacinasData: Vacinas[];
}

async function deleteVacina(id: any) {
  await axios
    .delete(`${process.env.NEXT_PUBLIC_API_HOST}/vacinas/${id}`)
    .then((err) => console.log(err));
  return console.log(id);
}

const formatDate = (value: string) => {
  return moment(value).format("DD/MM/YYYY"); //moment(value).format(moment.HTML5_FMT.DATE)
};

export default function TableVacinas({ vacinasData }: TableVacinasProps) {
  const showModalVacinas = useRecoilValue(modalVacinasState);
  const setShowModal = useSetRecoilState(modalVacinasState);
  const [typeRequestVac, SetTypeRequestVac] =
    useRecoilState(typeRequestVacinas);

  const [vacina, setVacina] = useState({});

  return (
    <>
      <table className={` w-full    overflow-hidden `}>
        <thead
          className={`
             border-t-2 border-b-2 border-gray-400
        `}
        >
          <tr>
            <th className={` text-left text-xs p-2`}>Nome</th>
            <th className={` text-left text-xs p-2`}>Data de início</th>
            <th className={` text-left text-xs p-2`}>Data de encerramento</th>
            <th className={` text-left text-xs p-2`}>Gênero</th>
            <th className={` text-left text-xs p-2`}>Fornecedor</th>
          </tr>
        </thead>

        <tbody className="table__body">
          {vacinasData?.map(
            (
              { id, nome, dataInicio, dataFim, fornecedor, atendeGenero }: any,
              i: any
            ) => (
              <tr
                key={id}
                className={`${i % 2 === 0 ? "bg-gray-200" : "bg-gray-50"}`}
              >
                <td className={` text-left text-xs  p-2`}>{nome}</td>
                <td className={` text-left text-xs  p-2`}>
                  {formatDate(dataInicio)}{" "}
                </td>
                <td className={` text-left text-xs  p-2`}>
                  {" "}
                  {formatDate(dataFim)}{" "}
                </td>
                <td className={` text-left text-xs  p-2`}> {atendeGenero} </td>
                <td className={` text-left text-xs  p-2`}> {fornecedor} </td>

                <td>
                  <button
                    className="btn btn__compact btn__delete"
                    onClick={() => {
                      setShowModal(true);

                      setVacina({
                        id,
                        nome,
                        dataInicio,
                        dataFim,
                        fornecedor,
                        atendeGenero,
                      });
                      SetTypeRequestVac("PUT");
                    }}
                  >
                    <PencilSVG />
                  </button>
                  <button
                    className="btn btn__compact btn__delete"
                    onClick={() => {
                      deleteVacina(id);
                    }}
                  >
                    <TrashSVG />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {showModalVacinas && <ModalVacinas vacinaData={vacina} />}
    </>
  );
}
