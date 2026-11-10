// Styles are imported first so webpack compiles app/src/scss/styles.scss
// (selective Bootstrap 5.3 grid + containers) into app/dist/styles.css.
import "../scss/styles.scss";

// NOTE: Bootstrap JavaScript is intentionally NOT imported here —
// this project ships only the grid and containers CSS.
console.log("bundle.js loaded: Bootstrap 5.3 grid-only build (no Bootstrap JS)");
