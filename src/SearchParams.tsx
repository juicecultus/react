import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from 'react';
import pet, { ANIMALS, Animal } from '@frontendmasters/pet';
import Results from './Results';
import UseDropdown from './useDropdown';
import ThemeContext from './ThemeContext';
import { RouteComponentProps } from '@reach/router';

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = UseDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = UseDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className='search-params'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor='theme'>
          Theme
          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            onBlur={(event) => setTheme(event.target.value)}
          >
            <option value='peru'>Peru</option>
            <option value='darkblue'>Dark Blue</option>
            <option value='mediumorchid'>Medium orchid</option>
            <option value='chartreuse'>Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
