//人気上位のライブラリ
import styled from "styled-components";
//styled-componentsからimportしていく。
//styleを当てたコンポーネントを代入していくという形になる。

export const StyledComponents = () => {
  return (
    // <div>
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
    //
  );
};

//変数名はわかればいい。 styledの後に対象のタグを記載する。
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
//バッククォートの中にcssのを記載していく。
//Containerを元々divがあったところに使用することで適用することができる。
//オーソドックスな使用方法。
//後から見たときにこれがスタイルを当てたものか、他のコンポーネントからimportしたコンポーネントなのかぱっと見でわからない。
//ぱっと見でわかるように頭文字にSを入れている。Styleの意味。ローカルルール
//チーム開発だと共通ルールが必要
const STitle = styled.p`
  margin: 0px;
  color: #3d84a8;
`;

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
  /* hoverの部分も適用される。 sassと同じ記法がかける。  移行する際にも便利 */
`;
