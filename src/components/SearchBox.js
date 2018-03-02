import React from 'react';

const searchBox = ({changed, searchValue}) => {
  return (
    <div className="pa2 ">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={changed}
        value={searchValue}
      />
    </div>
  );
};

export default searchBox;
