import React from "react";
import Note from "./Note";
import AddNewNote from "./AddNote";
import { Card, Row, Col } from "reactstrap";

const NoteLists = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div>

        <Col>
          <Row sm="3">
            {notes.map((note) => (
              <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
              />
            ))}
            <AddNewNote handleAddNote={handleAddNote} />
          </Row>
        </Col>

    </div>
  );
};

export default NoteLists;
