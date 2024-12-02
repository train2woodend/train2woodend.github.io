import React from "react";
import Select from 'react-select'

const SelectDirection = (props) => {
  return (
    <div className="mb-3">
      <label for="directionInput" class="form-label mb-1">Direction:</label>
      <Select name="directionInput"
        options={props.directions}
        onChange={(item) => { props.selectDirection(item); }}
        getOptionLabel={(options) => { return "From " + options["from"] + " to " + options["to"]; }}
        getOptionValue={(options) => { return options["id"]; }}
      />
    </div>
  )
}

export default SelectDirection;
