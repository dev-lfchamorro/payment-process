import {
  Action,
  Reducer,
  Store,
  UnknownAction,
  legacy_createStore as createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer<unknown, Action>
);

const configureStore = () => {
  return createStore(persistedReducer);
};

const store = configureStore();
const persistor = persistStore(store as Store<any, UnknownAction, unknown>);

export { persistor, store };

export type AppState = ReturnType<typeof persistedReducer>;
