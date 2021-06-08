export enum ActionType {
  SET_USER = 'SET_USER',
  SET_COUNT = 'SET_COUNT',
  DO_COUNTING = 'DO_COUNTING'
}

export const setUsers = (users) => (dispatch) => {
  return dispatch({ type: ActionType.SET_USER, payload: users })
}

export const startCount = (countdown) => (dispatch) => {
  dispatch({ type: ActionType.SET_COUNT, payload: countdown })
  return dispatch(doCounting())
}

export const doCounting = () => (dispatch) => {
  return setInterval(() => dispatch({ type: ActionType.DO_COUNTING }), 1000)
}
