import React, { useState, useEffect } from "react"
import { InputText } from "../components/InputText"
import { ITodo } from "../components/interfaces"
import { TodoList } from "../components/TodoList"

declare var confirm: (question: string) => boolean

export const TodoPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
		setTodos(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	const addTodo = (title: string) => {
		let newTodo: ITodo = {
			id: Date.now(),
			title,
			completed: false,
		}

		setTodos((prev) => [newTodo, ...prev])
	}

	const changeHandler = (id: number): void => {
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
		)
	}

	const removeTodo = (id: number): void => {
		const shouldRemove = confirm("Are you sure you want to delete?")
		if (shouldRemove) {
			setTodos((prev) => prev.filter((todo) => todo.id !== id))
		}
	}

	return (
		<React.Fragment>
			<InputText onAdd={addTodo} />
			<TodoList todos={todos} onChange={changeHandler} onRemove={removeTodo} />
		</React.Fragment>
	)
}
