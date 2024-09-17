import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

export type RequestStatus = 'idle' | 'loading' | 'fulfilled';
export type RequestStatusState = { requestStatus: RequestStatus };

export function withRequestStatus() {
  return signalStoreFeature(
    withState<RequestStatusState>({ requestStatus: 'idle' }),
    withComputed(({ requestStatus }) => ({
      isLoading: computed(() => requestStatus() === 'loading'),
      isFulfilled: computed(() => requestStatus() === 'fulfilled'),
    }))
  );
}

export function setLoading(): RequestStatusState {
  return { requestStatus: 'loading' };
}

export function setFulfilled(): RequestStatusState {
  return { requestStatus: 'fulfilled' };
}
