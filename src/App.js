
import { createContext, useReducer } from 'react';
import './App.css';
import CustomHook from './components/CustomHook/CustomHook';
import CustomHookTwo from './components/CustomHook/CustomHookTwo';
import UseContext from './components/UseContext/UseContext';
import Clock from './components/UseEffect/Clock';
import FetchData from './components/UseEffect/FetchData';
import UseEffect from './components/UseEffect/UseEffect';
import UseMemo from './components/useMemo/UseMemo';
import UseReducer from './components/UseReducer/UseReducer';
import UseRef from './components/UseRef/UseRef';
import UseState from './components/UseState/UseState';


export const countContext = createContext()

export const nameContext = createContext();
export const workContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;      
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
        <UseState/>
        <UseEffect/>
        <Clock/>
        <FetchData/>
       <nameContext.Provider value="Alamgir Hossain">
         <workContext.Provider value="Web Developer">
            <UseContext/>
         </workContext.Provider>
       </nameContext.Provider>
      <countContext.Provider value={[count, dispatch]}>
        <UseReducer/>
      </countContext.Provider>
      <UseMemo/>
      <UseRef/>
      <CustomHook/>
      <CustomHookTwo/>
    </div>
  );
}

export default App;
