export const initialState ={
    user : null,
    playlists:[],
    playing: false,
    item:null,
    user:null,
    //remove after finished developing
    // token:'BQDvQxpvdHIuPQ-RKtpOhEsVLaMI6om-iYJQN95_UeYWGRZO8-_-5dSFgF5aHu80QnE7ddrysyaE07GJ-LUqoxR1dtpfP1M4HC7oc8PV_0FxDVLzvS5kF3_Rlj_knjRzC-5o3I-hUS4nN7K9J0Fr0ZX5vSkkAgrf7dEalSqP9L7qWdlz',
}

const reducer = (state,action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' : 
            return {
                ...state,
                user:action.user
            }
        
            case 'SET_TOKEN':
                return {
                    ...state,
                    token:action.token,
                }
            
            case "SET_PLAYLISTS" :
                return {
                    ...state,
                    playlists:action.playlists,
                }

            case "SET_TELUGU_INDIE" :
                return {
                    ...state,
                    telugu_indie: action.telugu_indie,
                }

        default :
            return state;
    }
}

export default reducer