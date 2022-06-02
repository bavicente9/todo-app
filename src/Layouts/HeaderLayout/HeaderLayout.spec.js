import configureStore from "redux-mock-store"
import userEvent from '@testing-library/user-event'
import { act, render } from "@testing-library/react"
import renderer from 'react-test-renderer';
import { Provider } from "react-redux"
import HeaderLayout from "./HeaderLayout"


const mockStore = configureStore([])

describe('HeaderLayout', () => {
    let store
    let component;
    beforeEach(() => {
        //create a mock Store
        store = mockStore({
            theme: {
                value: 'dark'
            }
        });
        store.dispatch = jest.fn()

        component = renderer.create(
            <Provider store={store}>
                <HeaderLayout />
            </Provider>
        );
    });
    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })


    it('button theme dispatch a action on button click', () => {

        renderer.act(() => {
            component.root.findByType('button').props.onClick();
        })

        expect(store.dispatch).toHaveBeenCalledTimes(1);


    })

    // it('button theme toggle between sun and moon icons classes', () => {
    //     const buttonTheme = wrapper.getByRole('button');
    //     const actualTheme = store.getState().theme.value

    //     expect(buttonTheme.classList).toContain('buttonTheme--dark')

    //     userEvent.click(buttonTheme)
    //     expect(buttonTheme.classList).toContain('buttonTheme--light')

    //     userEvent.click(buttonTheme)
    //     expect(buttonTheme.classList).toContain('buttonTheme--dark')

    // })
})