import { LOAD_CURRENCY } from "./types"

const initialState = {
    currencies: ['UAH', 'USD', 'EUR', 'GBP']
}

let currencyReducer = (state = initialState, type) => {

    switch (type.type) {
        case LOAD_CURRENCY:
            return {
                ...state
            }

        default:
            return state
    }
}
export default currencyReducer
