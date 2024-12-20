function AllPurposeCheckBox({
  inputValue,
  inputId,
  inputName,
  onchangeFunction,
  checked,
  isRegularCheckbox,
  index,
}) {
  const classNameFormatting = `w-8 h-8 accent-blue-800 ring-1 ring-offset-1 ring-blue-900`;

  const handleChange = (event) => {
    event.stopPropagation();
    if (isRegularCheckbox) {
      onchangeFunction(event, index); // For regular checkboxes, pass both event and index
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
