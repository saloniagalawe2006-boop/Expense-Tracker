// src/pages/LandingPage.jsx

// Link is React Router's replacement for <a href>
// It navigates WITHOUT reloading the page
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#080a0f',
            color: '#f0f3ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                Welcome to <span style={{ color: '#7c6dff' }}>Fina</span>
            </h1>
            <p style={{ color: '#8892aa', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Smart Expense Tracker by Saloni Agalawe
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>

                {/* 
          Link to="/login" is exactly like <a href="/login">
          BUT it does NOT reload the page
          It just swaps the component React is showing
        */}
                <Link
                    to="/login"
                    style={{
                        background: '#7c6dff',
                        color: '#fff',
                        padding: '0.75rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '700'
                    }}
                >
                    Sign In
                </Link>

                <Link
                    to="/register"
                    style={{
                        border: '1px solid #7c6dff',
                        color: '#7c6dff',
                        padding: '0.75rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '700'
                    }}
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default LandingPage