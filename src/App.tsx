import Left from "./components/left";
import Right from "./components/right";
import Center from "./components/center";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Left />
        </div>
        <div>
          <Center />
        </div>
        <div>
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
