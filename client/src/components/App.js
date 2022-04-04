import React from "react";
import FormToDo from "./FormToDo";
import useList from "./useList";
import { Details } from "./Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect} from 'react'

export const ListContext = React.createContext(null);

export default function App() {

  const [items, dispatch] = useList();

  useEffect(()=>{
    dispatch({ type: "start"})
   console.log('useEffect')
  },[])
  
  return (
    <ListContext.Provider value={[items, dispatch]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormToDo />} />
          <Route path="/todo" element={<Details authed={true} />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
}
