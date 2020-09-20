import React, { useContext } from 'react';
import { StudentContext } from "./StudentContext";

export default function CallStudent() {
    var studentCxt = useContext(StudentContext);

    return (
        <>
            <button onClick={ () => studentCxt.setCurrentStudent("天尊杨戬") }>福冈县</button>
            <button onClick={ () => studentCxt.setCurrentStudent("天山新泰罗") }>东京府</button>
            <button onClick={ () => studentCxt.setCurrentStudent("挺甜一郎") }>岩手县</button>
        </>
    )
};