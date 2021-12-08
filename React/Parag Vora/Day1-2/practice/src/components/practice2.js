import ReactDOM from "react-dom";
function tick() {
    const element = (
      <div>
        <h1>Timer..</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('practice2'));
  }
  
  setInterval(tick, 1000);

  export default tick;