import React, { useContext } from 'react';
import { StudentContext } from "./StudentContext";

export default function StudentCard() {
    var studentCxt = useContext(StudentContext);
    console.log(studentCxt);

    return (
        <div>{ studentCxt.currentStudent }</div>
    );
};