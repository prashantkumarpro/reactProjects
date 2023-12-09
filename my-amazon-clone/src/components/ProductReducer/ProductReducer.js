const ProductReducer = (state, action) => {
  switch (action.type) {
    case "MY_API_DATA":
      return {
        ...state,
        products: action.payload, // Update the products array with the new data
        isError: false, // Reset the error state when data is successfully fetched
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
