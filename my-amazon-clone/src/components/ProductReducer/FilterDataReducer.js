

const FilterDataReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA":

            return {
                ...state,
                filter_data: [...action.payload],
                all_data: [...action.payload],

            };

        case "SORT_FILTER_DATA":
          


            const sortByName = [...action.payload].sort((a, b) => {
                return b.price - a.price
            })

            return {
                ...state,
              
            }





        default:
            return state
    }

}

export default FilterDataReducer