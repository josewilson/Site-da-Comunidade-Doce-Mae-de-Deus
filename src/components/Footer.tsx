import { memo } from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-5 py-4 border-top bg-body-tertiary">
      <div className="container text-center text-muted">
        <p className="mb-1">© {year} Comunidade Doce Mãe de Deus</p>
        <p className="mb-0">
          Contato: <a href="mailto:contato@docemaededeus.org">contato@docemaededeus.org</a>
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
