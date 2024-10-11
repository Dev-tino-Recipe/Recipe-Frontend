import React, { useRef } from "react";

function ImageInput({
  onChange,
  children,
  disabled,
  ...props
}: React.HTMLProps<HTMLInputElement> | React.HTMLProps<HTMLDivElement>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <button
      onClick={() => {
        inputRef.current?.click();
      }}
      className={props.className}
    >
      {children}
      <input
        disabled={disabled}
        onChange={onChange}
        ref={inputRef}
        hidden
        type="file"
      />
    </button>
  );
}

export default ImageInput;
