import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserValid: false,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isUserValid = true
    },
    logout: (state) => {
      state.isUserValid = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions

export default counterSlice.reducer