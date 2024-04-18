import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: string
}

const initialState: FormState = {
    value: '2'
}

export const formSlice = createSlice({
    name: 'formValue',
    initialState,
    reducers: {
        formValueAction: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
})

export const { formValueAction } = formSlice.actions

export default formSlice.reducer

