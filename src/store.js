import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  packageReducers,
  categoriesReducers,
  countriesReducers,
  viewcategoryReducers,
  generatedTourReducers,
} from "./reducers/packageReducer";

const reducer = combineReducers({
  packages: packageReducers,
  categories: categoriesReducers,
  countries: countriesReducers,
  viewcategory: viewcategoryReducers,
  generatedTour: generatedTourReducers,
});

let initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
