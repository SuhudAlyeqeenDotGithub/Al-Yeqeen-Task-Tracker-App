import { TaskDialogProvider } from "./TaskContext";

const AppContextProviders = ({ children }) => {
  return <TaskDialogProvider>{children}</TaskDialogProvider>;
};

export default AppContextProviders;
