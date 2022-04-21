import React from 'react'
import './TodoList.css'
const TodoList = ({ todos, setTodos }) => {
	const deleteHandler = (e) => {
		setTodos(todos.filter((el) => el.id !== e.target.id))
		// console.log(e.target.id)
	}
	const chekedHandler = (e) => {
		setTodos(
			todos.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}

	return (
		<div>
			{todos.map((el) => (
				<li className='lishki' key={el.id}>
					<div className={el.completed ? 'task' : 'done'}>
						<p>{el.date}</p>
						<p>{el.title}</p>
					</div>

					<input
						type='checkbox'
						id={el.id}
						onChange={chekedHandler}
						checked={el.completed}
					/>
					<button className='btn' onClick={deleteHandler} id={el.id}>
						delete
					</button>
				</li>
			))}
		</div>
	)
}

export default TodoList
