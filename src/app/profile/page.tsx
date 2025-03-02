"use client"; // Necesario porque usa un hook de React

import { useSearchParams } from 'next/navigation';

export default function Page() {
    
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Obtiene el parámetro "name"

    return (
        <div>
            <h1>PROFILE { id } --</h1>
        </div>
    )
}