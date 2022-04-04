import { useReducer } from "react";
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../listServices";

export default function useList() {
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        if (action.input){
          addTask({task:action.input ,completed:false ,note:'', index:action.index})
          return state
            ? [...state, { input: action.input, complit: false, note: "" }]
            : { input: action.input, complit: false, note: "" };
        }
        return state;
      case "remove":
        return deleteTask(action.index) ;
      case "completed":
        return updateTask(action.index, action.item) ;
      case "note":
        return updateTask(action.index, action.item) ;
      case "start":
        return getTasks() && state;
      default:
        throw Error("");
    }
  }, []);



return [items, dispatch];

}
