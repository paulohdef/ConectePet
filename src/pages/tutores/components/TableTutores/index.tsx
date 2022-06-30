import moment from "moment";
import Link from "next/link";
import { Tutores } from "@/typing";
import { PencilSVG, TrashSVG } from "../../../../components/icons";
import { modalTutoresState, typeRequestTutores } from "@/src/atoms/modalAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ModalTutores from "@/src/components/modal/ModalTutores";
import { useState } from "react";
import axios from "axios";
// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TableTutoresProps {
  tutoresData: Tutores[];
}

const formatDate = (value: string) => {
  return moment().format("DD/MM/YYYY"); //moment(value).format(moment.HTML5_FMT.DATE)
};
async function deleteTutor(id: any) {
  await axios
    .delete(`${process.env.NEXT_PUBLIC_API_HOST}/tutores/${id}`)
    .then((err) => console.log(err));
  return console.log(id);
}

export default function TableTutores({ tutoresData }: TableTutoresProps) {
  const showModalVacinas = useRecoilValue(modalTutoresState);
  const setShowModal = useSetRecoilState(modalTutoresState);
  const [typeRequestTutor, SetTypeRequestTutor] =
    useRecoilState(typeRequestTutores);

  const [tutor, setTutor] = useState({});

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
            <th className={` text-left text-xs p-2`}>Email</th>
            <th className={` text-left text-xs p-2`}>Celular</th>
            <th className={` text-left text-xs p-2`}>Data de Nascimento</th>
            <th className={` text-left text-xs p-2`}>CEP</th>
          </tr>
        </thead>

        <tbody className="table__body">
          {tutoresData?.map(
            (
              { id, nome, email, celular, dataNascimento, cep, password }: any,
              i: any
            ) => (
              <tr
                key={id}
                className={`${i % 2 === 0 ? "bg-gray-200" : "bg-gray-50"}`}
              >
                <td className={` text-left text-xs  p-2`}>{nome}</td>
                <td className={` text-left text-xs  p-2`}>{email} </td>
                <td className={` text-left text-xs  p-2`}> {celular} </td>
                <td className={` text-left text-xs  p-2`}>
                  {" "}
                  {dataNascimento}{" "}
                </td>
                <td className={` text-left text-xs  p-2`}> {cep} </td>

                <td>
                  <button
                    className="btn btn__compact btn__delete"
                    onClick={() => {
                      setTutor({
                        id,
                        nome,
                        email,
                        celular,
                        dataNascimento,
                        cep,
                        password
                      });
                      SetTypeRequestTutor("PUT");
                      setShowModal(true);
                    }}
                  >
                    <PencilSVG />
                  </button>
                  <button
                    className="btn btn__compact btn__delete"
                    onClick={() => {
                      deleteTutor(id);
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
      {showModalVacinas && <ModalTutores tutorData={tutor} />}
    </>
  );
}
