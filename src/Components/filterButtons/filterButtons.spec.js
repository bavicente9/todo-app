import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import renderer from 'react-test-renderer';
import FilterButtons from "./filterButtons";




describe('filter buttons', () => {
    let store
    let component;

    const clickByValue = (value) => {
        //example Of value { target:{value:'all'}}
        renderer.act(() => {
            let ev = {
                preventDefault: jest.fn(),
                target: { value: 'all' }
            }
            ev = { ...ev, ...value }

            let button = [...component.root.findAllByType('button')]
            
            button = button.find(item => item.props.value === ev.target.value)
            button.props.onClick(ev)
        })
    }

    beforeEach(() => {
        //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<FilterButtons />))
    });

    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })


    it('correctly call of All button dispatch', () => {

        clickByValue({  target:{value: 'all'}  })

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })

    it('correctly call of completed button dispatch', () => {

        clickByValue({ target: { value: 'completed' } })

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })


    it('correctly call of Active button dispatch', () => {

        clickByValue({ target: { value: 'active' } })

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })



})