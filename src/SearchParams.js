import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import UseDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = UseDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = UseDropdown('Breed', '', breeds);

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
