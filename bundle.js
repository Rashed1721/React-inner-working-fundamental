const HelloWorld = () => {
  return React.createElement("p", {}, "Hello World");
};

const anotherHello = () => {
  return React.createElement("p", {}, "another hello");
};

const App = () => {
  return React.createElement(
    "h1",
    { style: { color: "red" } },
    "This is Recat App",
    HelloWorld(),
    anotherHello()
  );
};

// const HelloWorld = () => {
//   return <h2>Hello World</h2>;
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <p>this is a recat App</p>
//       </div>
//       <HelloWorld />
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(React.createElement(App));
// root.render(App());
console.log(root);
