import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  return (
    <>
      <button my={4} data-cy="add-product-button">
        ADD New Product
      </button>
      <modal>
        <modalbody pb={6}>
          <input data-cy="add-product-title" placeholder="title" />
          <select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </select>
          <radiogroup data-cy="add-product-gender">
            <radio data-cy="add-product-gender-male">Male</radio>
            <radio data-cy="add-product-gender-female">Female</radio>
            <radio data-cy="add-product-gender-unisex">Unisex</radio>
          </radiogroup>
          <input data-cy="add-product-price" />
          <button data-cy="add-product-submit-button">Create</button>
        </modalbody>
      </modal>
    </>
  );
};

export default AddProduct;
