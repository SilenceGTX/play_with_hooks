import React, {useState, useEffect} from 'react';

export default function AddOn() {
    const [result, setResult] = useState(0);
    const [temp, setTemp] = useState(10);

    const handleClick = (i) => {
        console.log(`按了一下${i}`)
        setResult(result + 1)
    };

    useEffect(() => {
        console.log("刷新了")
        setTemp(temp + result)
    }, [result]);

    console.log(result);
    console.log(temp);

    return (
        <>
            <p>{ result }</p>
            {[...Array(3).keys()].map((element, n) => {
                return (
                    <button key={n} onClick={() => handleClick(element)}>+result</button>
                )
            })}
            
        </>
    )
}