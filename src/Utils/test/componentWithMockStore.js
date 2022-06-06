import configureStore from "redux-mock-store"
import renderer from 'react-test-renderer';
import { Provider } from "react-redux"

const componentWithMockStore = (children , initialState) => {
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