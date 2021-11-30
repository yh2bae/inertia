import Navbar from './../Components/Navbar';
import { Head, usePage } from '@inertiajs/inertia-react';
import toast, { Toaster } from 'react-hot-toast';

export default function App({ children, title }) {
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
        <div>
            <Head title={`${title} | Belajar Inertia`} />
            <Navbar />
            <div className="pt-4">
                <Toaster />
                {children}
            </div>
        </div>
    )
}
