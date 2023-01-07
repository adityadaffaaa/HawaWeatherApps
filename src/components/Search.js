import { React, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIURL, geoApiHawa } from "./api";
const Search = ({ handleOnSearchChange }) => {
  return (
    <section className="flex flex-col items-center w-full mt-6 lg:mt-0 gap-3 lg:flex-row lg:justify-between">
      <img className="h-[42px] lg:h-[76px]" src="Assets/Logo.png" alt="" />
      <SearchAsync onSearchChange={handleOnSearchChange} />
    </section>
  );
};

export default Search;

const SearchAsync = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${geoAPIURL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiHawa)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return <AsyncPaginate placeholder="Cari kota Anda" className="text-paragraph1 w-full lg:w-[480px] cursor-pointer" debounceTimeout={600} value={search} onChange={handleOnChange} loadOptions={loadOptions} />;
};
