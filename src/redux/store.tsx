import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";

export default function configureStore(
    initialState?: RootState
  ): Store<RootState> {
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(rootReducer, initialState!);
    if (module.hot) {
      module.hot.accept("./rootReducer", () => {
        const nextRootReducer = require("./rootReducer").default;
        store.replaceReducer(nextRootReducer);
      });
    }
  
    return store;
  }