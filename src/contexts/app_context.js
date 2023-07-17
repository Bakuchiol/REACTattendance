//  step one import context
import { useState, createContext } from "react";

// step 2 create context - this creates our context
export const AppContext = createContext()

// step 3 make provider - function to use (provide context) throughout entire app
const AppContextProvider = (props) => {
    // step 4 - bring in states we are making global
    const [learners, setLearners] = useState([]);

    return(
        <AppContext.Provider value={{
            learners,
            setLearners,
        }}>

        {/* passes down the value to all children of the provider */}
        {props.children}

        </AppContext.Provider>
    )
}

// step 5 export the provider
export default AppContextProvider