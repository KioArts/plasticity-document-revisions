// ── components/SideBySide.jsx ───────────────────────────────
import React from "react";

/**
 * A simple, responsive container that places its children
 * side‑by‑side (or wraps them on narrow screens) and keeps the
 * whole block centred.
 *
 * Props
 *   children   – any React nodes (images, figures, etc.)
 *   gap        – space between items (default: "1rem")
 *   maxWidth   – maximum width of the whole container (default: "100%")
 */
export const SideBySide = ({
  children,
  gap = "1rem",
  maxWidth = "100%",
}) => {
  /* -----------------------------------------------------------
   * 1️⃣  Container style – CSS Grid
   * ----------------------------------------------------------- */
  const containerStyle = {
    display: "grid",
    // Two columns, each taking up at least 0px and sharing the space equally.
    // `auto-fit` + `minmax(0, 1fr)` makes the grid collapse to a single column
    // when the viewport is too narrow.
    gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
    gap,
    maxWidth,
    margin: "0 auto",          // centre the grid itself
    justifyItems: "center",    // centre each child inside its grid cell
  };

  /* -----------------------------------------------------------
   * 2️⃣  Strip away the <p> wrapper that Markdown may add.
   *     We walk the children tree and return the innermost element
   *     that is NOT a <p>.  This works for:
   *       • ![alt](src)   → <p><img …/></p>
   *       • <img …/>      → <img …/>
   * ----------------------------------------------------------- */
  const unwrapParagraph = child => {
    if (!React.isValidElement(child)) return child;
    // If the element is a <p> and its only child is an <img>, return that <img>.
    if (child.type === "p") {
      const inner = React.Children.toArray(child.props.children).find(
        c => React.isValidElement(c) && c.type === "img"
      );
      return inner ? inner : child; // fall back to the <p> if we can’t find an <img>
    }
    return child;
  };

  const cleanedChildren = React.Children.map(children, unwrapParagraph);

  return <div style={containerStyle}>{cleanedChildren}</div>;
};