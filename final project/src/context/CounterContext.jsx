import { createContext } from "react";





// in context 2 things : 1- exported variable 2- exported default function variable'sname + provider

export let CounterContext = createContext() ;

export default function CounterContextProvider (){

const [first, setfirst] = useState(0)



    return <CounterContext.Provider value={{first}}>

    </CounterContext.Provider>
}