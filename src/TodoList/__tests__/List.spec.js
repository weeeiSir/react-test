import React from "react";
import { mount } from 'enzyme';
import List from "../List";
import mountTest from '../../tests/mountTest';
import { Button, Checkbox } from "antd";


describe('List', () => {

	mountTest(List)

	beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('delete', async () => {

		// 1. 输入： 点击删除按钮
		// 2. 输出： 列表删除

		const renderList = [{
			value: '列表数据1',
			done: false
		}]
		const onDelete = jest.fn().mockImplementation(index => renderList.splice(index, 1))
		// const onDelete = jest.fn()
		const wrapper = mount(<List renderList={renderList} onDelete={onDelete} />);

		expect(wrapper.find('li').length).toBe(1);
		wrapper.find(Button).simulate('click');
		expect(onDelete).toHaveBeenCalledWith(0);
		jest.runAllTimers();
		wrapper.setProps({});
		// wrapper.update();
		// console.log(wrapper.find('li').debug());
		expect(wrapper.find('li').length).toBe(0);
	})  

	

	it('change list state', () => {
		const renderList = [{
			value: '列表数据1',
			done: false
		}]
		const onChangeState = jest.fn().mockImplementation((index, bool) => renderList[index].done = bool)
		const wrapper = mount(<List renderList={renderList} onChangeState={onChangeState}/>);
		wrapper.find('.ant-checkbox-input').simulate('change', { target: { checked: true } });
		expect(onChangeState).toHaveBeenCalledWith(0, true);
		wrapper.setProps({});
		expect(wrapper.find('.done').length).toBe(1)
	})



})