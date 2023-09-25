// ReactDOM.render(
//     <div>
//         <h1>Hello World!</h1>
//         <p>Second text</p>
//     </div>,
//     document.getElementById("root")
// ); 

// First variant --

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//      <div>
//         <h1>Hello World!</h1>
//         <p>Second text</p>
//     </div>
// );   

// --

// second variant --
ReactDOM.createRoot(document.getElementById("root")).render(
     /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
     React.createElement("h1", null, "Hello World!"), /*#__PURE__*/
     React.createElement("p", null, "Second text"))
);
// --