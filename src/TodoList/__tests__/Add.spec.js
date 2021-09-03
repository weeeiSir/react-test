import React from "react";
import { mount } from 'enzyme';
import Add from "../Add";
import { Input, Button } from "antd";

import mountTest from '../../tests/mountTest';


describe('Add', () => {

	mountTest(Add)

	// beforeAll(() => {  
	// 	Object.defineProperty(window, "matchMedia", {
	// 	  value: jest.fn(() => { return { matches: true } })
	// 	});
	// });

	it('should change List when click', () => {
		// 1. 输入： 在input中输入一段文字。
		// 2. 输出： 点击添加按钮，父级函数被调用，并获得输入框中的文字。

		// 准备数据
		const handleAdd = jest.fn()
		const wrapper = mount(<Add handleAdd={handleAdd}/>)

		// 模拟测试
		wrapper.find(Input).at(0).simulate('change', { target: { value: '加一条数据' } })
		wrapper.find(Button).simulate('click')

		// 输出
		expect(handleAdd).toHaveBeenCalledWith('加一条数据')
		expect(wrapper.find(Input).prop('value')).toBe('')

	})

	// it('handleAdd should be a function', () => {
	// 	const wrapper = mount(<Add handleAdd={() => {}}/>)
	// 	const events = wrapper.props('handleAdd')
	// 	console.log(events)
	// 	expect(typeof events).toBe('function')
	// })

})