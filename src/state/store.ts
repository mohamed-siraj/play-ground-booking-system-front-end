import { configureStore } from '@reduxjs/toolkit';
import gameTypeReducer from './slices/GameTypeReducer';
import locationReducer from './slices/LocationReducer';
import adminReducer from './slices/AdminReducer';


export const store = configureStore({
    reducer: {
        gameType: gameTypeReducer,
        location: locationReducer,
        admin: adminReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;