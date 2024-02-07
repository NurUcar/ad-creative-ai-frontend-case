import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetRickAndMortyCharactersResponse } from "../types/response";

const instance = axios.create({
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    "Application-Type": "web",
  },
});

interface getCharacterByNameRequest {
  name: string;
  currentPage: number;
}
export const getCharacterByName = createAsyncThunk(
  "getCharacterByName",
  async (payload: getCharacterByNameRequest) => {
    try {
      const res = await instance.get(
        `https://rickandmortyapi.com/api/character/?page=${payload.currentPage}&name=${payload.name}`
      );

      const results: IGetRickAndMortyCharactersResponse[] = res?.data;

      console.log("res", results);
      return results;
    } catch (error: any) {
      return error;
    }
  }
);
