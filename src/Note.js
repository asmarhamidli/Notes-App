import React from "react";
import { Card, CardTitle, CardText, Button, Col} from "reactstrap";

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div>
      <Card body className="mt-2">
            <CardTitle className='text-center mb-3' tag="h5">Note</CardTitle>
            <CardText className="mb-4">
                {text}
            </CardText>
            <CardText>{date}</CardText>
            <Button onClick={() => handleDeleteNote(id)} color="danger"> Delete </Button>
          </Card>
    </div>
  );
};

export default Note;
