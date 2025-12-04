import React from "react";

/**
 * Props
 *   children       – whatever you place inside <Center>
 *   marginTop      – space above the block (default: "1rem")
 *   width          – width of the whole centered box (e.g. "400px")
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
  /* -------------------------------------------------------------
   * 1️⃣ Wrapper style – this is the *visible* frame
   * ----------------------------------------------------------- */
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop,
    width,                     // controls the overall box width
    border,                    // the visible border
    borderRadius,              // rounded corners
    overflow: "hidden",        // cuts off anything that exceeds the radius
    ...style,
  };

  /* -------------------------------------------------------------
   * 2️⃣ Child style – we want the image to fill the wrapper
   * ----------------------------------------------------------- */
  const childExtraStyle = {
    width: "100%",   // stretch to wrapper’s width
    height: "auto",
    display: "block", // remove any inline‑element gaps
  };

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