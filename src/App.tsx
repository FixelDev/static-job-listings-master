import React, {useState} from 'react';
import FilterPanel from './components/FilterPanel';
import JobListingPanel from './components/JobListingPanel';
import './css/style.css';

function App() {
    const[activeFilters, setActiveFilters] = useState<string[]>([]);

    function addFilter(filter:string){
        setActiveFilters(prevActiveFilters => {
            return prevActiveFilters.find(currentFilter => currentFilter === filter) ? prevActiveFilters : [...prevActiveFilters, filter];
        })
    }

    function removeFilter(filter:string){
        setActiveFilters(prevActiveFilters => {
            return prevActiveFilters.filter(currentFilter => currentFilter !== filter);
        })
    }

    function clearActiveFilters(){
        setActiveFilters([]);
    }


    return (
        <>
            <header>
            </header>

            {
                activeFilters.length !== 0 && 
                <div className="container">
                    <FilterPanel
                        activeFilters={activeFilters}
                        onFilterRemoveClick={removeFilter}
                        onClearFiltersClick={clearActiveFilters}
                    />
                </div>

            }

            <main>
                <div className="container">
                    <JobListingPanel
                        onTagClick={addFilter}
                        activeFilters={activeFilters}
                    />
                </div>
            </main>
        </>
        
    );
}

export default App;
