

const FilterDataReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA":

            return {
                ...state,
                filter_data: [...action.payload],
                all_data: [...action.payload],

            };

        case "SORT_FILTER_DATA":
            let sortedData = []

            switch (action.payload) {
                case "A-Z":
                    sortedData = [...state.filter_data].sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case "Z-A":
                    sortedData = [...state.filter_data].sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case "price low to high":
                    sortedData = [...state.filter_data].sort((a, b) => a.price - b.price);
                    break;
                case "price high to low":
                    sortedData = [...state.filter_data].sort((a, b) => b.price - a.price);
                    break;
                default:
                    sortedData = state.filter_data;
                    break;
            }
            return {
                ...state,
                filter_data: sortedData,
                sortData: action.payload,
            }

            case "SORT_FILTER_CATEGORY":
                let categoryData = [];
                const lowerCasePayload = action.payload.toLowerCase(); // Convert payload to lowercase
    
                switch (lowerCasePayload) {
                    case "all":
                        categoryData = [...state.filter_data];
                        break;
                    case "men's clothing":
                        categoryData = [...state.filter_data].filter(product =>
                            product.category.toLowerCase() === "men's clothing"
                        );
                        break;
                    case "women's clothing":
                        categoryData = [...state.filter_data].filter(product =>
                            product.category.toLowerCase() === "women's clothing"
                        );
                        break;
                    case "electronics":
                        categoryData = [...state.filter_data].filter(product =>
                            product.category.toLowerCase() === "electronics"
                        );
                        break;
                    default:
                        categoryData = state.filter_data;
                        break;
                }
    
                return {
                    ...state,
                    filter_data: categoryData,
    
                };
    
    

        default:
            return state
    }

}

export default FilterDataReducer