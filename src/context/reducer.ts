import { IAction, IPhoneItem, IState, Types } from "../types";

export const reducer = (state: IState, action: IAction) => {
    switch(action.type){
        case Types.SET_CONTACTS :
          return {
            ...state,
            contacts: action.payload as IPhoneItem[]
          }
          case Types.DELETE_PHONE_NUMBER: 
          return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload as string)
          }
        default:
            return state
    }
}