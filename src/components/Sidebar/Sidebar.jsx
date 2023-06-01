import { BsGear, BsSearch, BsCalendar4 } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi";
import styles from "./Sidebar.module.scss";
// import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <nav className={styles["wrapper"]}>
      <div className={styles["navigation"]}>
        <div className={styles["logo"]}>Q</div>
        <div className={styles["nav"]}>
          <BiHome className={styles["icon"]} />
          <LuMessagesSquare className={styles["icon--active"]} />
          <HiOutlineChartPie className={styles["icon"]} />
          <BsSearch className={styles["icon"]} />
          <BsCalendar4 className={styles["icon"]} />
        </div>
      </div>
      <BsGear size="24" />
    </nav>
  );
};

export default Sidebar;
