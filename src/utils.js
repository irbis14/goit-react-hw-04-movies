const windowsScrolling = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
};

export { windowsScrolling };
