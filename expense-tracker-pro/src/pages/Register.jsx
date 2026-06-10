// src/pages/Register.jsx

import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    // This runs when "Create Account" button is clicked
    // Later: collect form data → send to backend → navigate to login
    // Now: just goes straight to login page
    function handleRegister() {
        navigate('/login')
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: '#080a0f',
            color: '#f0f3ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                background: '#161b26',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '3rem',
                width: '100%',
                maxWidth: '420px'
            }}>
                <h2 style={{ marginBottom: '0.5rem', fontSize: '1.8rem' }}>
                    Create account ✨
                </h2>
                <p style={{ color: '#8892aa', marginBottom: '2rem' }}>
                    Start your financial journey with Fina
                </p>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '0.4rem',
                        fontSize: '0.85rem',
                        color: '#8892aa'
                    }}>
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Saloni Agalawe"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            background: '#0e1117',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            color: '#f0f3ff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '0.4rem',
                        fontSize: '0.85rem',
                        color: '#8892aa'
                    }}>
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            background: '#0e1117',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            color: '#f0f3ff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '0.4rem',
                        fontSize: '0.85rem',
                        color: '#8892aa'
                    }}>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            background: '#0e1117',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            color: '#f0f3ff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <button
                    onClick={handleRegister}
                    style={{
                        width: '100%',
                        padding: '0.85rem',
                        background: '#7c6dff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        marginBottom: '1.5rem'
                    }}
                >
                    Create Account
                </button>

                <p style={{ textAlign: 'center', color: '#8892aa', fontSize: '0.9rem' }}>
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        style={{ color: '#7c6dff', fontWeight: '600', textDecoration: 'none' }}
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register