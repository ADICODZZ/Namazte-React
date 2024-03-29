/*const heading=React.createElement("h1",{id:"heading"},
"Hello World from React");

console.log(heading); // object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);*/



const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",
    {id:"child"},
    [React.createElement("h1",{},"I am Heading from child 1"),
    React.createElement("h1",{},"I am Heading 2 from child 1 "),
    ]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am Heading from child 2"),
    React.createElement("h1",{},"I am Heading 2 from child 2"),
    ]),
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);