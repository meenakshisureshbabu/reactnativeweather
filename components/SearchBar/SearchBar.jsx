import React from 'react'
import { s } from './SearchBar.style'
import { View,Text, TextInput } from 'react-native'


function SearchBar({onSubmit}) {
  return (
    <>
    <TextInput onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)} style={s.searchtext} placeholder='Enter City'/>
    </>

  )
}

export default SearchBar