function Pix() {
  const pixKey = 'SUA_CHAVE_PIX_AQUI' // TODO: substituir

  function copyKey() {
    navigator.clipboard?.writeText(pixKey)
  }

  return (
    <section>
      <h2 className="h3">Doação via PIX</h2>
      <p className="text-muted">
        Use a chave PIX abaixo para realizar sua doação.
        Para QR Code dinâmico/EMV, integraremos um provedor posteriormente.
      </p>
      <div className="card shadow-sm" style={{maxWidth: 560}}>
        <div className="card-body">
          <label className="form-label">Chave PIX</label>
          <div className="input-group mb-3">
            <input className="form-control" readOnly value={pixKey} />
            <button type="button" className="btn btn-outline-secondary" onClick={copyKey}>Copiar</button>
          </div>
          <div className="text-center">
            <img
              className="img-fluid rounded border"
              src="https://placehold.co/240x240?text=PIX+QR"
              alt="QR Code PIX"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pix
