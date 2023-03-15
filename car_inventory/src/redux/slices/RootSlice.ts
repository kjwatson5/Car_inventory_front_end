import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "make",
        model: 'model',
        year: 'year',
        color: 'color',
    },
    reducers: {
        // Action is submitted elsewhere - written to state.make
        chooseMake: (state, action) => { state.make = action.payload }, // All we're doing is setting the input to the state.make
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor } = rootSlice.actions
