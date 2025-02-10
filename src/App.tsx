import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { MathJaxContext } from "better-react-mathjax";



function App() {
  return (
    <>
      <MathJaxContext >
        <RouterProvider router={router} />
      </MathJaxContext>
    </>
  );
}

export default App;
