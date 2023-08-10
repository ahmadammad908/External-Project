import React, { useState } from "react";

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onchange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <input
        {...inputProps}
        onchange={onchange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <h1 className="errorMessage">{errorMessage}</h1>
    </div>
  );
};

export default Forminput;
