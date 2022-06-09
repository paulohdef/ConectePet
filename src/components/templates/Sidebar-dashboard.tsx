// @flow
import * as React from 'react'
import {
  IconeAjuda,
  IconeVacinas,
  IconeHome,
  IconeCadastro,
  IconeDashboard,
  IconeLogin,
  IconeLogout,
  IconeSearch,
  IconeUser,
} from '../icons'
import MenuItem from './MenuItem'

interface SidebarProps {}

const SidebarDashboard: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">


                <MenuItem
                  url="/dashboard"
                  texto="Início"
                  icone={IconeHome}
                />

                <MenuItem
                  url="/vacinas"
                  texto="Vacinas"
                  icone={IconeVacinas}
                />


                <MenuItem
                  url="/cadastro"
                  texto="Cadastro"
                  icone={IconeCadastro}
                />

                <MenuItem
                  url="/tutores"
                  texto="Tutores"
                  icone={IconeLogin}
                />

                <MenuItem
                  url="/login"
                  texto=" Sair do sistema"
                  icone={IconeLogout}
                />
              </ul>

              <ul className="space-y-2 pb-2">
                <MenuItem url="/config" texto="Ajuda" icone={IconeAjuda} />
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
    </>
  )
}

export default SidebarDashboard
