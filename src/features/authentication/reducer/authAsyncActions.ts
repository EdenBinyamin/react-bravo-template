/* eslint-disable no-unused-vars */
import { createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { authLoginRepo } from '../repo/authRepo';
import { email } from '../types/authTypes';
import { AuthState, AUTH_SLICE } from './authSlice';

const LOGIN = 'login';

export const getAllApps = createAsyncThunk(
  `auth/${LOGIN}`,
  async ({ email, password }: { email: email; password: string }) => {
    const user = await authLoginRepo(email, password);
    return user;
  },
);

export const authBuilder: (
  builder: ActionReducerMapBuilder<AuthState>,
) => void = builder => {
  builder
    .addCase(getAllApps.pending, state => {
      state.isLoading = true;
    })
    .addCase(getAllApps.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(getAllApps.rejected, state => {
      state.isLoading = false;
    });
};
