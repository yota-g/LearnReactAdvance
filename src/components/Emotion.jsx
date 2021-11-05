// /** @jsxRuntime classic **/ //Syntax Errorが出るときに使用する。
/** @jsx jsx **/
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled"; //emotion/reactからcssをimportする。
//@emotion/reactをimportする。 先頭にお決まりのjsxを記載する。
//reactでemotionを使用するときのルール
//Emotionは色々な使用方法がある。
export const Emotion = () => {
  //cssと同じ書き方ができる。
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  //emotionの場合は、css＝で記載する。
  //reactのdefaultのInlineStyleと同じような書き方もできる。
  const titleStyle = css({
    margin: "0px",
    color: "#3d84a8"
  });
  //inlineStyleと同様にキャメルケースでの記載、オブジェクトスタイルでの記載ができる。

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

//importした@emotion/styledからstyledをimportして、styledComponentsと同じような記載もできる。
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
