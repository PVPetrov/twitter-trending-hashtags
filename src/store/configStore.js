import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';
import { saveState, loadState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const preloadedState = loadState();

const configureStore = () => {
    const middleware = [thunk];
    const store = createStore(rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(...middleware)));

      store.subscribe(throttle(() => {
        saveState(store.getState());
      }, 1000));

    return store;
}


export default configureStore;