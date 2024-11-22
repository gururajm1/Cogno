'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeEvent() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;

      if (path === "/" && localStorage.getItem("pat-auth")) {
        router.push("/games");
      }
      else if (localStorage.getItem("pro-auth")) {
        router.push("/dashboard");
      }
    }
  }, [router]);

  return (
    <div>
    </div>
  );
}