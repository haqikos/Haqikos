"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);

        // Send to analytics if needed
        if (lastEntry.startTime > 2500) {
          console.warn("LCP is above recommended threshold");
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        console.warn("LCP monitoring not supported");
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime);

          if (entry.processingStart - entry.startTime > 100) {
            console.warn("FID is above recommended threshold");
          }
        });
      });

      try {
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        console.warn("FID monitoring not supported");
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log("CLS:", clsValue);

            if (clsValue > 0.1) {
              console.warn("CLS is above recommended threshold");
            }
          }
        });
      });

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.warn("CLS monitoring not supported");
      }
    }

    // Monitor page load time
    const pageLoadTime = performance.now();
    window.addEventListener("load", () => {
      const loadTime = performance.now() - pageLoadTime;
      console.log("Page load time:", loadTime);

      if (loadTime > 3000) {
        console.warn("Page load time is above recommended threshold");
      }
    });

    // Monitor memory usage (if available)
    if ("memory" in performance) {
      const checkMemory = () => {
        const memory = performance.memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);

        console.log(`Memory usage: ${usedMB}MB / ${totalMB}MB`);

        if (usedMB > 100) {
          console.warn("High memory usage detected");
        }
      };

      // Check memory every 30 seconds
      const memoryInterval = setInterval(checkMemory, 30000);

      return () => clearInterval(memoryInterval);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
