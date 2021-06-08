export enum ActionType {
  SET_USER = 'SET_USER',
  SET_COUNT = 'SET_COUNT',
  DO_COUNTING = 'DO_COUNTING',
  SET_TIMER = 'SET_TIMER',
  CLEAR_TIMER = 'CLEAR_TIMER'
}

export const setUsers = (users) => (dispatch) => {
  return dispatch({ type: ActionType.SET_USER, payload: users })
}

export const startCount = (countdown) => (dispatch) => {
  dispatch({ type: ActionType.SET_COUNT, payload: countdown })
  dispatch(doCounting())
}

export const doCounting = () => (dispatch) => {
  const timer = setInterval(() => dispatch({ type: ActionType.DO_COUNTING }), 1000)
  dispatch(setTimer(timer))
}

export const setTimer = (timer) => (dispatch) => {
  dispatch({ type: ActionType.SET_TIMER, payload: timer })
}

export const clearTimer = () => (dispatch) => {
  dispatch({ type: ActionType.CLEAR_TIMER })
}
