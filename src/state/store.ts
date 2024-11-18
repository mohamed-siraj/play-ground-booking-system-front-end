import { configureStore } from '@reduxjs/toolkit';
import gameTypeReducer from './slices/GameTypeReducer';


export const store = configureStore({
    reducer: {
        gameType: gameTypeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;