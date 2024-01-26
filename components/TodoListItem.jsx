import {Button, StyleSheet, Text, View} from "react-native";

export const TodoListItem = ({ item, deleteTodo }) => {
	return <View
		style={styles.todoItem}
	>
		<Text
			style={styles.todoText}
		>
			{
				item.title
			}
		</Text>

		<Button
			onPress={() => deleteTodo(item.key)}
			color='red'
			title='Delete'
		/>
	</View>
}

const styles = StyleSheet.create(
	{
		todoItem: {
			width: '100%',
			paddingHorizontal: 20,
			paddingVertical: 10,
			borderRadius: 5,
			marginVertical: 5,
			backgroundColor: "#4AA7F9",
			display: 'flex',
			flexDirection: 'row',
			gap: 10,
			alignItems: 'center'
		},
		todoText: {
			flex: 1,
			color: "#fff"
		},
	}
)

// TODO: Add PropTypes
