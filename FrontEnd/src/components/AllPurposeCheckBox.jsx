function AllPurposeCheckBox({
  inputValue,
  inputId,
  inputName,
  onchangeFunction,
  checked,
  isRegularCheckbox,
  checkBoxIdentity,
}) {
  const classNameFormatting = `w-8 h-8 accent-[#0B1869] ring-1 ring-offset-1 ring-[#0B1869]`;

  const handleChange = (event) => {
    event.stopPropagation();
    if (isRegularCheckbox) {
      onchangeFunction(event, checkBoxIdentity); // For regular checkboxes, pass both event and index
    } else {
      onchangeFunction(event); // For others, just pass event
    }
  };
  return (
    <input
      type="checkbox"
      className={classNameFormatting}
      checked={checked}
      id={inputId}
      value={inputValue}
      name={inputName}
      onChange={handleChange}
    />
  );
}

export default AllPurposeCheckBox;
