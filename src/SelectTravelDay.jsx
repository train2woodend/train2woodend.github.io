import React from "react";
import Select from 'react-select'

const SelectTravelDay = (props) => {
  return (
    <div className="mb-3">
      <label for="travelDayInput" class="form-label mb-1">Travel day:</label>
      <Select name="travelDayInput"
        options={props.travelDays}
        onChange={(item) => { props.selectTravelDay(item); }}
        getOptionLabel={(options) => { return options["weekday"]; }}
        getOptionValue={(options) => { return options["id"]; }}
        value={props.selected || ''}
      />
    </div>
  )
}

export default SelectTravelDay;
