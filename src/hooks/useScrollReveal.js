import { useEffect } from "react";

// Observa todos os elementos com [data-reveal] e adiciona .is-visible
// quando entram na tela. A animação roda apenas uma vez por elemento.
function useScrollReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
