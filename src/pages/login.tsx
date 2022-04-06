import { NextPage } from 'next'
import Link from 'next/link'

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = (props) => {
  return (
    <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <a className="text-2xl font-semibold flex justify-center items-center mb-4 lg:mb-5">
        <img
          src="images/logo_sigfas.png"
          className="h-10 mr-4"
          alt="Windster Logo"
        />
      </a>

      <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Entrar no sistema
          </h2>
          <form className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Seu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Sua senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
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
                  required
                />
              </div>
              <div className="text-sm ml-3">
                <label className="font-medium text-gray-900">Lembrar me</label>
              </div>

              <Link href="/recover" passHref>
                <a className="text-sm text-blue-600 hover:underline ml-auto">
                  recuperar password?
                </a>
              </Link>
            </div>

            <Link href="/dashboard" passHref>
              <button
                type="button"
                className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Entrar em sua conta
              </button>
            </Link>

            <div className="text-sm font-medium text-gray-500">
              Não tem cadastro?{' '}
              <a className="text-blue-600 hover:underline">Criar uma conta</a>
            </div>
          </form>
        </div>
      </div>

      <a className="text-2xl font-semibold flex justify-center items-center mb-4 lg:mb-5">
        <img
          src="images/logo-eq-wp.png"
          className="h-8 mr-4 m-4"
          alt="Windster Logo"
        />
      </a>
    </div>
  )
}

export default LoginPage
