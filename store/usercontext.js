import { createContext, useContext, useState } from "react";


const UserContext = createContext({
    users: {},
    setUsers: (user) => {}
});


export function UserContextProvider(props) {
    const [users, setUsers] = useState({});
    const context = {
        users: users,
        setUsers: setUsers,
    };


    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContext;