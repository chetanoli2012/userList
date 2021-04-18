import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// Higher Order Componenent
export const StateProvider = ({ reducer, initialState, children }) =>
(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// used to pull info from the data layer
export const useStateValue = () => useContext(StateContext);