// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
configure({ adapter: new Adapter() });

if (!window.matchMedia) {
Object.defineProperty(global.window, 'matchMedia', {
	value: jest.fn(query => ({
	matches: query.includes('max-width'),
	addListener: jest.fn(),
	removeListener: jest.fn(),
	})),
});
}
