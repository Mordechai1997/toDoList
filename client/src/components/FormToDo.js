import React, { useState, useContext } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { ToDo } from "./ToDo";
import { ListContext } from "./App";

export default function FromToDo() {
  const [items, dispatch] = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  const change = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Form className="m-5 d-grid gap-2" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          value={input}
          onChange={change}
          placeholder="Disabled input"
          required
        />

        <Button
          className="mt-2"
          variant="warning"
          onClick={() => dispatch({ type: "add", input: input.trim() , index:items.length})}
          type="submit"
        >
          Submit
        </Button>
      </Form>

      <ListGroup>
        {items
          .filter((name) => name.input.includes(input))
          .map((item, index) => (
            <ToDo key={index} index={index} />
          ))}
      </ListGroup>
    </div>
  );
}
