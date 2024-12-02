import React from "react";
import Select from 'react-select'

const SelectTravelDay = (props) => {
  return (
    <Select className=""
      options={props.travelDays}
      onChange={(item) => { props.selectTravelDay(item); }}
      getOptionLabel={(options) => { return options["weekday"]; }}
      getOptionValue={(options) => { return options["id"]; }}
      value={props.selected || ''}
    />
  )
}

export default SelectTravelDay;
