import { useState } from 'react'

function RegisterForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [phoneVerified, setPhoneVerified] = useState(false)

  const handleVerifyPhone = () => {
    if (phone.trim()) {
      setPhoneVerified(true)
      alert('Phone number verified!')
    } else {
      alert('Enter a phone number before verification.')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!phoneVerified) {
      alert('Please verify your phone number before submitting.')
      return
    }
    alert(`Registered ${firstName} ${lastName} with ${email}`)
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: '520px' }}>
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <div className="input-group">
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setPhoneVerified(false)
                  }}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleVerifyPhone}
                >
                  Verify
                </button>
              </div>
              {phoneVerified && <div className="form-text text-success">Phone verified</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                id="location"
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={!phoneVerified}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
