import configureStore from "redux-mock-store"
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
 
})