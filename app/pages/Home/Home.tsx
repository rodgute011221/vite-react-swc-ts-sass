import outMain from "@/api/out";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    outMain().then((res) => setData(res));
  }, []);

  return (
    <div className={styles.Home}>
      <span className={styles.title}>{data.titles}</span>
    </div>
  );
}
