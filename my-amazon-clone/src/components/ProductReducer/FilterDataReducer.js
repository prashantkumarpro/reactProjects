const sortingData = {
    AtoZ: 'A-Z',
    priceLowToHigh: 'price low to high'

}

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

        default:
            return state
    }

}

export default FilterDataReducer