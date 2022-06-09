import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import axios from 'axios'
// import { withIronSessionSsr } from 'iron-session/next'
// import ironConfig from '../../utils/iron-config'

export default AddEdit

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async (context: GetServerSidePropsContext) => {
    const user = context.req.session.user
    const id = context.query.id as string

    console.log('meu retorno _id', id)

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_HOST}/centro-custo/${id}`,
      {
        headers: {
          cookie: context.req.headers.cookie as string,
        },
      },
    )

    const centro_custo = response.data

    console.log('retorno no Edit', centro_custo)

    return {
      props: { centro_custo },
    }
  },
  ironConfig,
)
