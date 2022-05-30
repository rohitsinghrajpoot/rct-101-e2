import React from "react";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <stack data-cy="product">
      <image data-cy="product-image" />
      <text data-cy="product-category">Category</text>
      <tag>
        <taglabel data-cy="product-gender">Gender</taglabel>
      </tag>
      <heading data-cy="product-title">Title</heading>
      <box data-cy="product-price">Price</box>
    </stack>
  );
};

export default Product;
