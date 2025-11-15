import { useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkynpza";

export async function notifyVisitor(payload = {}) {
  const body = {
    message: payload.message ?? "New visitor opened the portfolio",
    page: payload.page ?? window.location.href,
    time: payload.time ?? new Date().toISOString(),

    ...payload.extra,
  };

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Formspree error");
    }

    return { ok: true, data };
  } catch (error) {
    console.error("notifyVisitor error:", error);
    return { ok: false, error: error.message || String(error) };
  }
}

export function useNotifyOnVisit(options = {}) {
  useEffect(() => {
    const payload = {
      email: "smauryachs44@gmail.com",
      message: options.message ?? "New visitor opened the portfolio",
      page: window.location.href,
      time: new Date().toISOString(),
      extra: options.extra ?? {},
    };

    notifyVisitor(payload).then((result) => {
      if (!result.ok) {
        console.warn("Visitor notify failed:", result.error);
      } else {
        console.log("Visitor notify success:", result.data);
      }
    });
  }, []);
}
