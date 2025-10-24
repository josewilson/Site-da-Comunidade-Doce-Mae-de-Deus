import { Link, useLocation } from 'react-router-dom'

function titleFromSegment(seg: string) {
  const map: Record<string,string> = {
    '': 'Início',
    'quem-somos': 'Quem Somos',
    'eventos': 'Eventos',
    'doacao': 'Doação',
    'cadastro-doacao': 'Cadastro de Doação',
    'pix': 'PIX',
    'boleto': 'Boleto',
    'amigo-evangelizador': 'Amigo Evangelizador',
    'politica-de-privacidade': 'Política de Privacidade',
  }
  return map[seg] ?? seg
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const parts = pathname.replace(/^\//,'').split('/')
  const crumbs = parts[0] ? parts : ['']

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb">
        {crumbs.map((seg, idx) => {
          const to = '/' + parts.slice(0, idx + 1).join('/')
          const isLast = idx === crumbs.length - 1
          return (
            <li key={to} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : undefined}>
              {isLast ? (
                titleFromSegment(seg)
              ) : (
                <Link to={to || '/'}>{titleFromSegment(seg)}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

