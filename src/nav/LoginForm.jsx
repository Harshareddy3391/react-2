import { useRef, useState } from 'react'

function LoginForm() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!acceptedTerms) return
    alert(`Login submitted for ${emailRef.current?.value ?? ''}`)
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: '420px' }}>
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                ref={emailRef}
                defaultValue=""
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  ref={passwordRef}
                  defaultValue=""
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="form-check mb-4">
              <input
                id="terms"
                type="checkbox"
                className="form-check-input"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="terms">
                I have read and agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={!acceptedTerms}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
