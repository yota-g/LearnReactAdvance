//CSSModuleを使用する時は、ファイル名に.modulesを入れる。
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      {/* これがCSSModuleの使用方法。 */}
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};
