// src/pages/Login.jsx

// Link = navigate without reload (for text links)
// useNavigate = navigate programmatically inside a button click
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    // useNavigate gives us a function called "navigate"
    // Calling navigate('/dashboard') sends user to the dashboard
    // Think of it as: "when I'm ready, take me to this route"
    const navigate = useNavigate()

    // This function runs when the Sign In button is clicked
    // Right now it just navigates. Later we'll add real login logic here.
    function handleLogin() {
        // In the future this will:
        // 1. Read email and password from input fields
        // 2. Send them to the backend
        // 3. Get a token back
        // 4. THEN navigate to dashboard
        // For now, we go straight to dashboard
        navigate('/dashboard')
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
                    Welcome back 👋
                </h2>
                <p style={{ color: '#8892aa', marginBottom: '2rem' }}>
                    Sign in to your Fina account
                </p>

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

                {/* 
          onClick={handleLogin} means:
          "When this button is clicked, run the handleLogin function"
          handleLogin() calls navigate('/dashboard')
        */}
                <button
                    onClick={handleLogin}
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
                    Sign In
                </button>

                <p style={{ textAlign: 'center', color: '#8892aa', fontSize: '0.9rem' }}>
                    Don't have an account?{' '}
                    {/* Link instead of <a href> — no page reload */}
                    <Link
                        to="/register"
                        style={{ color: '#7c6dff', fontWeight: '600', textDecoration: 'none' }}
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login