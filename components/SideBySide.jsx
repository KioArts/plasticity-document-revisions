import React from "react";

/**
 * Flex container that lines up children side‑by‑side.
 * `childRatio` (0‑1) determines how much of the container each child occupies.
 * Default = 0.5 → each child gets ~½ the width (minus half the gap).
 *
 * Props
 *   children   – any React nodes (e.g., images, figures, buttons)
 *   gap        – space between items (default: "1rem")
 *   maxWidth   – max width of the whole container (default: "100%")
 *   childRatio – fraction of the container each child should take
 *                (default: 0.5 → 50 %)
 */
export const SideBySide = ({
  children,
  gap = "1rem",
  maxWidth = "100%",
  childRatio = 0.5,
}) => {
  // Container (wrapper) style
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",          // wrap on narrow screens
    gap,
    alignItems: "center",
    maxWidth,
    margin: "0 auto",           // centre the whole block
  };

  // Width each child should occupy.
  // Subtract half the gap so the total width ≈ 100 % (gap is added separately by flex).
  const childWidth = `calc(${childRatio * 100}% - ${parseFloat(gap) / 2}rem)`;

  // Clone each child and inject the calculated width + responsive height.
  const renderedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...(child.props.style || {}),
          width: childWidth,
          height: "auto",
        },
      });
    }
    // Non‑element children (e.g., plain text) are returned unchanged.
    return child;
  });

  return <div style={containerStyle}>{renderedChildren}</div>;
};