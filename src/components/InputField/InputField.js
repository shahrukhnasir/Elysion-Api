import React from 'react'

const InputField = ({
    label,
    type,
    value,
    handleChange,
    placeholder,
    rows,
    className,
    name,
  }) => {
    return (
      <div className={`${styles.container} ${className}`}>
        {label && <label>{label}</label>}
        {/* <label>{label} asdf asd fasdf</label> */}
        <input
          type={type}
          className={`${styles.input} `}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          name={name}
        />
      </div>
    );
  };
  export default InputField;
