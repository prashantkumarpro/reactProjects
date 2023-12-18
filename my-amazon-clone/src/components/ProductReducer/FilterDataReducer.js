

const FilterDataReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA":
            return {
                ...state,
                filter_data: action.payload,
                all_data:action.payload

            };


        default:
            return state
    }

}

export default FilterDataReducer