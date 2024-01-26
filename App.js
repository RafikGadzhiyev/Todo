import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import {View, Text, StyleSheet, Platform, TextInput, Button, SafeAreaView} from 'react-native';
import {TodoList} from "./components/TodoList";


export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos(
      (todos) => {
        return [
          ...todos,
          {
            key: Math.random(), // TODO: fix,
            title: todo,
            subTodos: [],
          }
        ]
      }
    )

    setTodo('')
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style="auto" />

      <Text style={styles.appTitle}>Welcome to the ToDo app</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          placeholder='Write your todo'
          value={todo}
          onChangeText={updatedText => setTodo(updatedText)}
        />

        <Button
          onPress={addTodo}
          style={styles.formButton}
          title='Add'
        />
      </View>

        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    appContainer: {
      ...Platform.select(
        {
          ios: {
            paddingTop: 60,
          },
          android: {
            paddingTop: 30,
          }
        }
      )
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },

    appTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    formInput: {
      borderWidth: 2,
      borderColor: "#4AA7F9",
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 2.5,
    },
    formButton: {
      textTransform: 'capitalize',
    }
  }
)
