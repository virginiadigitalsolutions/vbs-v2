"use client";

import { useEffect } from "react";

const CHUNK_RELOAD_KEY = "vbs-chunk-reload-attempted";

function isChunkLoadError(message) {
  if (!message) {
    return false;
  }

  const normalized = String(message).toLowerCase();

  return (
    normalized.includes("loading chunk") ||
    normalized.includes("chunkloaderror") ||
    normalized.includes("failed to fetch dynamically imported module")
  );
}

export default function ChunkReloadHandler() {
  useEffect(() => {
    const reloadIfNeeded = (message) => {
      if (!isChunkLoadError(message)) {
        return;
      }

      if (sessionStorage.getItem(CHUNK_RELOAD_KEY) === "1") {
        return;
      }

      sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
      window.location.reload();
    };

    const handleWindowError = (event) => {
      reloadIfNeeded(event?.message || event?.error?.message);
    };

    const handlePromiseRejection = (event) => {
      reloadIfNeeded(event?.reason?.message || event?.reason);
    };

    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handlePromiseRejection);

    const resetTimer = window.setTimeout(() => {
      sessionStorage.removeItem(CHUNK_RELOAD_KEY);
    }, 3000);

    return () => {
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handlePromiseRejection);
      window.clearTimeout(resetTimer);
    };
  }, []);

  return null;
}
