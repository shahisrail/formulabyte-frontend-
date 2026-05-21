"use client";

import { useEffect } from "react";

type PageName = "auth" | "contact" | "google-analytics-connector";

export default function PageBehavior({ page }: { page: PageName | string }) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (page === "auth") {
      const shell = document.querySelector(".auth-shell");
      const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".tab"));
      const switchLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-switch]"));
      const setMode = (mode: string) => {
        tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
        shell?.setAttribute("data-mode", mode);
        document.querySelectorAll<HTMLElement>(".mode-label").forEach((el) => {
          el.textContent = mode === "signup" ? "Create account" : "Sign in";
        });
      };
      tabs.forEach((tab) => {
        const handler = () => setMode(tab.dataset.mode || "signin");
        tab.addEventListener("click", handler);
        cleanups.push(() => tab.removeEventListener("click", handler));
      });
      switchLinks.forEach((link) => {
        const handler = (event: Event) => {
          event.preventDefault();
          setMode(link.getAttribute("data-switch") || "signin");
        };
        link.addEventListener("click", handler);
        cleanups.push(() => link.removeEventListener("click", handler));
      });

      const passwordBtns = Array.from(document.querySelectorAll<HTMLButtonElement>(".input-icon-btn"));
      passwordBtns.forEach((button) => {
        const handler = () => {
          const input = button.parentElement?.querySelector<HTMLInputElement>("input");
          if (!input) return;
          input.type = input.type === "password" ? "text" : "password";
        };
        button.addEventListener("click", handler);
        cleanups.push(() => button.removeEventListener("click", handler));
      });
    }

    if (page === "contact") {
      const chips = Array.from(document.querySelectorAll<HTMLElement>(".inquiry-chips .chip"));
      chips.forEach((chip) => {
        const handler = () => {
          chips.forEach((item) => item.classList.remove("active"));
          chip.classList.add("active");
        };
        chip.addEventListener("click", handler);
        cleanups.push(() => chip.removeEventListener("click", handler));
      });

      const copyButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".copy-btn"));
      copyButtons.forEach((button) => {
        const handler = async () => {
          const value = button.getAttribute("data-copy") || button.parentElement?.querySelector(".info-value")?.textContent?.trim() || "";
          try {
            await navigator.clipboard.writeText(value);
            const oldText = button.textContent;
            button.textContent = "Copied";
            button.classList.add("copied");
            window.setTimeout(() => {
              button.textContent = oldText || "Copy";
              button.classList.remove("copied");
            }, 1600);
          } catch {}
        };
        button.addEventListener("click", handler);
        cleanups.push(() => button.removeEventListener("click", handler));
      });

      const form = document.querySelector<HTMLFormElement>(".contact-form");
      const success = document.querySelector<HTMLElement>(".form-success");
      if (form) {
        const handler = (event: Event) => {
          event.preventDefault();
          success?.classList.add("show");
          form.reset();
        };
        form.addEventListener("submit", handler);
        cleanups.push(() => form.removeEventListener("submit", handler));
      }
    }

    if (page === "google-analytics-connector") {
      const pills = Array.from(document.querySelectorAll<HTMLElement>(".query-pill"));
      pills.forEach((pill) => {
        const handler = () => {
          pills.forEach((item) => item.classList.remove("active"));
          pill.classList.add("active");
        };
        pill.addEventListener("click", handler);
        cleanups.push(() => pill.removeEventListener("click", handler));
      });
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [page]);

  return null;
}
