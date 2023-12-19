import React, { useState } from 'react';

const FilterComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3']; // Your filter options

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search logic here if needed
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Implement any logic you need when an option is selected
    setIsOpen(false); // Close the filter after selecting an option
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {/* Your search icon goes here */}
        Search
      </div>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul>
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((option) => (
                <li key={option} onClick={() => handleOptionSelect(option)}>
                  {option}
                </li>
              ))}
          </ul>
        </div>
      )}
      {selectedOption && (
        <div>
          {/* Render content based on the selected option */}
          Selected Option: {selectedOption}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
