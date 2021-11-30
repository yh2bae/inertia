import React from 'react'
import App from './Layouts/App';

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4>Dashboard Page</h4>
                    </div>
                    <div className="card-body">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

Dashboard.layout = (page) => <App title="Dashboard" children={page}/>
