import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = (props) => {

    const userData = {
        name: 'John Doe',
        email: 'John@gamil.com',
        age: 30,
        city: 'New York',
    }

    return (
        <div>
            <DataContext.Provider value={userData}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext