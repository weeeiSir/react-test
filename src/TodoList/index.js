import React, { useState } from "react";
import Add from "./Add";
import List from "./List";
const TodoList = () => {
	const [renderList, setRenderList] = useState([])
	const handleAdd = value => {
		renderList.push({
			value,
			done: false
		})
		setRenderList([...renderList])
	}
	const onDelete = index => {
		renderList.splice(index, 1)
		setRenderList([...renderList])
	}
	const onChangeState = (index, bool) => {
		renderList[index].done = bool
		setRenderList([...renderList])
	}
	return (
		<div style={{padding: '20px'}}>
			<Add 
				handleAdd={value => handleAdd(value)}/>
			<List 
				renderList={renderList} 
				onDelete={index => onDelete(index)}
				onChangeState={(index, bool) => onChangeState(index, bool)}
				/>
		</div>
	)
}
export default TodoList