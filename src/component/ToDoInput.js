import { View,TouchableOpacity,TextInput, Text } from 'react-native'
import React, {useState} from 'react'

export default function ToDoInput(){

  const [value, setValue]= useState("");

  const TextChange = (text)=> {
    setValue(text);
  };


  return (

    <View>
      <View>
        <TextInput placeholder='Add Task...'TextChange
        = {TextChange}/>
      </View>
      <TouchableOpacity
      onpress={() =>{ alert("Task Added.")}}
      >
      <Text>Submit</Text>
      </TouchableOpacity>
    </View>
    
  );

}