import { createSlice } from '@reduxjs/toolkit'

const counterService = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    setCounter: (state, action) => {
      state.count = action.count
    },
  },
})

const { actions, reducer } = counterService
export const {
  setCounter
} = actions
export { reducer as counterServiceReducer }
