"use client";

import { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Interfaces
export interface GameSettingsData {
    cardType: string;
    difficulty: string;
    timer: string;
    player1: string;
    player2: string;
}

interface State {
    gameSettings: GameSettingsData;
}

// Initial state
const initialGameSettings: GameSettingsData = {
    cardType: "",
    difficulty: "",
    timer: "",
    player1: "",
    player2: "",
}

const initialState: State = {
    gameSettings: initialGameSettings,
};

// Define the shape of your actions
type Action = 
    | { type: 'SET_GAME_SETTINGS'; payload: Partial<GameSettingsData> }


// Create the context
const GlobalStateContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => undefined,
});

// Reducer function to handle state changes based on actions
const globalStateReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_GAME_SETTINGS':
            return {
                ...state,
                gameSettings: {
                    ...state.gameSettings,
                    ...action.payload,
                },
            }
        default:
            return state;
    }
};

// Provider component to wrap your app and provide the state
const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };