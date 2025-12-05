import React from "react";
import PropTypes from "prop-types";

/**
 * A simple flex container that lines up any children (usually images)
 * side‑by‑side.  It accepts optional `gap` and `maxWidth` props so you
 * can tweak spacing and overall width without touching the component.
 */
export const SideBySide = ({ children, gap = "1rem", maxWidth = "100%" }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",          // wrap on narrow screens
    gap,
    alignItems: "center",
    maxWidth,
    margin: "0 auto",           // centre the whole block
  };

  // Clone each child and force it to be responsive
  const renderedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...(child.props.style || {}),
          maxWidth: "100%",
          height: "auto",
        },
      });
    }
    return child; // non‑element children (e.g., strings) are returned unchanged
  });

  return <div style={containerStyle}>{renderedChildren}</div>;
};

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  maxWidth: PropTypes.string,
};