import React from 'react';

type props = {
    word: string
    count: number
}

export function Result({word, count}: props) {
    return (
        <div id="ResultWrapper">
            <div>{word}: {count}</div>
        </div>
    )
}