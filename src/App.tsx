import { useEffect, useReducer } from "react";
import axios from "axios";
import { PhoneList } from "./components/phone_list";
import { initialState } from "./context/state";
import { reducer } from "./context/reducer";
import { PhoneItemContext } from "./context/context";
import { Types } from "./types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:4000/contacts").then((res) => {
      dispatch({ type: Types.SET_CONTACTS, payload: res.data });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EB88D1] to-[#6FCCE8]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-[#6FCCE8] text-center mb-8 font-serif tracking-wide">
          Phone Book
        </h1>
        <PhoneItemContext.Provider value={{ state, dispatch }}>
          <PhoneList />
        </PhoneItemContext.Provider>
      </div>
    </div>
  );
}

export default App;