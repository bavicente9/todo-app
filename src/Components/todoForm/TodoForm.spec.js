
import configureStore from "redux-mock-store"
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import { Provider } from "react-redux"
import TodoForm from "./TodoForm";
import { fireEvent } from "@testing-library/react";


const mockStore = configureStore([])

describe('todo input', () => {
    let store
    let component;
    beforeEach(() => {
        //create a mock Store
        store = mockStore({
            theme: {
                value: 'dark'
            },
            todos: {
                entities: [
                    {
                        id: '1',
                        text: 'text example',
                        active: true
                    },
                    {
                        id: '2',
                        text: 'text example number 2',
                        active: false
                    },
                ],
                showList: 'all',
                counterActive: 2

            }
        });
        store.dispatch = jest.fn()

        component = renderer.create(
            <Provider store={store}>
                <TodoForm />
            </Provider>
        );
    });

    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })



    it('call a dispatch when submit the box', () => {

        renderer.act(() => {
            const ev = {
                preventDefault: jest.fn()
            }
            component.root.findByType('form').props.onSubmit(ev);
        })

        expect(store.dispatch).toHaveBeenCalledTimes(1);

    })

    it('clean the input then of  the dispatch call', () => {
        let input;

        renderer.act(() => {
            
            const ev = {
                preventDefault: jest.fn(),
                target: {
                    value: 'Example'
                }
            }

            input = component.root.findByProps({ name: 'todo text' })
            input.props.onChange(ev)
            component.root.findByType('form').props.onSubmit(ev);
        })

        expect(input.props.value).toBe('')
    })


})