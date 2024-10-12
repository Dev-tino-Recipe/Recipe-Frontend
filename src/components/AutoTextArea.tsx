"use client";

import React, { ReactElement, useLayoutEffect, useRef } from "react";

function AutoTextArea({
  rows = 1,
  ...props
}: Readonly<React.HTMLProps<HTMLTextAreaElement>>): ReactElement {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (!textAreaRef.current) return;

    const cloneNode = textAreaRef.current.cloneNode(
      true
    ) as HTMLTextAreaElement;

    (textAreaRef.current as Node).parentNode!.appendChild(cloneNode);

    cloneNode.style.height = "auto";
    textAreaRef.current.style.height = `${cloneNode.scrollHeight}px`;

    (textAreaRef.current as Node).parentNode!.removeChild(cloneNode);
  }, [textAreaRef.current?.value]);

  return (
    <textarea
      rows={rows}
      {...props}
      ref={textAreaRef}
      style={{ overflow: "hidden", resize: "none" }}
    />
  );
}

export default AutoTextArea;
