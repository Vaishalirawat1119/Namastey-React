import React from "react"
import ReactDOM from "react-dom/client"

//JSX - JSX is not a part of React 
//JSX is a Javascript syntax which is eaasier to create react element
//JSX is not HTML in Javascript, it just has a HTML-like code in 
//JSX (transpiled before it reaching to js) - PARCEL - BABEL(js compiler)

//JSX -> transpiled into React.createElement
const jsxHeading = 
(<h1 id="heading">
    Hello from JSX 
</h1>);

//React components -> everything in react is component. Buttons, searchBar, header, footer....
//There are two types of react components -> 1. Class based component , 2. Functional components.

//Functional components
//these are the ways of creating function
const Heading = () => {
    return <h1>Hello from functional component</h1>
}
const Heading2 = () => <h1>hello from Heading 2</h1>
const Heading3 = () => (
    <h1 id="heading">
        Hello from heading 3
    </h1>
);

//Component Composition

const Title = () => {
    return <h1>30-10-2025 ----- Friday</h1>
}

const Diary = () => (
    <div id="container">
        <Title/>
        <h1 id="heading">
            hello I am Vaishali Rawat
        </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<Heading/>)
root.render(<Heading2/>)
root.render(<Heading3/>)

root.render(<Diary/>)
