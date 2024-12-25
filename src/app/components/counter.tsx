'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const fetchRandomNumbers = async () => {
    const response = await fetch("https://www.random.org/integers/?num=1&min=100&max=1000&col=1&base=10&format=plain&rnd=new", {
        cache: 'no-store'
    });
    const data = await response.text();
    return [parseInt(data.trim())];
};

export default function Counter() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const getNewNumber = async () => {
            const newNumbers = await fetchRandomNumbers();
            setNumbers(newNumbers);
        };
        getNewNumber();
    }, [pathname]); // Re-run effect when pathname changes

    return (
        <div>
            {numbers}
        </div>
    );
}
