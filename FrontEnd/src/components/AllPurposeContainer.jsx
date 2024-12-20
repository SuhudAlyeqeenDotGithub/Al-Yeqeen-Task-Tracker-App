const AllPurposeContainer = ({ containerStyling, children }) => {
  return (
    <div className={`border-blue-800 ${containerStyling}`}>{children}</div>
  );
};

export default AllPurposeContainer;
