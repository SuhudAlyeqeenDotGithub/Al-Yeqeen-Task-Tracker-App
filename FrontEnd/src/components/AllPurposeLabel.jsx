const AllPurposeLabel = ({ labelStyling, children, inputId }) => {
  const labelDefaultStyling = " text-sm text-blue-900 font-semibold";
  return (
    <label
      className={!labelStyling ? labelDefaultStyling : labelStyling}
      htmlFor={inputId}
    >
      {children}
    </label>
  );
};

export default AllPurposeLabel;
