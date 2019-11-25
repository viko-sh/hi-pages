import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getInvited,
  getInvitedSuccess,
  getInvitedFailure,
  getAccepted,
  getAcceptedSuccess,
  getAcceptedFailure,
  acceptLead,
  declineLead,
  updateInviteList,
  updateLeadFailure
} from './actions';
import api from './api';

export const getAcceptedSaga = function*(action: any): SagaIterator {
  try {
    const data = yield call(api.getAccepted as any, action.payload);
    yield put(getAcceptedSuccess(data));
  } catch (error) {
    yield put(getAcceptedFailure(error));
  }
};

/**
 * Get invited leads
 */
export const getInvitedSaga = function*(action: any): SagaIterator {
  try {
    const data = yield call(api.getInvited as any, action.payload);
    yield put(getInvitedSuccess(data));
  } catch (error) {
    yield put(getInvitedFailure(error));
  }
};

export const acceptLeadSaga = function*(action: any): SagaIterator {
  try {
    yield call(api.acceptLead, action.payload);
    yield put(updateInviteList(action.payload));
  } catch (error) {
    yield put(updateLeadFailure(error));
  }
};

export const declineLeadSaga = function*(action: any): SagaIterator {
  try {
    yield call(api.declineLead, action.payload);
    yield put(updateInviteList(action.payload));
  } catch (error) {
    yield put(updateLeadFailure(error));
  }
};

/**
 * Leads Sagas
 */
export default function* root() {
  yield all([
    takeLatest(getInvited, getInvitedSaga),
    takeLatest(acceptLead, acceptLeadSaga),
    takeLatest(declineLead, declineLeadSaga),
    takeLatest(getAccepted, getAcceptedSaga)
  ]);
}
