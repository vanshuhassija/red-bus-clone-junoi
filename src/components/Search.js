import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";

const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  function interchangeFromTo() {
    const startPoint = from;
    const endPoint = to;
    setFrom(endPoint);
    setTo(startPoint);
  }
  return (
    <Container>
      <div className="m-5 ">
        <InputGroup className="mb-3 flex align-items-center">
          <Form.Control
            placeholder="From"
            aria-label="Text input with dropdown button"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
          <BsArrowLeftRight onClick={interchangeFromTo} className="mx-3" />
          <Form.Control
            placeholder="To"
            value={to}
            aria-label="Text input with dropdown button"
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
          <Form.Control
            placeholder="Date"
            type="date"
            aria-label="Text input with dropdown button"
          />
          <Button variant="danger">Search Buses</Button>
        </InputGroup>
      </div>
    </Container>
  );
};

export default Search;
