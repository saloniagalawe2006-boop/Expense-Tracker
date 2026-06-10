import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

const monthlyData = [
    { month: 'Jan', spent: 2800, income: 8500 },
    { month: 'Feb', spent: 3100, income: 8500 },
    { month: 'Mar', spent: 2600, income: 8500 },
    { month: 'Apr', spent: 3400, income: 8500 },
    { month: 'May', spent: 2900, income: 8500 },
    { month: 'Jun', spent: 3240, income: 8500 },
]

const categoryData = [
    { name: 'Food', value: 1200, color: '#7c6dff' },
    { name: 'Transport', value: 480, color: '#00d68f' },
    { name: 'Shopping', value: 680, color: '#ff4d6d' },
    { name: 'Bills', value: 540, color: '#ffb300' },
    { name: 'Other', value: 340, color: '#38b6ff' },
]

const recentTransactions = [
    { id: 1, name: 'Swiggy Order', category: 'Food', amount: -320, date: 'Today', icon: '🍔' },
    { id: 2, name: 'Salary Credit', category: 'Income', amount: +8500, date: 'Jun 1', icon: '💰' },
    { id: 3, name: 'Uber Ride', category: 'Transport', amount: -180, date: 'Jun 3', icon: '🚗' },
    { id: 4, name: 'Amazon Order', category: 'Shopping', amount: -650, date: 'Jun 4', icon: '📦' },
    { id: 5, name: 'Electricity Bill', category: 'Bills', amount: -540, date: 'Jun 5', icon: '⚡' },
]

function Dashboard() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <div style={{ minHeight: '100vh', background: '#080a0f', color: '#f0f3ff', fontFamily: 'sans-serif' }}>

            {/* Navbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0e1117' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '32px', height: '32px', background: '#7c6dff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '14px' }}>F</div>
                    <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Fina</span>
                </div>
                <div style={{ color: '#8892aa', fontSize: '0.9rem' }}>
                    Welcome back, <strong style={{ color: '#f0f3ff' }}>Saloni</strong> 👋
                </div>
                <button onClick={() => navigate('/')} style={{ background: 'rgba(255,77,109,0.1)', color: '#ff4d6d', border: '1px solid rgba(255,77,109,0.2)', borderRadius: '8px', padding: '0.4rem 1rem', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
                    Logout
                </button>
            </div>

            <div style={{ padding: '2rem' }}>

                {/* Stats Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        { label: 'Total Balance', value: '$24,850', change: '+$580 this month', color: '#f0f3ff', changeColor: '#00d68f', icon: '💳' },
                        { label: 'Monthly Income', value: '$8,500', change: 'Salary + Freelance', color: '#00d68f', changeColor: '#50596e', icon: '💰' },
                        { label: 'Monthly Spent', value: '$3,240', change: '↑ 12% vs last month', color: '#ff4d6d', changeColor: '#ff4d6d', icon: '💸' },
                        { label: 'Savings Rate', value: '61.9%', change: '↑ 4.2% improvement', color: '#7c6dff', changeColor: '#00d68f', icon: '🎯' },
                    ].map(stat => (
                        <div key={stat.label} style={{ background: '#161b26', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#50596e' }}>{stat.label}</div>
                                <span style={{ fontSize: '1.2rem' }}>{stat.icon}</span>
                            </div>
                            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: stat.color, letterSpacing: '-0.5px' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.75rem', color: stat.changeColor, marginTop: '0.3rem', fontWeight: '600' }}>{stat.change}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {['overview', 'transactions'].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', background: activeTab === tab ? '#7c6dff' : '#161b26', color: activeTab === tab ? '#fff' : '#8892aa', border: '1px solid rgba(255,255,255,0.08)' }}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {activeTab === 'overview' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

                        {/* Bar Chart */}
                        <div style={{ background: '#161b26', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
                            <div style={{ fontWeight: '700', marginBottom: '1rem' }}>Monthly Overview</div>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={monthlyData}>
                                    <XAxis dataKey="month" stroke="#50596e" fontSize={12} />
                                    <YAxis stroke="#50596e" fontSize={12} />
                                    <Tooltip contentStyle={{ background: '#1c2233', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f0f3ff' }} />
                                    <Bar dataKey="income" fill="#00d68f" radius={[4, 4, 0, 0]} opacity={0.4} />
                                    <Bar dataKey="spent" fill="#7c6dff" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Pie Chart */}
                        <div style={{ background: '#161b26', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
                            <div style={{ fontWeight: '700', marginBottom: '1rem' }}>Spending by Category</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <ResponsiveContainer width="55%" height={220}>
                                    <PieChart>
                                        <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value">
                                            {categoryData.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ background: '#1c2233', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f0f3ff' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {categoryData.map(cat => (
                                        <div key={cat.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color, flexShrink: 0 }}></div>
                                            <span style={{ color: '#8892aa' }}>{cat.name}</span>
                                            <span style={{ color: '#f0f3ff', fontWeight: '600', marginLeft: 'auto' }}>${cat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Line Chart */}
                        <div style={{ background: '#161b26', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', gridColumn: 'span 2' }}>
                            <div style={{ fontWeight: '700', marginBottom: '1rem' }}>Spending Trend</div>
                            <ResponsiveContainer width="100%" height={180}>
                                <LineChart data={monthlyData}>
                                    <XAxis dataKey="month" stroke="#50596e" fontSize={12} />
                                    <YAxis stroke="#50596e" fontSize={12} />
                                    <Tooltip contentStyle={{ background: '#1c2233', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f0f3ff' }} />
                                    <Line type="monotone" dataKey="spent" stroke="#7c6dff" strokeWidth={2} dot={{ fill: '#7c6dff', r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                )}

                {activeTab === 'transactions' && (
                    <div style={{ background: '#161b26', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
                        <div style={{ fontWeight: '700', marginBottom: '1rem' }}>Recent Transactions</div>
                        {recentTransactions.map(txn => (
                            <div key={txn.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#1c2233', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>{txn.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{txn.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#50596e', marginTop: '2px' }}>{txn.category} · {txn.date}</div>
                                    </div>
                                </div>
                                <div style={{ fontWeight: '700', color: txn.amount > 0 ? '#00d68f' : '#ff4d6d', fontSize: '0.95rem' }}>
                                    {txn.amount > 0 ? '+' : ''}${Math.abs(txn.amount)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Dashboard