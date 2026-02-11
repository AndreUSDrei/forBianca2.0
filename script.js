// YouTube embed may fail with error 153 when opening the page from file://.
// In that case, hide the iframe and keep the direct YouTube button visible.
if (window.location.protocol === "file:") {
  document.documentElement.classList.add("is-local-file");
}
