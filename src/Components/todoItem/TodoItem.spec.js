import configureStore from "redux-mock-store"
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import TodoItem from "./TodoItem";
import { act } from "react-test-renderer";






describe('todoItem', () => {
    let mockStore;
    let store;
    let component;

    beforeEach(() => {
        //render a component with a mock Store
        const initialState = {
            theme: { value: 'dark' },
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
                filter: 'all',
                counterActive: 2
            }
        }
        mockStore = configureStore([])
        store = mockStore(initialState)
        store.dispatch = jest.fn()

        render(
            <Provider store={store}>
                <TodoItem active={true} text='text of example' id='2' />
            </Provider>
        )
    });


    // it('match with snapshot', () => {
    //     expect(component.toJSON()).toMatchSnapshot();
    // })


    it('if it has the prop active = false the container shouldnt has the class item-completed', () => {
        render(
            <Provider store={store}>
                <TodoItem active={true} text='text of example' id='2' />
            </Provider>
        )
        const itemContainer = document.getElementsByClassName('item-completed')

        expect(itemContainer.length).toBe(0)

    })

    it('if it has the prop active = true the container should has the class active', () => {
        render(
            <Provider store={store}>
                <TodoItem active={false} text='text of example' id='2' />
            </Provider>
        )
        const itemContainer = document.getElementsByClassName('item-completed')

        expect(itemContainer.length).toBe(1)

    })

    it('call the dispatch with the checkbox', () => {



        act(() => {
            fireEvent.click(document.getElementsByClassName('input_checkBox')[0])
        })
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        
    })
    
    it('call the dispatch of remove button', () => {
        act(() => {
            fireEvent.click(document.getElementsByClassName('todo_button--remove')[0])
        })

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
})