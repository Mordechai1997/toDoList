import { useLocation, Link } from "react-router-dom";
import React, {  useContext } from "react";
import { ListContext } from "./App";

export function Details(props) {
  const items = useContext(ListContext)[0];
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <p>
        <b>Title: </b>
        {items[state.index].input}
      </p>
      <br />
      {items[state.index].note && (
        <p>
          <b>Note: </b>
          {items[state.index].note}
        </p>
      )}
      <br />
      <Link to="/">GO</Link>
    </>
  );
}
