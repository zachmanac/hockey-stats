import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchFormProps {
  onSearch: (fullName: string) => any;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {

  const [fullName, setFullName] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fullName.split(' ').length <= 1) {
      setShowErrorMessage(true);
      return; // Show error message if there's only one word or no words
    }

    onSearch(fullName);
    setShowErrorMessage(false);
  };

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col mr-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            Search for Player Stats
          </label>
          <div className="flex flex-row space-x-2">
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter player's full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Search
              </button>
            </div>
          </div>
          {showErrorMessage && <div className="text-red-500" >Please enter the full name.</div>}
        </div>
      </form>
    </div>
  )
};

export default SearchForm;