import React, {useState} from 'react'
import Filter from './Filter'
import {nanoid} from 'nanoid'

type Props = {
    activeFilters: string[]
    onFilterRemoveClick:(name:string) => void
    onClearFiltersClick:() => void
}

type Filter = JSX.Element

function FilterPanel(props:Props) {
    const filterElements:Filter[] = props.activeFilters.map(filter =>{
        return (
            <Filter
                key={nanoid()}
                name={filter}
                onFilterRemoveClick={props.onFilterRemoveClick}
            />
        )
    })

    return (
        <div className="filter-panel flex card">
            <div className="filters-container flex">
                {filterElements}
            </div>        
            <button className="clear-filters-btn" onClick={props.onClearFiltersClick}>Clear</button>
        </div>
    )
}

export default FilterPanel