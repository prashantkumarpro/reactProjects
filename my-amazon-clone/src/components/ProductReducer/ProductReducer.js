const ProductReducer = (state, action) => {


  switch (action.type) {


    case "API_LOADING":
      return {
        ...state,
        isError: false,
        isLoading: true
      };

    case "MY_API_DATA":
      return {
        ...state,
        products: action.payload, // Update the products array with the new data
        isError: false, // Reset the error state when data is successfully fetched
        isLoading: false,
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
