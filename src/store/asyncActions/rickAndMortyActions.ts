import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

      return res;
    } catch (error: any) {
      return error;
    }
  }
);
