import { Dispatch } from "react"

export interface IPhoneItem {
    id: string
    name: string
    surname: string
    phoneNumber: number
}

export interface IState {
    contacts: IPhoneItem[]
}

export interface IAction {
    type: Types
    payload: unknown
}


export enum Types {
    ADD_PHONE_NUMBER,
    DELETE_PHONE_NUMBER,
    SET_CONTACTS
}

export interface IContext {
    state: IState
    dispatch: Dispatch<IAction>
}