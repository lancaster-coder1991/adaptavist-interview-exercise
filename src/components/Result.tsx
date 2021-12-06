import React from 'react';

type props = {
    word: string
}

export function Result({word}: props) {
    return (
        <div id="ResultWrapper">
            <div>{word}</div>
        </div>
    )
}