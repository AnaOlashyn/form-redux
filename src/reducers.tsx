import { SET_VALUE } from './actions';

export const initialState = {
  formValues: {}
}

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, formValues: { ...state.formValues, [action.payload.name]:action.payload.value } };
    
    default:
      return state
  }
}
