import { AlyeqeenTaskTrackerInterface } from "./ToDoLogo";
import { Link } from "react-router-dom";

const LandingPageSection2 = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 to-[#0b113e] text-white px-20 py-10 gap-y-16">
      {/* div one title */}
      <div className="text-center font-bold text-[30px]">Task Page - Adding & Managing Tasks</div>

      {/* div two */}

      <div className="flex items-center gap-x-10 h-[500px]">
        <div className="w-[35%] items-center font-semibold hover:border-y py-4 rounded-md text-[18px]">
          Stay organised and in control with our powerful task management system. Our clean, user-friendly interface
          makes it easy to add, view, edit, and delete tasks seamlessly. Track your progress by categorising tasks as In
          Progress, Completed, or Terminated, and find what you need instantly with smart search and sorting options by
          name or date. Stay on top of your priorities with advanced filters, allowing you to view tasks by status or
          within a specific date range. Get started today and manage your tasks effortlessly!
        </div>
        <div className="w-[80%] border-2 rounded-md shadow-lg">
          <AlyeqeenTaskTrackerInterface className="h-[1000px] w-[500px]"/>
        </div>
      </div>
      {/* div 3 button */}
      <div className="mt-10">
        <Link to="/signup">
          <button title="Register" type="button" className="border-2 rounded-md p-4 font-semibold transform hover:scale-110">
            Try it Now - It's Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageSection2;
