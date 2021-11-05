// import { useState } from "react";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      {/* node-sassをimportして使用する　 */}
      <StyledJsx />
      {/* 　styled-jsxをimportsして使用している。 */}
      <StyledComponents />
      {/* styled-componentsをimport */}
      <Emotion />
      {/* @emotion/styledと@emotion/reactをインポートする。 */}
    </div>
  );
}
