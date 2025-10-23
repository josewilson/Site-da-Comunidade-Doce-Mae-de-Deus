import { memo } from 'react'

function Header() {
  return (
    <header className="py-3 bg-light border-bottom">
      <div className="container d-flex align-items-center">
        <img src="/logo.png" alt="Comunidade Doce Mãe de Deus" width={64} height={64} className="me-3 rounded-circle border border-secondary" decoding="async" fetchPriority="high" />
        <div>
          <h1 className="h3 mb-0">Comunidade Doce Mãe de Deus</h1>
          <p className="text-muted mb-0">A cruz é para nós como o sol</p>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
