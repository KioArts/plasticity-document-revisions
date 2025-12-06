import React from "react";
import PropTypes from "prop-types";

/**
 * Flex container that lines up children side‑by‑side.
 * `childRatio` (0‑1) determines how much of the container each child occupies.
 * Default = 0.5 → each child gets ~½ the width (minus half the gap).
 */
export const SideBySide = ({
  children,
  gap = "1rem",
  maxWidth = "100%",
  childRatio = 0.5,          // ← new prop
}) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",          // wrap on narrow screens
    gap,
    alignItems: "center",
    maxWidth,
    margin: "0 auto",
  };

  // Compute the width each child should take.
  // We subtract half the gap so the total width ≈ 100 % (gap is added separately by flex).
  const childWidth = `calc(${childRatio * 100}% - ${parseFloat(gap) / 2}rem)`;

  const renderedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...(child.props.style || {}),
          width: childWidth,   // ← enforce the calculated width
          height: "auto",
        },
      });
    }
    return child;
  });

  return <div style={containerStyle}>{renderedChildren}</div>;
};

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  maxWidth: PropTypes.string,
  childRatio: PropTypes.number,
};