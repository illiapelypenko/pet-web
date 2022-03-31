import { configureStore } from '@reduxjs/toolkit'

import { locationReducer, weatherReducer } from 'store'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type GetState = typeof store.getState
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
