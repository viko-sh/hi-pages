import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
  ReducersMapObject
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import * as reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

/* istanbul ignore next */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Compose a store creator with some middlewares
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middleware)
)(createStore);

const appReducer = combineReducers(reducers as ReducersMapObject);
const rootReducer = (state: any, action: any) => {
  if (action.type === 'APP_CLEAR') {
    state = undefined;
  }

  return appReducer(state, action);
};

// Create a store
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
