import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters, fetchLocations } from '@/src/store/slices/jobSlice';
import { AppDispatch, RootState } from '@/src/store';

export default function JobFilters() {
    const dispatch:AppDispatch = useDispatch();
    const { filters, locations } = useSelector((state: RootState) => state.jobs);

    // Fetch locations when the component mounts
    useEffect(() => {
        dispatch(fetchLocations());
    }, [dispatch]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilters({ [e.target.name]: e.target.value }));
    };

    return (
        <div className="filter-container">
            {/* Location Filter */}
            <select name="location" value={filters.location} onChange={handleFilterChange}>
                <option value="">All Locations</option>
                {locations.map((location) => (
                    <option key={location} value={location}>
                        {location}
                    </option>
                ))}
            </select>

            {/* Static Categories (Replace with API if needed) */}
            <select name="category" value={filters.category} onChange={handleFilterChange}>
                <option value="">All Categories</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
            </select>

            {/* Static Experience Levels (Replace with API if needed) */}
            <select name="experience_level" value={filters.experience_level} onChange={handleFilterChange}>
                <option value="">All Experience Levels</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
            </select>

            {/* Clear Filters Button */}
            <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>
        </div>
    );
}
