import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import TodoForm from "../todoForm/TodoForm";



describe('TodoList', () => {
    let store
    let component;
    beforeEach(() => {
        //render a component with a mock Store

        ({ component, store} = componentWithMockStore(<TodoForm />))
    });

    it('match with snapshot', () => {

    })

    it('Filter Active items with Active button', () => {

    })

    it('Filter completed items with the button', () => {

    })

    it('Filter All items with All button', () => {

    })


    it('show counter of Active todo items  correctly ', () => {


    })


    it('clear completed todo items with the button', () => {

    })
})