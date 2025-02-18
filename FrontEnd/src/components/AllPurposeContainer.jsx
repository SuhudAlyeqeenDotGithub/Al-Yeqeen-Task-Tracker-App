const AllPurposeContainer = ({ containerStyling, children }) => {
  return (
    <div className={` border border-blue-900 rounded-md ${containerStyling}`}>{children}</div>
  );
};

export default AllPurposeContainer;
