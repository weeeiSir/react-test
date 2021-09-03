import React from "react";
import { Button, Checkbox } from "antd";
const List = ({
  renderList = [],
	onDelete,
	onChangeState
}) => {
	return (
		<ul>
			{
				renderList.map((list, index) => (
					<li key={list.value} className="list-item">
						<Checkbox onChange={e => onChangeState(index, e.target.checked)}></Checkbox>
						<span className={list.done ? 'done' : ''}>{list.value}</span>
						<Button 
							type="default" 
							onClick={() => onDelete(index)}
							style={{marginLeft: '10px'}}>删除</Button>
					</li>
				))
			}
		</ul>
	)
}

export default List