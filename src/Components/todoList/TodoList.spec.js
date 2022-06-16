import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import renderer from 'react-test-renderer';
import TodoList from "./TodoList";




describe('TodoList', () => {
    let store
    let component;
    

    beforeEach(() => {
        //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<TodoList />))
    });


    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })



    it('correctly call of clear Completed dispatch', () => {
        renderer.act(() => {
            const ev = {
                preventDefault: jest.fn()
            }
            component.root.findByProps({className:'button_clear'}).props.onClick(ev)
        }
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
    
})