import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment'

import Requisicao from '../../core/Requisicao'
import { PencilSVG, TrashSVG } from '../icons'


import {
  deleteRequeriment,
  fetchRequeriments,
  setModalOpen,
  setSelectedRequeriment,
} from '../../store'

import { useEffect } from 'react'
import { RootState } from '@/src/store/reducers'

interface TableBasicProps {
  requisicao?: Requisicao[]
}

const formatDate = (value: string) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)
}

export default function TableBasic(props: TableBasicProps) {
  const state = useSelector((state : RootState) => state.requeriment)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRequeriments())
  }, [dispatch])

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
             border-t-2 border-b-2 border-gray-300
        `}
      >
        <tr>
          <th className={` text-left text-xs p-2`}>Data</th>
          <th className={` text-left text-xs p-2`}>Despacho</th>
          <th className={` text-left text-xs p-2`}>Descrição</th>
          <th className={` text-left text-xs p-2`}>Situação</th>
          <th className={` text-left text-xs p-2`}>Departamento</th>
          <th className={` text-left text-xs p-2`}>Status</th>
          <th className={` text-left text-xs p-2`}>Tipo</th>
          <th className={` text-left text-xs p-2`}>Ações</th>
        </tr>
      </thead>

      <tbody className="table__body">
        {state.requerimentList.map(
          (
            {
              _id,
              datarequisicao,
              datadespacho,
              descricao,
              situacao,
              departamento,
              status,
              tipo,
            }: any,
            i: any,
          ) => (
            <tr
              key={_id}
              className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}
            >
              <td className={` text-left text-xs  p-2`}>
                {formatDate(datarequisicao)}
              </td>
              <td className={` text-left text-xs  p-2`}>
                {' '}
                {formatDate(datadespacho)}{' '}
              </td>
              <td className={` text-left text-xs  p-2`}> {descricao} </td>
              <td className={` text-left text-xs  p-2`}> {situacao} </td>
              <td className={` text-left text-xs  p-2`}> {departamento} </td>

              <td className={` text-left text-xs  p-2`}>
                {rendereizarStatus(status)}
              </td>

              <td className={` text-left text-xs  p-2`}> {tipo} </td>

              <td>
                <button
                  className="btn btn__compact btn__edit"
                  onClick={() => {
                    dispatch(setSelectedRequeriment(_id))
                    dispatch(setModalOpen(true))
                  }}
                >
                  <PencilSVG />
                </button>
                <button
                  className="btn btn__compact btn__delete"
                  onClick={() => {
                    dispatch(deleteRequeriment(_id))
                  }}
                >
                  <TrashSVG />
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  )
}
