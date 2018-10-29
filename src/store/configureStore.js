import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function store(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
