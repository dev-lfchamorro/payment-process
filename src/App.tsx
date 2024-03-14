import { Suspense } from "react";
import "./App.scss";
import AppRouter from "./navigation/AppRouter";

function App() {
  return (
    <div className="App">
      <Suspense>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
