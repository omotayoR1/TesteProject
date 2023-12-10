import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const Select = ({data, open, value, setOpen, setValue})=> {
    return (
      <DropDownPicker 
      items={data} 
      open={open}
      value={value}
      setOpen={setOpen}
      setValue={(val)=>setValue()}
      />
    )
}

export default Select
