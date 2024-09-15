import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div
      id={"main_layout"}
      style={{
        width: "393px",
        height: "852px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet />
      <div
        style={{
          border: "2px solid black",
          marginTop: "auto",
          height: "80px",
          display: "flex",
        }}
      ></div>
    </div>
  );
};

const Item = () => {
  return <div style={{ flex: "1" }}></div>;
};

export default MainLayout;
