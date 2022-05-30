import React from "react";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;

  return (
    <buttongroup>
      <button data-cy="pagination-first-button">First</button>
      <button data-cy="pagination-previous-button">Previous</button>
      <select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </select>
      <button data-cy="pagination-next-button">Next</button>
      <button data-cy="pagination-last-button">Last</button>
    </buttongroup>
  );
};

export default Pagination;
