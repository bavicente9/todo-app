import themeReducer, { changeToDark, changeToLight, toggleTheme } from "./themeSlice";


describe('theme reducer', () => {


  const initialState = {
    value: 'dark',
  };

  it('it should has initial state', () => {
    expect(themeReducer(undefined, { type: 'unknown' })).toEqual({
      value: 'dark',
    });
  });

  it('should handle changeToLight', () => {
    const actual = themeReducer(initialState, changeToLight());
    expect(actual.value).toEqual('light');
  });

  it('should handle changeToDark', () => {
    const initialState = {
      value: 'light'
    }
    const actual = themeReducer(initialState, changeToDark());
    expect(actual.value).toEqual('dark');
  });

  it('should toggle theme between "light" and "dark"', () => {

    const initialState = {
      value: 'dark'
    }
    
    let actual = themeReducer(initialState, toggleTheme());
    expect(actual.value).toEqual('light');
    actual = themeReducer(actual, toggleTheme());
    expect(actual.value).toEqual('dark');
  })
});
