import componentWithMockStore from "../../Utils/test/componentWithMockStore";
import TodoItem from "./TodoItem";





describe('todoItem', () => {

    let store
    let component;


    beforeEach(() => {
        //render a component with a mock Store
        ({ component, store } = componentWithMockStore(<TodoItem />))
    });


    // it('match with snapshot', () => {
    //     expect(component.toJSON()).toMatchSnapshot();
    // })

    it('call the dispatch with the checkbox', () => {
        renderer.act(
            component.root.findByType('checkbox').props.onclick()
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);

    })

    it('if it has the prop active = false the p shouldnt has the class active', () => {
        ({ component, store } = componentWithMockStore(<TodoItem active={false}/>))

        const itemContainer = component.root.findByProps({className:'active'})
        
    expect(itemContainer).toBeUndefined() 

    })
    it('if it has the prop active = true the p should has the class active', () => {
        ({ component, store } = componentWithMockStore(<TodoItem active={false}/>))

        const itemContainer = component.root.findByProps({className:'active'})
        
    expect(itemContainer).not.toBeUndefined() 

    })

    it('call the dispatch of remove button', () => {

        renderer.act(
            component.root.findByType('button').props.onclick()
        )
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
    
    it('unmount the component with the remove button', () => {
        renderer.act(
            component.root.findByType('button').props.onclick()
        )
        
        expect(component.root).toBeEmptyDOMElement()

    })

})