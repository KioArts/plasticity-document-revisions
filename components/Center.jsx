import React from "react";

/**
 * Props:
 *   children   – whatever you want to center (usually an <img>)
 *   marginTop  – optional space above the block (default: "1rem")
 *   width      – optional width for the child element (e.g. "300px" or 300)
 *   height     – optional height for the child element
 *   style      – any extra inline styles you want to merge in
 */
export const Center = ({
  children,
  marginTop = "1rem",
  width,
  height,
  style = {},
}) => {
  // Wrapper styles (flex centering + top margin)
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop,
    ...style,
  };

  // If width/height were given, clone the child and inject those styles.
  // This works for <img>, <video>, <svg>, etc.
  const sizedChild =
    React.isValidElement(children) && (width !== undefined || height !== undefined)
      ? React.cloneElement(children, {
          style: {
            ...(children.props.style || {}),
            ...(width !== undefined ? { width } : {}),
            ...(height !== undefined ? { height } : {}),
          },
        })
      : children;

  return <div style={wrapperStyle}>{sizedChild}</div>;
};