export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(err) {
    console.log(err.message);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

/*
* Add this to the configStore file 
* import { throttle } from 'lodash';
* const preloadedState = loadState();
*
* store.subscribe(throttle(() => {
*   saveState(store.getState());
* }, 1000));
*
*/