
//Hello world Component
function HelloWorld(props)
{
  return <h1>Hello, {props.name}</h1>
}

function App() {
  var name="jeel"
   return (
     <div className="App">
       {/* invoking hello world component and passing name props*/}
       <HelloWorld name={name}></HelloWorld>
      </div>  
  );
}

export default App;
