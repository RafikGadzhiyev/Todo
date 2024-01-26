import {FlatList, StyleSheet} from "react-native";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({ todos, setTodos }) => {

	const deleteTodo = (todoKey) => {
		setTodos(
			prevTodos => prevTodos
				.filter(
					prevTodo => prevTodo.key !== todoKey
				)
		)
	}

	return <FlatList
		style={styles.todoList}
		data={todos}
		renderItem={({item}) => <TodoListItem
			item={item}
			deleteTodo={deleteTodo}
		/>}
	/>
}

const styles = StyleSheet.create(
	{
		todoList: {
			marginTop: 20,
			paddingHorizontal: 20,
		}
	}
)
