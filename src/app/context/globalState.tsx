"use client";

import { createContext, useReducer, ReactNode, Dispatch } from "react";

// Interfaces
export interface IGameSettingsData {
  cardType: string;
  difficulty: string;
  timer: string;
  player1: string;
  player2: string;
}

export interface ICards {
  cards: ICard[];
}

export interface ICard {
  id: string;
  name: string;
  cardType: string;
  isFlipped: boolean;
  isMatched: boolean;
  image: string;
}

interface State {
  gameSettings: IGameSettingsData;
  cardsInfo: ICards;
}

// Initial state
const initialGameSettings: IGameSettingsData = {
  cardType: "",
  difficulty: "",
  timer: "",
  player1: "",
  player2: "",
};

const initialCardsInfo: ICards = {
  cards: [],
};

const initialState: State = {
  gameSettings: initialGameSettings,
  cardsInfo: initialCardsInfo,
};

// Define the shape of your actions
type Action =
  | { type: "SET_GAME_SETTINGS"; payload: Partial<IGameSettingsData> }
  | { type: "SET_CARDS_INFO"; payload: ICards };

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
    case "SET_GAME_SETTINGS":
        return {
            ...state,
            gameSettings: {
                ...state.gameSettings,
                ...action.payload,
            },
        };
    case "SET_CARDS_INFO":
        return {
            ...state,
            cardsInfo: {
                ...state.cardsInfo,
                cards: action.payload.cards,
            },
        };
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
