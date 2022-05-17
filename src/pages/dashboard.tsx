import { NextPage } from 'next'
import Link from 'next/link'
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

            <div>
          <Link href="/cadastro">
            <button className="relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
              Cadastrar PET
            </button>
          </Link>
          <br /><br /><br />
          <button className="relative bg-gray-400 text-white p-6 rounded text-2xl font-bold overflow-visible">
            Cadastrar Vacina
          </button>
        </div>
      

          </Card>
        </div>

      </div>
    </Layout>
  )
}

export default DashboarPage
