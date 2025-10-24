function TopBar() {
  return (
    <div className="topbar py-1">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="small">
          <i className="bi bi-telephone me-1"></i>
          <a href="tel:+550000000000">(00) 0000-0000</a>
          <span className="mx-2">|</span>
          <i className="bi bi-envelope me-1"></i>
          <a href="mailto:contato@docemaededeus.org">contato@docemaededeus.org</a>
        </div>
        <div className="d-none d-sm-flex gap-2">
          <a aria-label="Instagram" href="#"><i className="bi bi-instagram"></i></a>
          <a aria-label="YouTube" href="#"><i className="bi bi-youtube"></i></a>
          <a aria-label="Facebook" href="#"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
    </div>
  )
}

export default TopBar

