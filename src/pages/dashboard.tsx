import { NextPage } from 'next'
// import useSWR from 'swr'

import { Line1 } from '../components/charts/Line'
import { List } from '../components/dashboard/List'

import Section from '../components/dashboard/Section'
import { IconeSetaAbaixo, IconeSetaAcima } from '../components/icons'
import ModalRequerimento from '../components/modal/Modal-Requerimento'
import TableBasic from '../components/TableBasic.tsx'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import Dropdown from '../components/widgets/dropdown'
import Requisicao from '../core/Requisicao'

type DashboarPageProps = {
  requerimento: Requisicao[]
}

// const fetcher = (url: string) => http.get(url).then((res) => res.data)

const DashboarPage: NextPage<DashboarPageProps> = (props) => {
  // const { requerimento: requerimentoProp } = props

  // const { data: requerimento, error } = useSWR('api/requeriment', fetcher, {
  //   fallbackData: requerimentoProp,
  //   // refreshInterval: 1000,
  //   shouldRetryOnError: true,
  // })

  // const state = useSelector((state ) => state.requeriment);

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchRequeriments())
  // }, [dispatch])

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
  

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}
            <TableBasic />

            <ModalRequerimento />
          </Card>
        </div>

      </div>
    </Layout>
  )
}

export default DashboarPage
