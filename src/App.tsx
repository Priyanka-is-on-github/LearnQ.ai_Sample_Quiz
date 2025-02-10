import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["input/asciimath", "output/chtml"] },
  tex: { inlineMath: [["\\(", "\\)"]], displayMath: [["\\[", "\\]"]] },
  
};

function App() {
  return (
    <>
      <MathJaxContext config={config}>
        <RouterProvider router={router} />
      </MathJaxContext>
    </>
  );
}

export default App;
