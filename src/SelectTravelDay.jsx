import React from "react";
import Select from 'react-select'

const SelectTravelDay = (props) => {
  const [ selected, setSelected ] = React.useState();

  React.useEffect(() => {
    setSelected(props.selected);
    //console.log(selected);
  }, []);

  return (
    <Select className=""
      options={props.travelDays}
      //cacheOptions={props.travelDays}
      onChange={(item) => { props.selectTravelDay(item); }}
      getOptionLabel={(options) => { return options["weekday"]; }}
      getOptionValue={(options) => { return options["id"]; }}

      //key={`my_unique_select_key__${selected}`}
      //value={selected || ''}
    />
  )
}

export default SelectTravelDay;
