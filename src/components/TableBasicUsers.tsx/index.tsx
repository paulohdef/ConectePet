import moment from 'moment'
import User from '../../core/User'
import { useSelector, useDispatch } from 'react-redux'
import { PencilSVG, TrashSVG } from '../icons'
import {
  fetchUsers,
  setModalOpen,
  setSelectedUsers,
} from '../../store'
import { useEffect } from 'react'
import { RootState } from '@/src/store/reducers'

interface TableBasicProps {
  users?: User[]
}

const formatDate = (value: string) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)
}

export default function TableBasicUsers(props: TableBasicProps) {

  const state = useSelector((state : RootState) => state.user)


  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(fetchUsers())
    
  }, [dispatch])

  return (
    <table className={` w-full    overflow-hidden `}>
      <thead
        className={`
             border-t-2 border-b-2 border-gray-300
        `}
      >
        <tr>
          <th className={` text-left text-xs p-2`}>Registrado</th>
          <th className={` text-left text-xs p-2`}>Ativo</th>
          <th className={` text-left text-xs p-2`}>Gênero</th>
          <th className={` text-left text-xs p-2`}>Email</th>
          <th className={` text-left text-xs p-2`}>Celular</th>
          <th className={` text-left text-xs p-2`}>Endereço</th>
          <th className={` text-left text-xs p-2`}>Ações</th>
        </tr>
      </thead>

      <tbody className="table__body">
      {state.usersList.map(
          (
            {
              _id,
              isActive,
              picture,
              gender,
              email,
              phone,
              address,
              registered,
            }: any,
            i: any,
          ) => (
            <tr
              key={_id}
              className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}
            >
              <td className={` text-left text-xs  p-2`}>
                {formatDate(registered)}
              </td>

              <td className={` text-left text-xs  p-2`}> {isActive} </td>
              <td className={` text-left text-xs  p-2`}> {gender} </td>
              <td className={` text-left text-xs  p-2`}> {email} </td>


              <td className={` text-left text-xs  p-2`}> {phone} </td>
              <td className={` text-left text-xs  p-2`}> {address} </td>

              <td>
                <button
                  className="btn btn__compact btn__edit"
                  onClick={() => {
                    dispatch(setSelectedRequeriment(_id))

                  }}
                >
                  <PencilSVG />
                </button>

              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  )
}
