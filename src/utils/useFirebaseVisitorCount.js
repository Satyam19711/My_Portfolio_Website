import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

export default function useFirebaseVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const countRef = ref(db, "visitorCount");

    async function updateCount() {
      const snapshot = await get(countRef);

      if (snapshot.exists()) {
        const newCount = snapshot.val() + 1;
        await set(countRef, newCount);
        setCount(newCount);
      } else {
        await set(countRef, 1);
        setCount(1);
      }
    }

    updateCount();
  }, []);

  return count;
}
