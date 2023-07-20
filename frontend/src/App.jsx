import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayerInfoPage from "./pages/PlayerInfoPage";
import HomePage from "./pages/HomePage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/players",
    element: <HomePage />,
  },
  {
    path: "/player/infos/:id",
    element: <PlayerInfoPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
