import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {User:"user"    }
});

export default Store;