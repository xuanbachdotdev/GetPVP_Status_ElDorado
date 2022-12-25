import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
      return ( <div classname={cx("wrapper")}><h1>ABC</h1></div> );
}

export default Home;