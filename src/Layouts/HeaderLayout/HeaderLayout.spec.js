import renderer from 'react-test-renderer';
import HeaderLayout from "./HeaderLayout"
import componentWithMockStore from "../../Utils/test/componentWithMockStore";




describe('HeaderLayout', () => {
    let store
    let component;
    beforeEach(() => {
        //render a component with a mock Store
        ( {component, store} = componentWithMockStore(<HeaderLayout />  ))
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