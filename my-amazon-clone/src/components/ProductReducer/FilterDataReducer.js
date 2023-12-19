

const FilterDataReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA":


            const sortByName =  action.payload.sort((a, b) => {
                return b.title - a.title
            })


            return {
                ...state,
                filter_data: [...action.payload],
                all_data: [...action.payload],
                sortItem:sortByName
            };  









        default:
            return state
    }

}

export default FilterDataReducer