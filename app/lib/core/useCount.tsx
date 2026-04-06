import { useState } from "react";

export default function useCount() {
  const [data, setData] = useState(0);
  const incremental = () => {
    setData((prev) => prev + 1);
  };
  return [data, incremental] as const;
}
