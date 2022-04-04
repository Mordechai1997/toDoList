import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useContext } from "react";
import { ListContext } from "./App";
import { Link } from "react-router-dom";
export function ToDo({ index }) {
  const [input, setInput] = useState(false);
  const [note, setNote] = useState("");
  const [items, dispatch] = useContext(ListContext);
  return (
    <>
      <ListGroup.Item className="text-center d-flex justify-content-between">
        <div>
          <Button
            className="m-2" 
            variant="danger"
            onClick={() => dispatch({ type: "remove", index })}
          >
            X
          </Button>
          <Button
            className="m-2"
            variant="success"
            onClick={() => dispatch({ type: "completed", index , item:items[index]})}
          >
            v
          </Button>
        </div>
        <Link to="/todo" state={{ index: index }} style={{textDecoration: 'none'}}>
          <div
            style={
              items[index].complit
                ? {
                    textDecorationLine: "line-through",
                    color: "#AAA"
                  }
                : { color: "#000" }
            }
          >
            <p>
              <b>Title:</b> {items[index].input}
            </p>

            {items[index].note && (
              <p>
                <br />
                <b>Note:</b> {items[index].note}
              </p>
            )}
          </div>
        </Link>

        <Button
          className="m-2"
          variant="info"
          onClick={() => {
            setNote(items[index].note);
            setInput(!input);
          }}
        >
          <svg
            style={{ fill: "#fff" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </Button>
      </ListGroup.Item>
      {input && (
        <Form
          className="m-2 d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            const value = note;
            setInput(!input);
            dispatch({ type: "note", index, item:{note: value.trim() ,...items[index]}});
          }}
        >
          <Form.Control
            value={note}
            onChange={(e) => setNote(e.target.value)}
            type="text"
          />
          <Button className="m-1" type="submit">
            {items[index].note ? "CHANGE" : "ADD"}
          </Button>
        </Form>
      )}
    </>
  );
}
