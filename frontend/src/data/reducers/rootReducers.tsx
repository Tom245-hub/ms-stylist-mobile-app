import { combineReducers } from "redux";
import stylist from "./stylistReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  stylist,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
