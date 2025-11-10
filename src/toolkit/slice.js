import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRightMenu: false,

}

export const appSlice = createSlice({
    name: "youTube",
    initialState,
    reducers: {
        isRightMenuHandle: (state, actions) => {
            state.isRightMenu = !state.isRightMenu;
        }
    }
});


export const {isRightMenuHandle} = appSlice.actions;
export default appSlice.reducer