const AllPurposeInput = ({
  inputPlaceHolder,
  inputValue,
  inputType,
  inputId,
  inputName,
  onchangeFunction,
  styling,
}) => {
  // Class formatting based on focus state
  const classNameFormatting = `shadow-sm placeholder-[#0B1869] text-[#0B1869] text-sm font-semibold border border-[#0B1869] w-full p-2 rounded focus:border-2 border-[#0B1869] outline-none`;

  return (
    <input
      type={inputType}
      className={styling ? styling : classNameFormatting}
      placeholder={inputPlaceHolder}
      id={inputId}
      value={inputValue}
      name={inputName}
      onChange={onchangeFunction}
    />
  );
};

export default AllPurposeInput;
