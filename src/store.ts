import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import formReducer from './features/form'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/localStorage'



export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        formValue: formReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch