import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isSidebarVisible: true,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer