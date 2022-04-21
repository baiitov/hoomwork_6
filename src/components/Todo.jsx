import React from 'react'
import { useState } from 'react'
import './Todo.css'
const Todo = (props) => {
	const [title, setTitle] = useState('')
	const titleHandler = (e) => {
		setTitle(e.target.value)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		if (title === '') {
			return
		}
		setTitle('')

		const newData = {
			title,
			id: Math.random().toString(),
			date: new Date().toLocaleDateString(),
			completed: false
		}
		props.onTodo(newData)
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<input className='title' value={title} onChange={titleHandler} type='text' />
				<button className='btn'>ADD</button>
			</div>
		</form>
	)
}

export default Todo
