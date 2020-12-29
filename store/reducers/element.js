import ELEMENTS from '../../data/dummy-data';
import {EDIT_ELEMENTS,SET_ELEMENTS} from "../actions/elements";


const initialState = {
  availableElements: ELEMENTS,
  // userProducts: ELEMENTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ELEMENTS:
      return {
        availableElements:action.elements
      }
    case EDIT_ELEMENTS:
      return state
  }
  return state;
};
