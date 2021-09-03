import React, { useState } from "react";
import { Input, Button} from "antd";


const Add = ({
	handleAdd
}) => {

	const [value, setValue] = useState('')
	const handleClick = () => {
		handleAdd(value)
		setValue('')
	}
	return (
		<div>
			<Input 
				value={value} 
				onChange={e => setValue(e.target.value)} 
				style={{width: '300px', marginBottom: '10px'}}/>
			<Button 
				type="primary" 
				onClick={handleClick}
				style={{marginLeft: '10px'}}>添加</Button>
		</div>
	)
}

export default Add