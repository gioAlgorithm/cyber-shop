import { RefObject, useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
  enabled: boolean = true,
) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (event: AnyEvent) => {
      const el = ref.current;
      if (!el) return;
      if (el.contains(event.target as Node)) return;
      onOutsideClick();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, onOutsideClick, enabled]);
}
