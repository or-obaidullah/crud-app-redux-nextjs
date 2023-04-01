const { configureStore } = require("@reduxjs/toolkit");
import booksReducer from "./booksSlice"


const store = configureStore({
    reducer: {
        booksReducer: booksReducer
    }
})

export default store;