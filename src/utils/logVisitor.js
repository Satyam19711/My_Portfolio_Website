import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function toIST(utcTime) {
  const date = new Date(utcTime);
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
}

export function logVisitor() {
  try {
    const visitorsRef = ref(db, "visitors");
    const newVisitorRef = push(visitorsRef);

    const utcTime = new Date().toISOString();
    const istTime = toIST(utcTime);

    const visitorData = {
      time: utcTime,
      istTime: istTime,
      page: window.location.href,
      ua: navigator.userAgent,
    };

    set(newVisitorRef, visitorData);

    console.log("Visitor stored:", visitorData);
  } catch (error) {
    console.error("Visitor log error:", error);
  }
}
