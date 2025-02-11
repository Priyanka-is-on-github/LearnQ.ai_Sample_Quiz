
import { MathJax } from "better-react-mathjax";
export const parseQuestion = (questionText: string | number |undefined) => {
    const text = questionText?.toString(); 

    const regex = /([\d+\-*/^()=]+)/g;

    return text?.split(regex).map((part, index) => {
      const trimmedPart = part.trim();

      if (regex.test(trimmedPart)) {
       
        const formattedMath = trimmedPart.replace(
          /(?<=\d)\s*\.\s*(?=[a-zA-Z])|(?<=[a-zA-Z])\s*\.\s*(?=[a-zA-Z])/g,
          ""
        );

        return (
          <MathJax key={index} inline dynamic={true}>
            {`\\(${formattedMath}\\)`}
          </MathJax>
        );
      }

     
      return (
        <span key={index} style={{ marginRight: "5px" }}>
          {trimmedPart}
        </span>
      );
    });
  };