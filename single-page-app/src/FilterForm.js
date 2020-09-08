import React from 'react'

const FilterForm = ({filter, setFilter}) => {
  return (
    <div>
      find countries
      <form>
        <input
          value    = {filter}
          onChange = {(event) => {setFilter(event.target.value); }}
        />
      </form>
    </div>
  )
}

export default FilterForm
