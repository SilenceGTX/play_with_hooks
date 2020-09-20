import React, {useState} from 'react';

export default function UpAndDown() {
    const [comment, setComment] = useState({"up":0, "down":0});

    const handleUp = () => {
        setComment({...comment, up:comment.up+1})
    };

    const handleDown = () => {
        setComment({...comment, down:comment.down+1})
    };

    return (
        <>
            <p>{ comment.up }</p>
            <button onClick={ handleUp }>+很有精神</button>
            <p>{ comment.down }</p>
            <button onClick={ handleDown }>-听不见</button>
        </>
    )
};