import moment from "moment";
import Link from "next/link";
import { Tutores, Vacinas } from "@/typing";
import {
  modalState,
  modalVacinasState,
  typeRequestVacinas,
} from "@/src/atoms/modalAtom";
import { IconePlus, PencilSVG, TrashSVG } from "../../../../components/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ModalVacinas from "@/src/components/modal/ModalVacinas";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getColor } from "@/src/functions/colors";
import { blue, green, lime } from "@mui/material/colors";

// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TablePetVacinasProps {
  vacinasData: Vacinas[];
  idPet: number;
}

const formatDate = (value: string) => {
  return moment(value).format("DD/MM/YYYY"); //moment(value).format(moment.HTML5_FMT.DATE)
};

async function addVacinaToPet(id: any, idVacina: any) {
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_HOST}/pets/${id}`, {
      petsId: id,
      vacinasId: idVacina,
    })
    .then((err) => console.log(err));
}

const toastStyle = {
  background: getColor(green[400]),
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
  padding: "15px",
  borderRadius: "9999px",
  maxWidth: "1000px",
};

export default function TablePetVacinas({
  vacinasData,
  idPet,
}: TablePetVacinasProps) {
  const showModalVacinas = useRecoilValue(modalVacinasState);
  const setShowModal = useSetRecoilState(modalVacinasState);
  const [typeRequestVac, SetTypeRequestVac] =
    useRecoilState(typeRequestVacinas);

  const [vacina, setVacina] = useState({});

  return (
    <>
      <Toaster position="bottom-center" />

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
            <th className={` text-left text-xs p-2`}>Ações</th>
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
                    className="btn btn__compact btn__delete m-3"
                    onClick={() => {
                      addVacinaToPet(idPet, id);
                      toast(`Vacina adicionada com sucesso`, {
                        duration: 3000,
                        style: toastStyle,
                      });
                    }}
                  >
                    <IconePlus />
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
