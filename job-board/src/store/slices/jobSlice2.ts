import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JOBSLISTINGSAMPLE } from '@/constants'; // Import constant data
import { JobProps } from '@/interfaces';

interface JobState {
  jobs: JobProps[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  filters: { location: string; experience: string };
}

const initialState: JobState = {
  jobs: [],
  status: 'idle',
  error: null,
  filters: { location: '', experience: '' },
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<JobProps[]>) => {
      state.jobs = action.payload;
    },
    setFilters: (state, action: PayloadAction<{ location: string; experience: string }>) => {
      state.filters = action.payload;
    },
  },
});

export const fetchJobs = () => async (dispatch: any) => {
  dispatch(setJobs(JOBSLISTINGSAMPLE)); // Load jobs from constants
};

export const { setJobs, setFilters } = jobSlice.actions;
export default jobSlice.reducer;
