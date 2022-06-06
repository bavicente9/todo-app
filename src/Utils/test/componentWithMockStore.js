import configureStore from "redux-mock-store"
import renderer from 'react-test-renderer';
import { Provider } from "react-redux"


const defaultState = {
  theme: { value: 'dark' },
  todos: {
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
  }
}


const componentWithMockStore = (children , initialState = defaultState) => {
    //create a mock Store
    const mockStore = configureStore([])
    const store = mockStore(initialState);
    store.dispatch = jest.fn()
    
    const component = renderer.create(
      <Provider store={store}>
          {children}
      </Provider>
  )

  return({store, component})
}

export default componentWithMockStore