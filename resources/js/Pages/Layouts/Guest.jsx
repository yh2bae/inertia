import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Guest({children, title}) {
    const { flash } = usePage().props

    flash.type && toast[flash.type](flash.message,
        {
            style: {
                border: '1px solid #198754',
                padding: '16px',
                color: '#198754',
              },
        });

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={`${title} | Belajar Inertia`} />
            <div className="col-md-4">
                <Toaster/>
                {children}
            </div>
        </div>
    );
}
