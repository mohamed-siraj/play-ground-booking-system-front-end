import { configureStore } from '@reduxjs/toolkit';
import gameTypeReducer from './slices/GameTypeReducer';
import locationReducer from './slices/LocationReducer';


export const store = configureStore({
    reducer: {
        gameType: gameTypeReducer,
        location: locationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;