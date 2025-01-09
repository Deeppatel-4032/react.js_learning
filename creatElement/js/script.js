
// Create the Element use react
let container = React.createElement("div", { className : "subheading"}, "hello react", 
    [
        React.createElement("section", {key : 1}, 
            [
                React.createElement("p", {key : 2}, 
                    "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial."),
                React.createElement("img", {key : 3, style : { width : "500px" }, src : "https://imgs.search.brave.com/N3WfNHpXhtxnxMSKIw3htA1ksVdZ6hWK2h3hooHrwvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn"}, 
                    )
            ],
            [
                React.createElement("p", { key : 2 }, 
                    "React is a JavaScr ipt library.")
            ],
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)