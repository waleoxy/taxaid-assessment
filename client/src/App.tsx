import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app-router";

function App() {
  return (
    <>
      <RouterProvider
        router={appRouter}
        fallbackElement={<span>loading</span>}
      />
    </>
  );
}

export default App;
