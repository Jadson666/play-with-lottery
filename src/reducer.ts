import { ActionType } from './action'
import { DateTime } from 'luxon'
import { User } from './lib/userService'

export interface RootState {
  users: User[]
  targetTime: DateTime
  currentTime: DateTime
}

const initialState: RootState = {
  users: [],
  targetTime: null,
  currentTime: DateTime.now()
}

const reducer = (state: RootState = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER: {
      const users = action.payload
      return {
        ...state,
        users
      }
    }
    case ActionType.SET_COUNT: {
      const countdown = action.payload
      const curTime = DateTime.now()
      return {
        ...state,
        targetTime: curTime.plus({ minutes: countdown }),
        currentTime: curTime
      }
    }
    case ActionType.DO_COUNTING: {
      return {
        ...state,
        currentTime: DateTime.now()
      }
    }
    default:
      return state
  }
}

export default reducer
