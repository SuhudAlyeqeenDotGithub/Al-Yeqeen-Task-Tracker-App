import BarChart from "./chart";

function DashboardPage() {
  const dashboardEntityStyle =
    "border border-[#448ABC] shadow-md p-2 rounded-md bg-white flex flex-col items-center justify-center";
  const elements = [];
  for (let i = 0; i < 20; i++) {
    elements.push(<h1>Pie Chart{i}</h1>);
  }

  return (
    <div className="p-8 mt-10 grid grid-cols-3 grid-rows-2 gap-4">
      <div className={dashboardEntityStyle}>
        <h1>Total Tasks:#</h1>
        <h1>Completed Tasks:#</h1>
        <h1>Percentage Completion:#</h1>
      </div>

      <div className={`row-span-2 ${dashboardEntityStyle}`}>
        <BarChart />
        <BarChart />
      </div>

      <div className={dashboardEntityStyle}>
        <h1>Total Tasks:#</h1>
        <h1>In Progress Tasks:#</h1>
        <h1>Percentage In Progress:#</h1>
      </div>

      <div className={dashboardEntityStyle}>
        <h1>Total Tasks:#</h1>
        <h1>Terminated Tasks:#</h1>
        <h1>Percentage Terminated:#</h1>
      </div>
      <div className={dashboardEntityStyle}>
        <h1>Total Tasks:#</h1>
        <h1>Deleted Tasks:#</h1>
        <h1>Percentage Deleted:#</h1>
      </div>
    </div>
  );
}

export default DashboardPage;
