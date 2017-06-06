//import the actions we need to use
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'

//initial state of the reducer is an obj with a data array, 3 booleans for info
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false

}
//reducer checks for three actions and updates the state accordingly
export default function dataReducer(state = initialState, action) {
    switch (action.type) {

        //informs us we are fetching
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
            //updates data array with new data
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
            //logs an error if we fail to get the data
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true

            }
        default:
            return state
    }
}