import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../helper/helper";
import { endPoints } from "../../endpoints/endPoints";

const initialState = {
  isLoading: false,
  createEmployeeLoading: false,
  removeEmployeeLoding: false,
  employeeList: [] | null,
  singleEmployee: null,
};

export const createEmployee = createAsyncThunk(
  "createEmployee",
  async (payload) => {
    const res = await axiosInstance.post(endPoints?.createEmployee, payload);
    return res?.data;
  }
);

export const getAllEmployees = createAsyncThunk("getAllEmployees", async () => {
  const res = await axiosInstance.get(endPoints?.getEmployees);
  return res?.data;
});

export const getEmployee = createAsyncThunk("getEmployee", async (id) => {
  const res = await axiosInstance.get(`${endPoints?.getEmployee}/${id}`);
  return res?.data;
});

export const updateEmployee = createAsyncThunk(
  "updateEmployee",
  async ({ id, body }) => {
    const res = await axiosInstance.put(
      `${endPoints?.update_employee}/${id}`,
      body
    );
    return res?.data;
  }
);

export const deleteEmployee = createAsyncThunk("deleteEmployee", async (id) => {
  const res = await axiosInstance.delete(`${endPoints?.delete_employee}/${id}`);
  return res?.data;
});

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // get all employees

      .addCase(getAllEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEmployees.fulfilled, (state, { payload }) => {
        if (payload.isSuccess) {
          state.isLoading = false;
          state.employeeList = payload?.data;
        }
      })
      .addCase(getAllEmployees.rejected, (state) => {
        state.isLoading = false;
      })

      // Create Employee
      .addCase(createEmployee.pending, (state) => {
        state.createEmployeeLoading = true;
      })
      .addCase(createEmployee.fulfilled, (state, { payload }) => {
        if (payload.isSuccess) {
          state.createEmployeeLoading = false;
        }
      })
      .addCase(createEmployee.rejected, (state) => {
        state.createEmployeeLoading = false;
      })

      // Get Single Employee
      .addCase(getEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployee.fulfilled, (state, { payload }) => {
        if (payload.isSuccess) {
          state.isLoading = false;
          state.singleEmployee = payload?.data;
        }
      })
      .addCase(getEmployee.rejected, (state) => {
        state.isLoading = false;
      })

      // Update Employee
      .addCase(updateEmployee.pending, (state) => {
        state.createEmployeeLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, { payload }) => {
        if (payload.isSuccess) {
          state.createEmployeeLoading = false;
          state.singleEmployee = payload?.data;
        }
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.createEmployeeLoading = false;
      })

      // Delete Employee
      .addCase(deleteEmployee.pending, (state) => {
        state.removeEmployeeLoding = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, { payload }) => {
        state.removeEmployeeLoding = false;
      })
      .addCase(deleteEmployee.rejected, (state) => {
        state.removeEmployeeLoding = false;
      });
  },
});

export default employeeSlice;
