import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import mypic from '../../public/images/logoConecte.png'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { NextRouter, useRouter } from 'next/dist/client/router'

interface LoginPageProps {}

type FormValues = {
  email: string
  password: string
}

const LoginPage: NextPage<LoginPageProps> = (props) => {
  const router : NextRouter = useRouter();
  const { register, handleSubmit } = useForm<FormValues>()

  async function onSubmit(data: FormValues) : Promise<void>{
    
    const { email, password} = data;

    try{


      router.push('/dashboard')

    } catch(error){

      console.log(error);
      alert("Não foi possível efetuar login !");

    }

  }

  return (
    <>
      <Head>
        <title>SIGPET</title>
      </Head>
      <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <a className="text-2xl font-semibold flex justify-center items-center mb-4 lg:mb-5">
        <Image
          src={mypic}
          alt="Picture of the author"
          width="300px"
          height="200px"
        />
        </a>

        <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className="p-6 sm:p-8 lg:p-16 space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-amber-700">
              Entrar no sistema
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Seu email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  {...register('email')}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Sua senha
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                  {...register('password')}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ml-3">
                  <label className="font-medium text-gray-900">Lembrar me</label>
                </div>

                <Link href="/recover" passHref>
                  <a className="text-sm text-amber-700 hover:underline ml-auto">
                    recuperar password?
                  </a>
                </Link>
              </div>

              <button
                type="submit"
                className="text-white bg-amber-700 hover:bg-amber-500 focus:ring-4 focus:bg-amber-500font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Entrar em sua conta
              </button>

              <div className="text-sm font-medium text-gray-500">
                Não tem cadastro?{' '}
                <a className="text-amber-700 hover:underline">Criar uma conta</a>
              </div>
            </form>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default LoginPage
