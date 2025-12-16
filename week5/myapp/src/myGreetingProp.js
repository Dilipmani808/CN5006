import './App.css';
function GreetingElementwithProp(props) {
 const greeting = 'Hello Lets start learning function Component...';
 console.log("prop is",props.msg)
 return (
 <div className="App">
    <h1>{greeting}</h1>;
 <h2>{props.msg}</h2>;
 </div>
 );
}
 export default GreetingElementwithProp; 