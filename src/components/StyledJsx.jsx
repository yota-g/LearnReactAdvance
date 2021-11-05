//Nuxt.jsにdefaultで入っているのでとりあえずcssを当てるときに便利。
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx-</p>
        <button className="button">FIGHT!!</button>
      </div>
      {/* styledJsxはここでstyleタグを記載していく。 */}
      {/* jsxであることを明記してjsxで記載していく。 */}
      {/* 中身は、cssと同じような書き方が可能。 */}
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0px;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
            // hoverがdefaultでは当たっていない。
            //擬似要素が使えない。pluginで入れることができる。
            //またVSCodeで拡張機能を入れたりすると綺麗にcssみたいに色をつけたりもできる。
          }
        }
      `}</style>
    </>
    //空のフラグメントで囲む必要がある。タグが１つでないといけないから
  );
};
