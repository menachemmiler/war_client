import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { attackState, DataStatus } from "../../types/redux";
import { IAttack } from "../../models/attack";

const initialState: attackState = {
  error: null,
  status: DataStatus.IDLE,
  attack: [],
  data: null,
};

export const getAllMyAttack = createAsyncThunk(
  "attack/getAllMyAttack",
  async (_, thunkApi) => {
    try {
      const Authorization = localStorage.getItem("Authorization");
      const res = await fetch("http://localhost:2121/api/users/myAttacks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization!,
        },
      });
      // console.log({ res });
      if (res.status != 200) {
        return thunkApi.rejectWithValue(
          "Can't get all attack, please try again"
        );
      }
      const data = await res.json();
      // console.log(33, { data });
      return thunkApi.fulfillWithValue(data);
    } catch (err: any) {
      return thunkApi.rejectWithValue(`Can't get all attack,  ${err.message}`);
    }
  }
);

const attackSlice = createSlice({
  name: "attack",
  initialState,
  reducers: {
    updateAttack: (state, action) => {
      console.log({ action });
      state.attack = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<attackState>) => {
    builder
      .addCase(getAllMyAttack.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.attack = null;
      })
      .addCase(getAllMyAttack.fulfilled, (state, action) => {
        // console.log({ action });
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.attack = action.payload as unknown as IAttack[];
      })
      .addCase(getAllMyAttack.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.attack = null;
      });
  },
});

export const { updateAttack } = attackSlice.actions;

export default attackSlice;

