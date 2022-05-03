import { NextPage } from 'next'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import Requisicao from '../core/Requisicao'

type DashboarPageProps = {
  requerimento: Requisicao[]
}


const DashboarPage: NextPage<DashboarPageProps> = (props) => {

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
  

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">

          </Card>
        </div>

      </div>
    </Layout>
  )
}

export default DashboarPage
