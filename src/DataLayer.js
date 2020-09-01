import { CreateContext, UseContext, useReducer, React } from "react";

export const DataLayerContext = CreateContext();

export const DataLayer = (initialState, reducer, children) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {children}
  </DataLayerContext.Provider>
);
