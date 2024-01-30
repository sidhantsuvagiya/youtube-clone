import { createSlice } from '@reduxjs/toolkit'

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        videoList: [],
        isLoading: true
    },
    reducers: {
        setVideos: (state, actions) => {
            state.videoList = actions.payload
        },
        toggleLoading: (state, actions) => {
            state.isLoading = actions.payload
        }
    }
})

export const { setVideos, toggleLoading } = videosSlice.actions

export default videosSlice.reducer