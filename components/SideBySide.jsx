// components/SideBySide.jsx
import React from "react";

/**
 * Flex container that puts its children side‑by‑side, centered,
 * and responsive.  No external dependencies.
 *
 * Props
 *   children   – any React nodes (images, figures, etc.)
 *   gap        – space between items (default "1rem")
 *   maxWidth   – max width of the whole container (default "100%")
 *   childRatio – fraction of the container each child should occupy
 *                (default 0.5 → 50 % of the width, minus half the gap)
 */
export const SideBySide = ({
  children,
  gap = "1rem",
  maxWidth = "100%",
  childRatio = 0.5,
}) => {
  // ---------- container (wrapper) ----------
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",          // wrap on tiny screens
    gap,
    alignItems: "center",
    justifyContent: "center",  // <‑‑ centre the whole group
    maxWidth,
    margin: "0 auto",           // centre the container itself
  };

  // ---------- compute width for each child ----------
  // Example: childRatio = 0.5, gap = "2rem"
  // → width = calc(50% - 1rem)
  const numericGap = parseFloat(gap); // strip the unit (assumes rem)
  const childWidth = `calc(${childRatio * 100}% - ${numericGap / 2}rem)`;

  // ---------- clone children and inject the width ----------
  const renderedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child; // safety net

    // Some Markdown parsers wrap the <img> in a <p>.
    // If the child is a <p>, dive one level deeper.
    const inner = child.type === "p" && React.Children.only(child.props.children);

    if (inner && React.isValidElement(inner) && inner.type === "img") {
      // Clone the <img> inside the <p>
      const newImg = React.cloneElement(inner, {
        style: {
          ...(inner.props.style || {}),
          width: childWidth,
          height: "auto",
        },
      });
      // Return the <p> with the newly‑styled <img>
      return React.cloneElement(child, {}, newImg);
    }

    // Normal case – child is already an <img> (or any element you want to size)
    return React.cloneElement(child, {
      style: {
        ...(child.props.style || {}),
        width: childWidth,
        height: "auto",
      },
    });
  });

  return <div style={containerStyle}>{renderedChildren}</div>;
};