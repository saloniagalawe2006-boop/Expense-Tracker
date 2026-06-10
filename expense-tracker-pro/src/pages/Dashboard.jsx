// src/pages/Dashboard.jsx

function Dashboard() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#080a0f',
            color: '#f0f3ff',
            fontFamily: 'sans-serif',
            padding: '2rem'
        }}>
            {/* Top bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2.5rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{
                        width: '32px', height: '32px', background: '#7c6dff',
                        borderRadius: '8px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontWeight: '800', fontSize: '14px'
                    }}>F</div>
                    <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Fina</span>
                </div>
                <div style={{ color: '#8892aa', fontSize: '0.9rem' }}>
                    Welcome back, <strong style={{ color: '#f0f3ff' }}>Saloni</strong> 👋
                </div>
            </div>

            {/* Stats cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {[
                    { label: 'Total Balance', value: '$24,850', change: '+$580 this month', color: '#f0f3ff', changeColor: '#00d68f' },
                    { label: 'Monthly Income', value: '$8,500', change: 'Salary + Freelance', color: '#00d68f', changeColor: '#50596e' },
                    { label: 'Monthly Spent', value: '$3,240', change: '↑ 12% vs last month', color: '#ff4d6d', changeColor: '#ff4d6d' },
                    { label: 'Savings Rate', value: '61.9%', change: '↑ 4.2% improvement', color: '#7c6dff', changeColor: '#00d68f' },
                ].map((stat) => (
                    <div key={stat.label} style={{
                        background: '#161b26',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '1.5rem'
                    }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#50596e', marginBottom: '0.5rem' }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: stat.color, letterSpacing: '-0.5px' }}>
                            {stat.value}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: stat.changeColor, marginTop: '0.3rem', fontWeight: '600' }}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder for charts */}
            <div style={{
                background: '#161b26',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                color: '#50596e'
            }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <div style={{ fontWeight: '600' }}>Charts will appear here in Stage 7</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>We'll use Recharts to visualize your expenses</div>
            </div>
        </div>
    );
}

export default Dashboard;