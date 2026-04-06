import outMain from "@/lib/api/out";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import useCount from "@/lib/core/useCount";
export default function Home() {
  const [count, aumentar] = useCount();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    outMain().then((res) => setData(res));
  }, []);

  return (
    <div className={styles.Home}>
      <span className={styles.title}>{data.titles}</span>
      <button onClick={aumentar} className={styles.btn}>
        {count}
      </button>
    </div>
  );
}
