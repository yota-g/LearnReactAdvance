import { memo } from "react";
//memoをimportすることで親コンポの更新で毎回実行されなくなる。
//コンポの実行部分のアロー関数をmemoで囲む

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
//memoで囲むことで親の再レンダリングで不要なレンダリングを起こさないようになる。
//複数のコンポで作成されているものや今後肥大化するものはmemoを使用
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChileAreaがレンダリングされた");
  const data = [...Array(2000).keys()];
  //2000件のデータを入れることができる。
  // console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  //再レンダリング(stateの更新が親コンポであると)されたコンポーネント配下の子要素は再レンダリングされる
  //負荷が高い子要素があると負荷が高くなってしまう。
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
