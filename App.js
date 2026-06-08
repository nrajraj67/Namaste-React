// In JavaScript
// const heading = document.createElement("h1");
// const root = document.getElementById("root");
// heading.innerHTML = "Namaste JavaScript ";
// root.append(heading);
//In React
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello World  from React",
// );
// console.log(heading); //it return object means createElement return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
//createElemnet Api takes three input id , attribute , and child --1.normal react element 2. if we have to given multiple children then we have to pass in the array
// at the end of the day react Element is Object .(Imp)
//createRoot is responsible to assign the root element
// root.render(heading); // here render method takes that object and convert it into HTml and put it back in UI .
// if in the root element already having some child then render method replace that child with new reactElement child element .(imp)
// we Can use React in small portion and react is a library
// In Short -- > Converting React Elements into actual UI that appears in the browser.

//Nested Element
{
  /* <div id ="parent">
  <div id ="child">
    <h1>
      I'm H1 Tag inside nested div
    </h1>

  </div>
</div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     //     React.createElement("h1", {}, "I'm H1 tag inside nested div "),
//     //   ),
//     // );
//     // What if io have to create h1 siblings
//     [
//       React.createElement("h1", {}, "I'm H1 tag inside nested div "),
//       React.createElement("h1", {}, "I'm H1 tag inside nested div "),
//     ],
//   ),
// );
// What is i have to carete like this
/* <div id ="parent">
  <div id ="child">
    <h1>
      I'm H1 Tag inside nested div
    </h1>
    <h2>
      I'm H1 Tag inside nested div
    </h2>
</div>
  <div id ="child2">
    <h1>
      I'm H1 Tag inside nested div
    </h1>
    <h2>
      I'm H1 Tag inside nested div
    </h2>
</div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag inside nested div "),
    React.createElement("h1", {}, "I'm H1 tag inside nested div "),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I'm H1 tag inside nested div "),
    React.createElement("h1", {}, "I'm H1 tag inside  nested div "),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
