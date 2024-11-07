"use client";

import { useEffect } from "react";

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    async function init() {
      if (typeof window !== "undefined") {
        const { worker } = await import("./mocks/browser");
        await worker.start();
      }
    }
    init();
  }, []);
  return <>{children}</>;
}
