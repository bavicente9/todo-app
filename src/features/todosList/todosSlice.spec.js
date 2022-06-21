import todosReducer, { addTodo, changeFilter, removeTodo, removeTodosCompleteds, toggleActiveStatus } from "./todosSlice";


describe('todos reducer', () => {

    const example280Char = "280char Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi erat felis, congue a consectetur ac, pretium sed risus.Cras ornare tortor ut ullamcorper posuere. Sed vel dui bibendum,laoreet lectus non, viverra erat. Mauris aliquet velit sagittis elitcommodo venenatis.12345"
    
const initialState = {
    entities: [
        {
            id: '1',
            text: 'text example',
            active: true
        },
        {
            id: '2',
            text: '10 minutes meditation',
            active: true
        },
        {
            id: '3',
            text: 'Read for 1hour',
            active: true
        },
        {
            id: '4',
            text: "280char Example Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi erat felis, congue a consectetur ac, pretium sed risus.Cras ornare tortor ut ullamcorper posuere. Sed vel dui bibendum,laoreet lectus non, viverra erat. Mauris aliquet velit sagittis elitcommodo venena.",
            active: false
        },
    ],
    filter: 'all',
    counterActive:3
};


    it('it should has initial state', () => {
        expect(todosReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle add a new todo item', () => {
        const newTodo = {id:'5', text:'text example',active:true}
        
        const actual = todosReducer(initialState, addTodo(newTodo));
        expect(actual.entities).toContain(newTodo);
    });
    
    it('should handle remove a todo item', () => {
        const id = '2'
        const actual = todosReducer(initialState, removeTodo(id));
        
        expect(actual.entities).not.toContain({
            id: '2',
            text: expect.any(String),
            active: expect.any(Boolean)
        });
        
    });
    it('should remove all completed todos items', () => {
        
        const actual = todosReducer(initialState, removeTodosCompleteds());
        expect(actual.entities.find(item => item.active ===false)).toBe(undefined);
        
        
    })
    
    it('should toggle the active status of a todo item between true or false',() => {
        const id = '4'
        
        const actual = todosReducer(initialState, toggleActiveStatus(id));
        const todoItem = actual.entities.find(item => item.id ===id) 
        
        expect(todoItem.active).toBeTruthy();
    } )


    it('should toggle "filter" between "all", "active", "completed"', () => {
        
        const initialState = {
            value: 'dark'
        }
        
        let actual = todosReducer(initialState, changeFilter('active'));
        expect(actual.filter).toEqual('active');
        
        actual = todosReducer(initialState, changeFilter('completed'));
        expect(actual.filter).toEqual('completed');
        
        actual = todosReducer(initialState, changeFilter('all'));
        expect(actual.filter).toEqual('all');
    })
    
    it('should add one to the counter', () => {
        const newTodo = {id:'5', text:'text example',active:true}
        
        const actual = todosReducer(initialState, addTodo(newTodo));
        expect(actual.counterActive).toBe(4);
        
    })
    
    it('should remove one to the counter of active todos', ()=>{
        const id = '1'
        const actual = todosReducer(initialState, removeTodo(id));
        
        expect(actual.counterActive).toBe(2);
    })
});
