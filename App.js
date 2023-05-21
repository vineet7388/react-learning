const hearder = React.createElement("div", {
    id: "heading",
    xyz: "abc"
}, [React.createElement("div", {
    id: "heading",
    xyz: "abc"
}, [React.createElement("h1", {
    id: "sibling1",
    xyz: "abc"
}, "Sibling1 !!!"),
React.createElement("h2", {
    id: "sibling2",
    xyz: "abc"
}, "Sibling2 !!!")]),
React.createElement("div", {
    id: "heading",
    xyz: "abc"
}, [React.createElement("h1", {
    id: "sibling1",
    xyz: "abc"
}, "Sibling1 !!!"),
React.createElement("h2", {
    id: "sibling2",
    xyz: "abc"
}, "Sibling2 !!!")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hearder)