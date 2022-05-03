// @flow
import * as React from 'react'
import {
  IconeFace,
  IconeGit,
  IconeInsta,
  IconeSocial,
  IconeTwitter,
} from '../icons'
interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div>
      <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Termos e condições
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Politica de privacidade
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Licença
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Politica de registros
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline"
            >
              Contatos
            </a>
          </li>
        </ul>
        <div className="flex sm:justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            {IconeFace}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            {IconeInsta}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            {IconeTwitter}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            {IconeGit}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            {IconeSocial}
          </a>
        </div>
      </footer>
      <p className="text-center text-sm text-gray-500 my-10">
        &copy; 2022{' '}
        <a href="" className="hover:underline" target="_blank">
          ConectePET
        </a>
        . Todos os direitos reservados.
      </p>
    </div>
  )
}

export default Footer
