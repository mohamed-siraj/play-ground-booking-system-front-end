import { configureStore } from '@reduxjs/toolkit';
import gameTypeReducer from './slices/GameTypeReducer';
import locationReducer from './slices/LocationReducer';
import adminReducer from './slices/AdminReducer';
import groundReducer from './slices/GroundReducer';
import availabilityReducer from './slices/AvailabilityReducer';


export const store = configureStore({
    reducer: {
        gameType: gameTypeReducer,
        location: locationReducer,
        admin: adminReducer,
        ground: groundReducer,
        availability: availabilityReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;