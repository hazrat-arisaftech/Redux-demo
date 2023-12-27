import { useSelector } from "react-redux";

const Right = () => {
  const name = useSelector((state: any) => state.userSlicer.name);
  return (
    <div>
      <div
        style={{
          height: "180px",
          width: "180px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <h5>Name: {name}</h5>
      </div>
    </div>
  );
};

export default Right;
