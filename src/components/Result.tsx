import './Result.css'

type props = {
    word: string
    count: number
}

export function Result({word, count}: props) {
    return (
        <div className="Result">{word}: {count}</div>
    )
}