import ELEMENTS from '../../data/dummy-data';

const initialState = {
  availableProducts: ELEMENTS,
  userProducts: ELEMENTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  switch (action.type) {
  }
  return state ;
};
