import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import TodoForm from "../todoForm/TodoForm";
import renderer from 'react-test-renderer';




describe('TodoList', () => {
    let store
    let component;
    

    beforeEach(() => {
        //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<TodoForm />))
    });


    it('match with snapshot', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })


    it('Filter by Active items', () => {

        const initialState = { showList: 'active' };
        ({ component, store } = componentWithMockStore(<TodoForm />, initialState))


        const activeTodos = component.root.findAllByProps({ active: true })
        const completedTodos = component.root.findAllByProps({ active: false })

        expect(activeTodos.lenght).toBeGreaterThan(0)
        expect(completedTodos.lenght).toBe(0)

    })


    


    it('Filter by completed', () => {
        const initialState = { showList: 'completed' };
        ({ component, store } = componentWithMockStore(<TodoForm />, initialState))


        const activeTodos = component.root.findAllByProps({ active: true })
        const completedTodos = component.root.findAllByProps({ active: false })

        expect(completedTodos.lenght).toBeGreaterThan(0)
        expect(activeTodos.lenght).toBe(0)

    })




    it('Filter by All items', () => {
        const initialState = { showList: 'all' };
        ({ component, store } = componentWithMockStore(<TodoForm />, initialState))

            const activeTodos = component.root.findAllByProps({ active: true })
            const completedTodos = component.root.findAllByProps({ active: false })

            expect(completedTodos.lenght).toBeGreaterThan(0)
            expect(activeTodos.lenght).toBeGreaterThan(0)
    })

    it('show counter of Active todo items  correctly ', () => {

        const counter = component.root.findByProps({className:'counter'})

        expect(counter).toHaveTextContent('2')
    })



    it('correctly call of clear Completed dispatch', () => {
        renderer.act(
            component.root.findByProps({ onclick: handleClearCompletedTodos }).props.onclick()
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
})