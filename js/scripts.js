import Toast from "bootstrap/js/src/toast.js";

  let toasts = [];
  Array.from(document.querySelectorAll(".toast")).forEach((toastNode) =>
    toasts.push(new Toast(toastNode))
  );

  setTimeout(() => {
    toasts.forEach((toast) => toast.show());
  }, 2000);