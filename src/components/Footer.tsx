import { memo } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-5 border-top bg-dark text-light">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center mb-2">
              <img src="/logo.png" alt="CDMD" width={40} height={40} className="rounded-circle me-2 border border-light" />
              <strong>Comunidade Doce Mãe de Deus</strong>
            </div>
            <p className="text-secondary mb-2">A cruz é para nós como o sol.</p>
            <div className="d-flex gap-2">
              <a className="text-light" aria-label="Instagram" href="#"><i className="bi bi-instagram"></i></a>
              <a className="text-light" aria-label="YouTube" href="#"><i className="bi bi-youtube"></i></a>
              <a className="text-light" aria-label="Facebook" href="#"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase small mb-3">Institucional</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/quem-somos">Quem Somos</Link></li>
              <li><Link to="/amigo-evangelizador">Amigo Evangelizador</Link></li>
              <li><Link to="/eventos">Eventos</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase small mb-3">Doações</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/doacao">Opções de Doação</Link></li>
              <li><Link to="/cadastro-doacao">Cadastro</Link></li>
              <li><Link to="/pix">PIX</Link></li>
              <li><Link to="/boleto">Boleto</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="text-uppercase small mb-3">Contato</h6>
            <ul className="list-unstyled text-secondary">
              <li><i className="bi bi-envelope me-2"></i><a className="text-secondary" href="mailto:contato@docemaededeus.org">contato@docemaededeus.org</a></li>
              <li className="mt-1"><i className="bi bi-geo-alt me-2"></i>Endereço, Cidade - UF</li>
              <li className="mt-1"><Link className="text-secondary" to="/politica-de-privacidade">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-3">
        <div className="container d-flex justify-content-between text-secondary small">
          <span>© {year} Comunidade Doce Mãe de Deus</span>
          <span>Feito com ❤️ em React + Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
