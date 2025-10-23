import './App.css'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Home'))
const QuemSomos = lazy(() => import('./pages/QuemSomos'))
const Eventos = lazy(() => import('./pages/Eventos'))
const Doacao = lazy(() => import('./pages/Doacao'))
const CadastroDoacao = lazy(() => import('./pages/CadastroDoacao'))
const Pix = lazy(() => import('./pages/Pix'))
const Boleto = lazy(() => import('./pages/Boleto'))
const AmigoEvangelizador = lazy(() => import('./pages/AmigoEvangelizador'))
import Header from './components/Header'
import Footer from './components/Footer'
import { loadBootstrap } from './utils/bootstrap'

function App() {
  return (
    <HashRouter>
      <Header />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src="/logo.png" alt="CDMD" width={36} height={36} className="d-inline-block align-text-top me-2 rounded-circle border border-light" />
            <span className="d-sm-none">CDMD</span>
            <span className="d-none d-sm-inline">Comunidade Doce Mãe de Deus</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation" onClick={() => void loadBootstrap()}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Início</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/quem-somos" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Quem Somos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/amigo-evangelizador" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Amigo Evangelizador</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/eventos" className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>Eventos</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Doação</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/doacao" className={({isActive}) => `dropdown-item${isActive ? ' active' : ''}`}>Opções</NavLink></li>
                  <li><NavLink to="/cadastro-doacao" className={({isActive}) => `dropdown-item${isActive ? ' active' : ''}`}>Cadastro</NavLink></li>
                  <li><NavLink to="/pix" className={({isActive}) => `dropdown-item${isActive ? ' active' : ''}`}>PIX</NavLink></li>
                  <li><NavLink to="/boleto" className={({isActive}) => `dropdown-item${isActive ? ' active' : ''}`}>Boleto</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container my-4">
        <Suspense fallback={<div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Carregando...</span></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/cadastro-doacao" element={<CadastroDoacao />} />
            <Route path="/pix" element={<Pix />} />
            <Route path="/boleto" element={<Boleto />} />
            <Route path="/amigo-evangelizador" element={<AmigoEvangelizador />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
