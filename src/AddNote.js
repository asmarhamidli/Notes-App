import React, { useState } from 'react';
import {Col, Card, CardTitle, CardText, Input, Button} from "reactstrap";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit =200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0){
      setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }

  }

  return (
    <div>
      <Card body className="mt-2">
            <CardTitle className='text-center' tag="h5">New Note</CardTitle>
            <Input
                    type="textarea"
                    placeholder='Add new note'
                    value={noteText}
                    onChange={handleChange}
                />
            <CardText>{characterLimit-noteText.length} Remaining</CardText>
            <Button color="success" onClick={handleSaveClick}>Save</Button>
          </Card>
    </div>
  )
}

export default AddNote;