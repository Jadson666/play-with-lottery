import { ActionType } from './action'
import { DateTime } from 'luxon'
import { User } from './lib/userService'

export interface RootState {
  users: User[]
  targetTime: DateTime | undefined
  currentTime: DateTime
  timer: number | undefined
}

const initialState: RootState = {
  users: [],
  targetTime: undefined,
  currentTime: DateTime.now(),
  timer: undefined
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
    case ActionType.SET_TIMER: {
      const timer = action.payload
      return {
        ...state,
        timer
      }
    }
    case ActionType.CLEAR_TIMER: {
      if (state.timer) clearInterval(state.timer)
      return {
        ...state,
        targetTime: null,
        timer: undefined
      }
    }
    default:
      return state
  }
}

export default reducer
