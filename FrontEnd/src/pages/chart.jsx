import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Area,
  Bar,
  ComposedChart as ReComposedChart,
  PieChart as RePieChart,
  Pie,
  ResponsiveContainer,
  Cell
} from "recharts";

const MyComposedChart = ({ dataProp }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ReComposedChart data={dataProp}>
        <XAxis dataKey="taskStatus" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="value" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" />
      </ReComposedChart>
    </ResponsiveContainer>
  );
};

const MyPieChart = ({ dataProp }) => {
  // Define colours for each task status
  const COLORS = ["#4CAF50", "#FF9800", "#F44336"]; 

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RePieChart>
        <Pie data={dataProp} dataKey="value" nameKey="taskStatus" cx="50%" cy="50%" outerRadius={120}>
          {dataProp.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
};

export { MyComposedChart, MyPieChart };
