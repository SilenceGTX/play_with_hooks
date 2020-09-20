import React, { useState } from 'react';

const StudentContext = React.createContext();

function StudentContextProvider(props) {
    const [currentStudent, setCurrentStudent] = useState(null);

    return (
        <StudentContext.Provider value={{currentStudent:currentStudent, setCurrentStudent:setCurrentStudent}}>
            {props.children}
        </StudentContext.Provider>
    );
}

function StudentContextConsumer(props) {
    return (
        <StudentContext.Consumer>
            {props.children}
        </StudentContext.Consumer>
    );
}

export { StudentContextProvider, StudentContextConsumer, StudentContext };
