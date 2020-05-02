const initState = {
    albums: [],
    photos: [],
    users: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "DISPLAY_ALBUMS":
           return {...state,
           albums: action.payload
           }

           case "DISPLAY_PHOTOS":
            return {...state,
            photos: action.payload
            }

            case "DISPLAY_USERS":
                return {...state,
                users: action.payload
                }
          default:
            return state;
      }
}

export default rootReducer;