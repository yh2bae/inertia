import React from 'react'
import App from './Layouts/App';

export default function Home() {
    return (
        <>
           <div className="container">
                <div className="card">
                    <div className="card-body">
                        Your new inertia app.
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App title="Home" children={page}/>