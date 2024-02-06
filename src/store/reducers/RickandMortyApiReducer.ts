import { createSlice } from "@reduxjs/toolkit";
import { getCharacterByName } from "../asyncActions/rickAndMortyActions";

type IGenericFetchStatus = "success" | "error" | "idle" | "loading";

export interface IRickAndMortyState {
  results?: any | null;

  fetch: {
    results: IGenericFetchStatus;
  };

  error: {
    results?: string;
  };
}

const initialState: IRickAndMortyState = {
  results: null,
  fetch: {
    results: "idle",
  },

  error: {
    results: "",
  },
};

export const RickAndMortyReducer = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: {},
  extraReducers({ addCase }) {
    // Get Character By Name API Calls
    addCase(getCharacterByName.pending, (state) => {
      state.fetch.results = "loading";
    });
    addCase(getCharacterByName.fulfilled, (state, action) => {
      state.results = action.payload;
      state.fetch.results = "success";
    });
    addCase(getCharacterByName.rejected, (state, action) => {
      state.fetch.results = "error";
    });
  },
});

export default RickAndMortyReducer.reducer;
