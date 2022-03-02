import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Search = ({ handleSearchNote }) => {
  return (
    <div>
      <FormGroup className="mb-4">
        <Label for="exampleSearch"></Label>
        <Input
          onChange={(event) => handleSearchNote(event.target.value)}
          id="exampleSearch"
          name="search"
          placeholder="Search Note"
          type="search"
        />
      </FormGroup>
    </div>
  );
};

export default Search;
