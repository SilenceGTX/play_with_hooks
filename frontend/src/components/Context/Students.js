import React, { useContext } from 'react';
import { StudentContextProvider } from "./StudentContext";
import StudentCard from "./StudentCard";
import CallStudent from "./CallStudent";

export default function Students(props) {
    return (
        <StudentContextProvider>
            <StudentCard/>
            <CallStudent/>
        </StudentContextProvider>
    );
};
