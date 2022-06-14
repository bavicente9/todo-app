import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import renderer from 'react-test-renderer';
import FilterButtons from "./filterButtons";




describe('filter buttons', () => {
    let store
    let component;
    const simulateClickByProps = (props) => {
        //example Of props { onclick: handleShowActive() }
        renderer.act(
            component.root.findByProps().props.onclick()
        )
    }
    
    beforeEach(() => {
        //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<FilterButtons />))
    });

    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })


    it('correctly call of All button dispatch', () => {

        renderer.act(
            component.root.findByProps({ onclick: handleShowCompleted() }).props.onclick()
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })

    it('correctly call of completed button dispatch', () => {
        renderer.act(
            component.root.findByProps({ onclick: handleShowCompleted() }).props.onclick()
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);

    })
    
    
    it('correctly call of Active button dispatch', () => {
        //TODO: check if this fn work, if it work refactoring the others tests
        simulateClickByProps({onclick:handleShowActive()});

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })


    
})