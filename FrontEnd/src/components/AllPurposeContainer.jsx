const AllPurposeContainer = ({ containerStyling, children }) => {
  return (
    <div className={` border border-[#0B1869] rounded-md ${containerStyling}`}>{children}</div>
  );
};

export default AllPurposeContainer;
