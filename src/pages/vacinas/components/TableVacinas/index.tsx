import moment from 'moment'
import Link from 'next/link'
import { Tutores, Vacinas } from '@/typing'
import { PencilSVG, TrashSVG } from '../../../../components/icons'
// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TableVacinasProps {
 vacinasData: Vacinas[]
}

const formatDate = (value: string) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)
}

export default function TableVacinas({ vacinasData }: TableVacinasProps) {

  return (
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
            i: any,
          ) => (

            <tr
              key={id}
              className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'}`}
            >
              <td className={` text-left text-xs  p-2`}>{nome}</td>
              <td className={` text-left text-xs  p-2`}>{dataInicio} </td>
              <td className={` text-left text-xs  p-2`}> {dataFim} </td>
              <td className={` text-left text-xs  p-2`}> {fornecedor} </td>
              <td className={` text-left text-xs  p-2`}> {atendeGenero} </td>

              <td>
                <Link href={`#`} passHref>
                  {/* <Link href={`/associado/624c5a965e4ce3ea923cdd04`} passHref> */}
                  <button className="btn btn__compact btn__delete">
                    <PencilSVG />
                  </button>
                </Link>


              </td>

            </tr>
          ),
        )}
      </tbody>
    </table>
  )
}
