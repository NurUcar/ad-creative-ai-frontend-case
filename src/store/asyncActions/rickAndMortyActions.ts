import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    "Application-Type": "web",
  },
});
export const getCharacterByName = createAsyncThunk(
  "getCharacterByName",
  async (name: string) => {
    try {
      const res: [] = await instance.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      console.log("res", res);
      return res;
    } catch (error: any) {
      return error;
    }
  }
);
