(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    navigation: document.querySelector("[data-navigation]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  refs.navigation.addEventListener("click", handleNavigationClick);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }

  function handleNavigationClick(e) {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
      toggleModal();
    }
  }
})();
