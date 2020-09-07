import React from 'react'

const FilterForm = ({peopleFilter, setPeopleFilter}) => {
  return (
    <div>
      filter names:
      <form>
        <input
          value    = {peopleFilter}
          onChange = {(event) => {setPeopleFilter(event.target.value); }}
        />
      </form>
    </div>
  )
}

export default FilterForm
