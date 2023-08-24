import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import { TextInput } from 'react-native'

import styles from './style'

const Form = (props) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if(task.length === 0) {
      alert('Vui long nhap cong viec')
      return false
    }
   props.onAddTask(task)
   setTask('')
   Keyboard.dismiss() //close keyboard
  }
  
  return (
    <View style={styles.addTask}>
      <TextInput 
        style={styles.input} 
        placeholder='Your Task...'
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        onPress={handleAddTask}
      >
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Form