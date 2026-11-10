// Styles are imported first so webpack compiles app/src/scss/styles.scss
// (selective Bootstrap 5.3: grid + containers + accordion) into app/dist/styles.css.
import "../scss/styles.scss";

// Minimal Bootstrap JavaScript: only the Collapse plugin (no Popper needed).
// Powers the FAQ accordion via data-bs-toggle="collapse".
import "bootstrap/js/dist/collapse";

console.log("bundle.js loaded: Bootstrap 5.3 selective build (grid + containers + accordion, Collapse JS)");
