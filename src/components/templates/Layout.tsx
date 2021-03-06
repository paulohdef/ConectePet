import Content from './Content'
import Footer from './Footer'
import NavbarDashboard from './Navbar-dashboard'
import SidebarDashboard from './Sidebar-dashboard'

interface LayoutProps {
  titulo: string
  subTitulo: string
  children?: any
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <NavbarDashboard />
      <div className="flex overflow-hidden bg-white pt-16">
        <SidebarDashboard />

        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <Content> {props.children} </Content>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
