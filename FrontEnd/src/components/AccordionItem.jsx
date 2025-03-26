import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ title, content, contentStyle, isOpen, onToggle, borderBottom, borderLeft }) => {
  const defaultTitleStyle = "p-4";
  const defaultContentStyle = "p-4";

  return (
    <div className={`px-4 cursor-pointer rounded md:${isOpen ? borderLeft : ""} w-[350px] md:w-full`} onClick={onToggle}>
      <div
        className={`${borderBottom} flex flex-col
       py-5 md:py-10 duration-500 hover:scale-103 gap-3`}
      >
        <h1 className="whitespace-nowrap font-bold md:text-xl text-[18px] flex items-center justify-between rounded gap-x-4">
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
