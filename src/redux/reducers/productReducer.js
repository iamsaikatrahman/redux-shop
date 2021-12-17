import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Saikat",
      category: "Programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
