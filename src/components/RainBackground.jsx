import { useState, useEffect } from 'react'

export const RainBackground = () => {
    const [rains, setRains] = useState([])

    useEffect(() => {
        generateRains();

        const handleResize = () => {
            generateRains();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const generateRains = () => {
        const numRains = 100
        const newRains = []
        
        for (let i = 0; i < numRains; i++) {
            const duration = Math.random() * 4 + 9;

            newRains.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 140 - 20,
                y: -(Math.random() * 25 + 5),
                delay: -(Math.random() * duration),
                animationDuration: duration,
            })
        }
        setRains(newRains);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {rains.map(rain => (
                <div key={rain.id} className="rain animate-rain" style={{
                    width: rain.size * 20 + "px",
                    height: rain.size * 0.5 + "px",
                    left: rain.x + "%",
                    top: rain.y + "%",
                    animationDelay: rain.delay + "s",
                    animationDuration: rain.animationDuration + "s",
                }}/>
            ))}
        </div>
    )
}