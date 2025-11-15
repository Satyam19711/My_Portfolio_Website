import { useEffect, useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
  getDatabase,
  ref,
  onDisconnect,
  onValue,
  set,
} from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export default function useOnlineUsers() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    let userId = sessionStorage.getItem("userId");
    if (!userId) {
      userId = "user_" + Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem("userId", userId);
    }

    const userRef = ref(db, `onlineUsers/${userId}`);

    set(userRef, true);

    onDisconnect(userRef).remove();

    const onlineUsersRef = ref(db, "onlineUsers");

    onValue(onlineUsersRef, (snapshot) => {
      if (snapshot.exists()) {
        setOnlineCount(Object.keys(snapshot.val()).length);
      } else {
        setOnlineCount(0);
      }
    });
  }, []);

  return onlineCount;
}
