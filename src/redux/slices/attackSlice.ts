// import {
//   ActionReducerMapBuilder,
//   createAsyncThunk,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { attackState, DataStatus } from "../../types/redux";

// const initialState: attackState = {
//   error: null,
//   status: DataStatus.IDLE,
//   attack: null,
//   data: null,
// };

// export const getAllMyAttack = createAsyncThunk(
//   "attack/getAllMyAttack",
//   async (_, thunkApi) => {
//     try {
//       const res = await fetch("http://localhost:2121/api/allOrganizName", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       // console.log({ res });
//       if (res.status != 200) {
//         return thunkApi.rejectWithValue(
//           "Can't get all organiz, please try again"
//         );
//       }
//       const data = await res.json();
//       // console.log(33, { data });
//       return thunkApi.fulfillWithValue(data);
//     } catch (err: any) {
//       return thunkApi.rejectWithValue(`Can't get all organiz,  ${err.message}`);
//     }
//   }
// );

// const organizSlice = createSlice({
//   name: "organiz",
//   initialState,
//   reducers: {},
//   extraReducers: (builder: ActionReducerMapBuilder<organizState>) => {
//     builder
//       .addCase(getAllMyAttack.pending, (state) => {
//         state.status = DataStatus.LOADING;
//         state.error = null;
//         state.organiz = null;
//       })
//       .addCase(getAllMyAttack.fulfilled, (state, action) => {
//         // console.log({ action });
//         state.status = DataStatus.SUCCESS;
//         state.error = null;
//         state.organiz = action.payload as unknown as string[];
//       })
//       .addCase(getAllMyAttack.rejected, (state, action) => {
//         state.status = DataStatus.FAILED;
//         state.error = action.error as string;
//         state.organiz = null;
//       });
//   },
// });


// export default organizSlice;
