import React, { useState } from 'react';
import useBackend from "./useBackend";

export default function Battleship() {
    const [name, setName] = useState("森下下士");
    const info = useBackend(name);

    console.log(name);
    console.log(info);

    return (
        <div>
            <p>{ info }</p>
            <button onClick={ () => setName("天尊杨戬") }>天尊杨戬</button>
            <button onClick={ () => setName("天山新泰罗") }>天山新泰罗</button>
            <button onClick={ () => setName("挺甜一郎") }>挺甜一郎</button>
        </div>
    );
}