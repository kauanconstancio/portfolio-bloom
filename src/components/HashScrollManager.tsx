import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function unlockScrollIfStuck() {
  // Radix (Dialog/Sheet/Drawer) pode aplicar scroll-lock no <body>/<html>.
  // Se por algum motivo isso ficar preso, liberamos o scroll quando NÃO há modal aberto.
  const hasOpenDialog = !!document.querySelector('[role="dialog"][data-state="open"]');
  if (hasOpenDialog) return;

  document.body.removeAttribute("data-scroll-locked");
  document.documentElement.removeAttribute("data-scroll-locked");

  // Reset styles commonly applied by scroll lock implementations.
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("width");
  document.documentElement.style.removeProperty("overflow");
}

export function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Em mudanças de hash, tentamos garantir que nada ficou travando o scroll.
    unlockScrollIfStuck();

    const raw = location.hash?.replace(/^#/, "") ?? "";
    const id = raw ? decodeURIComponent(raw) : "";

    // Se hash estiver vazio (ex: href="#"), garante que dá para voltar ao topo.
    if (!id) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    // Espera a renderização/layout antes do scroll.
    requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [location.hash, location.pathname]);

  return null;
}
