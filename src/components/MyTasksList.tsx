import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            //DONE - use onPress, onLongPress and style props
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              //DONE - use style prop 
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text
              //DONE - use style prop
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 10
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273fad',
    marginRight: 10
  },

  taskText: {
    color: '#fff',
  },
  taskTextDone: {
    color: '#ff0',
    textDecorationLine: 'line-through'
  }
})