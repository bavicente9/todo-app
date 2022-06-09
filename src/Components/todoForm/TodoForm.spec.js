
import renderer from 'react-test-renderer';
import TodoForm from "./TodoForm";
import componentWithMockStore from "../../Utils/test/componentWithMockStore";



describe('todo input', () => {
    let store
    let component;
    beforeEach(() => {
         //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<TodoForm />))
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