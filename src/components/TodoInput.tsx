import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask(task: string) {
    //DONE - Call addTask and clean input value 
    addTask(task)
    setTask('')
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        //DONE - use value, onChangeText and onSubmitEditing props
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={() => handleAddNewTask(task)}
      />
      <TouchableOpacity
        //DONE - onPress prop
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={() => handleAddNewTask(task)}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#b5b5b5',
    color: '#000',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});