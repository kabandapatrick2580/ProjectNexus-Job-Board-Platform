import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { JobProps } from '@/interfaces';
import { FILTERS } from '@/constants/filters';

interface JobState {
    allJobs: JobProps[];
    jobs: JobProps[];
    locations: string[];
    experienceLevels: string[];
    categories: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    filters: typeof FILTERS;
    jobsPerPage: number;
    currentPage: number;
}

const initialState: JobState = {
    allJobs: [],
    jobs: [],
    locations: [],
    experienceLevels: [],
    categories: [],
    status: 'idle',
    error: null,
    filters: FILTERS,
    jobsPerPage: 10,
    currentPage: 1,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await axios.get('https://job-board-platform.onrender.com/api/job');
    return response.data.results;
});

export const fetchLocations = createAsyncThunk('jobs/fetchLocations', async () => {
    const response = await axios.get('https://job-board-platform.onrender.com/api/job/locations');
    return response.data.results;
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
            state.jobs = state.allJobs;
        },
        applyFilters: (state) => {
            let filteredJobs = state.allJobs;

            if (state.filters.location) {
                filteredJobs = filteredJobs.filter(job => job.location.includes(state.filters.location));
            }

            if (state.filters.experience_level) {
                filteredJobs = filteredJobs.filter(job => job.experience_level === state.filters.experience_level);
            }
            if (state.filters.category) {
                filteredJobs = filteredJobs.filter(job => job.category.includes(state.filters.location));
            }

            state.jobs = filteredJobs;
        },
        setJobsPerPage: (state, action: PayloadAction<number>) => {
            state.jobsPerPage = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<JobProps[]>) => {
                state.status = 'succeeded';
                state.allJobs = action.payload;
                state.jobs = action.payload;

                // Extract unique locations
                state.locations = [...new Set(action.payload.map(job => job.location))];

                // Extract unique experience levels
                state.experienceLevels = [...new Set(action.payload.map(job => job.experience_level))];

                // Extract unique Categories
                state.categories = [...new Set(action.payload.map(job => job.category))];
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(fetchLocations.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.locations = action.payload;
            });
    },
});

export const { setFilters, clearFilters, applyFilters, setJobsPerPage, setCurrentPage } = jobSlice.actions;
export default jobSlice.reducer;
