import { useRef } from "react";
import { changeName, deleteName } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Center = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const name = useSelector((state: any) => state.userSlicer.name);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(changeName(new String(nameRef.current?.value).valueOf()));
  };
  const handleDelete = () => {
    dispatch(deleteName());
  };
  return (
    <div>
      <div>Name: {name}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={nameRef} /> <br />
          <button type="submit">submit</button>
        </form>
      </div>
      <button onClick={handleDelete}>Delete Name</button>
    </div>
  );
};

export default Center;
