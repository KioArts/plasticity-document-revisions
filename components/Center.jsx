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
  // -----------------------------------------------------------------
  // 1️⃣ Wrapper – handles centering and optional top margin
  // -----------------------------------------------------------------
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop,
    ...style,
  };

  // -----------------------------------------------------------------
  // 2️⃣ Build a style object that we’ll inject into the child
  // -----------------------------------------------------------------
  const childExtraStyle = {
    ...(width !== undefined ? { width } : {}),
    ...(border !== undefined ? { border } : {}),
    ...(borderRadius !== undefined ? { borderRadius } : {}),
  };

  // -----------------------------------------------------------------
  // 3️⃣ Clone the child and merge our extra styles with any that
  //    already exist on the child (Markdown turns ![]() into <img>)
  // -----------------------------------------------------------------
  const styledChild =
    React.isValidElement(children)
      ? React.cloneElement(children, {
          style: {
            ...(children.props.style || {}),
            ...childExtraStyle,
          },
        })
      : children; // fallback – if you ever pass plain text, just render it

  // -----------------------------------------------------------------
  // 4️⃣ Render
  // -----------------------------------------------------------------
  return <div style={wrapperStyle}>{styledChild}</div>;
};