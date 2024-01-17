import { createSlice } from "@reduxjs/toolkit";


export const dishesSlice = createSlice({
    name: 'dishes',
    initialState:{
        selectedCategory: "ITALIAN",
    },
    reducers:{
    }
})
console.log(dishesSlice.selectedCategory)
export const getSelectedCategory = state => state.selectedCategory;

export default dishesSlice.reducer;