import moment from 'moment'
import Link from 'next/link'
import { Tutores } from '@/typing'
import { PencilSVG, TrashSVG } from '../../../../components/icons'
// import Pessoa from '@/src/core/Pessoa'
// import { CentroCusto } from '@/typings'

interface TableTutoresProps {
 tutoresData: Tutores[]
}

const formatDate = (value: string) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)
}

export default function TableTutores({ tutoresData }: TableTutoresProps) {
  function rendereizarStatus(status: string) {
    switch (status) {
      case 'PROTOCOLADO':
        return (
          <span className="bg-red-400 text-white py-1 px-3 rounded-full text-xs">
            {status}
          </span>
        )

      case 'TRAMITAÇÃO':
        return (
          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            {status}
          </span>
        )

      case 'ENCAMINHADO':
        return (
          <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
            {status}
          </span>
        )

      default:
        break
    }
  }


  return (
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
            { id, nome, email, celular, dataNascimento, cep }: any,
            i: any,
          ) => (

            <tr
              key={id}
              className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'}`}
            >
              <td className={` text-left text-xs  p-2`}>{nome}</td>
              <td className={` text-left text-xs  p-2`}>{email} </td>
              <td className={` text-left text-xs  p-2`}> {celular} </td>
              <td className={` text-left text-xs  p-2`}> {dataNascimento} </td>
              <td className={` text-left text-xs  p-2`}> {cep} </td>

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
