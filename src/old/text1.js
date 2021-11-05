// import { useState, useCallback } from "react";
// import { ChildArea } from "./ChildArea";
// import "./styles.css";

// export default function App() {
//   console.log("App");
//   const [text, setText] = useState("");
//   const [open, setOpen] = useState(false);
//   const onChangeText = (e) => setText(e.target.value);
//   const onClickOpen = () => setOpen(!open);

//   // const onClickClose = () => setOpen(false);
//   const onClickClose = useCallback(() => setOpen(false), [setOpen]);
//   //毎回新しい関数を作成していると認識される。propsが変わっていると認識される。
//   //memoを使用していても子コンポーネントがinputに入力されても実行されてしまう。
//   //処理が変わらないときは同じものを使用すると記載しないといけない。
//   //useCallbackを使用する。useEffect同様第二引数が渡される。みはる値を入れる。
//   //第二引数を空にすると同じものをずっと使用するという選択になる。falseにするだけなら引数がなくてもいい。どちらでも。
//   // const tmp - useMemo(() => 1 + 3,[]);
//   //useMemoをインポート　変数に対してかける。変数自体のメモ化。４が使い回れされる。際レンダリングのたびに計算しなくてもいい。
//   return (
//     <div className="App">
//       <input value={text} onChange={onChangeText} />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//       {/* propsに変化がない限りChildAreaを更新しないようにする。 */}
//     </div>
//   );
// }
