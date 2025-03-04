import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { JobProps } from '@/interfaces';
import { FILTERS } from '@/constants/filters';

interface JobState {
    jobs: JobProps[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    filters: typeof FILTERS;
}

const initialState: JobState = {
    jobs: [],
    status: 'idle',
    error: null,
    filters: FILTERS,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await axios.get('/jobs');
    return response.data;
});

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Partial<JobState['filters']>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = FILTERS;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<JobProps[]>) => {
                state.status = 'succeeded';
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { setFilters, clearFilters } = jobSlice.actions;
export default jobSlice.reducer;
