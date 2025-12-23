import { useCallback, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const add = useCallback(() => {
        setCount(c => c + 1);
    }, [])
    return (
        <div>
            <p>Лічильнек: {count}</p>
            <button onClick={add}>Тикай</button>
        </div>
    )
}

