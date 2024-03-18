import { Suspense } from "react";
import "./App.scss";
import AppRouter from "./navigation/AppRouter";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
