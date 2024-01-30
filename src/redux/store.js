import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice'
import videosSlice from './videosSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        videos: videosSlice
    }
})

export default store;