import React from "react";
import Select from 'react-select'

const SelectDirection = (props) => {
  return (
    <Select className=""
      options={props.directions}
      onChange={(item) => { props.selectDirection(item); }}
      getOptionLabel={(options) => { return "From " + options["from"] + " to " + options["to"]; }}
      getOptionValue={(options) => { return options["id"]; }}
    />
  )
}

export default SelectDirection;
