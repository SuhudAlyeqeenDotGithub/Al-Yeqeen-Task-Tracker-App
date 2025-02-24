import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ title, content, titleStyle, contentStyle, isOpen, onToggle, borderBottom, borderLeft }) => {
  const defaultTitleStyle = "p-4";
  const defaultContentStyle = "p-4";

  return (
    <div className={`px-10 cursor-pointer rounded ${isOpen ? borderLeft : ""}`} onClick={onToggle}>
      <div
        className={`${borderBottom} flex flex-col
       py-10 duration-500 hover:scale-105`}
      >
        <h1 className={titleStyle ? titleStyle : defaultTitleStyle}>
          {title}
          <span className={` ${isOpen ? "transform rotate-180 transition-transform duration-200" : ""}`}>
            <FaChevronDown />
          </span>
        </h1>

        <p className={`${isOpen ? "block" : "hidden"} ${contentStyle ? contentStyle : defaultContentStyle}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
