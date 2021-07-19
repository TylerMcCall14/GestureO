import React, {useState, createContext} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    // HOLDS THE COMPLETE LIST OF CURRENT TASKS
    const [taskItems, setTaskItems] = useState([])

    return(
        <DataContext.Provider value={[taskItems, setTaskItems]}>
            {props.children}
        </DataContext.Provider>
    )
}