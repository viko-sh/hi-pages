import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import leads from '../Leads/state/sagas';

/**
 * rootSaga
 */
export default function* root(): SagaIterator {
  yield all([fork(leads)]);
}
