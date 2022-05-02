import { NextPage } from 'next'
import TableBasicUsers from '../components/TableBasicUsers.tsx'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'

interface AssociadoProps {}

const AssociadoPage: NextPage<AssociadoProps> = (props) => {
  return (
    <div>
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">  

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}
            <TableBasicUsers />
          </Card>
        </div>

      </div>
    </Layout>
    </div>
  )
}

export default AssociadoPage
