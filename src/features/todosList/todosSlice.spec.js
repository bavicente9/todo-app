import todosReducer, { addTodo, changeShowList, removeTodo, removeTodosCompleteds, toggleActiveStatus } from "./todosSlice";


describe('todos reducer', () => {

    const initialState = {
        entities: [
            {
                id: '1',
                text: 'text example',
                active: true
            },
            {
                id: '2',
                text: 'text example number 2',
                active: false
            },
        ],
        showList: 'all',
        counterActive: 2
    };



    it('it should has initial state', () => {
        expect(todosReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle add a new todo item', () => {
        const newTodo = {id:'3', text:'text example',active:true}
        
        const actual = todosReducer(initialState, addTodo(newTodo));
        expect(actual.entities).toContain(newTodo);
    });
    
    it('should handle remove a todo item', () => {
        const id = '2'
        const actual = todosReducer(initialState, removeTodo(id));
        
        expect(actual.entities).not.toContain({
            id: '2',
            text: 'text example number 2',
            active: false
        });
        
    });
    it('should remove all completed todos items', () => {
        
        const actual = todosReducer(initialState, removeTodosCompleteds());
        expect(actual.entities.find(item => item.active ===true)).toBe(undefined);
        
        
    })
    
    it('should toggle the active status of a todo item between true or false',() => {
        const id = '2'
        
        const actual = todosReducer(initialState, toggleActiveStatus(id));
        const todoItem = actual.entities.find(item => item.id ===id) 
        
        expect(todoItem.active).toBeTruthy();
    } )


    it('should toggle "showList" between "all", "active", "completed"', () => {
        
        const initialState = {
            value: 'dark'
        }
        
        let actual = todosReducer(initialState, changeShowList('active'));
        expect(actual.showList).toEqual('active');
        
        actual = todosReducer(initialState, changeShowList('completed'));
        expect(actual.showList).toEqual('completed');
        
        actual = todosReducer(initialState, changeShowList('all'));
        expect(actual.showList).toEqual('all');
    })
    
    it('should add one to the counter', () => {
        const newTodo = {id:'3', text:'text example',active:true}
        
        const actual = todosReducer(initialState, addTodo(newTodo));
        expect(actual.counterActive).toBe(3);
        
    })
    
    it('should remove one to the counter of active todos', ()=>{
        const id = '1'
        const actual = todosReducer(initialState, removeTodo(id));
        
        expect(actual.counterActive).toBe(1);
    })
});
