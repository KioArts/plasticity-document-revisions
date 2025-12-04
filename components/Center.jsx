import React from "react";

/**
 * Props
 *   children       – whatever you place inside <Center>
 *   marginTop      – space above the block (default: "1rem")
 *   width          – width for the child element (e.g. "400px")
 *   border         – CSS border string (e.g. "2px solid #ddd")
 *   borderRadius   – CSS border‑radius (e.g. "8px")
 *   style          – extra inline styles for the wrapper itself
 */
export const Center = ({
  children,
  marginTop = "1rem",
  width,
  border,
  borderRadius,
  style = {},
}) => {
  // Wrapper – just handles centering and optional top margin
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop,
    ...style,
  };

  // Styles we want to inject into the child (the <img>)
  const childExtraStyle = {
    ...(width !== undefined ? { width } : {}),
    ...(border !== undefined ? { border } : {}),
    ...(borderRadius !== undefined ? { borderRadius } : {}),
    // Force block layout so the radius isn’t clipped by inline spacing
    display: "block",
  };

  // Clone the child and merge our extra styles with any that already exist
  const styledChild = React.isValidElement(children)
    ? React.cloneElement(children, {
        style: {
          ...(children.props.style || {}),
          ...childExtraStyle,
        },
      })
    : children; // fallback for non‑element children

  return <div style={wrapperStyle}>{styledChild}</div>;
};