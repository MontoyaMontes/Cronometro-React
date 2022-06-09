import PantallaNuerica from "./components/PantallaNuerica";

function App() {
  const styles = {
    backgrondDark:{
      backgroundColor: "#0d0d0d"
    } 
  }
  
  return (
    <div className="text-white" style={styles.backgrondDark}>
      <div className="text-center ">
        <p className="display-6 p-2">Stopwatch</p>
      </div>
      <div className="text-white" style={styles.backgrondDark}>
        <PantallaNuerica></PantallaNuerica>
      </div>

    </div>
  );
}

export default App;

