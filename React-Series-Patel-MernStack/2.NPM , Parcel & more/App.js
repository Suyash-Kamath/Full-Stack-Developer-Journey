{/* <div id="container">
     <div id="container1">
      <h1>I am heading 1</h1>
       <h2>I am heading 2</h2>
    </div>

    <div id="container2">
      <h1>I am heading 1</h1>
       <h2>I am heading 2</h2>
    </div>

    <div id="container3">
      <h1>I am heading 1</h1>
       <h2>I am heading 2</h2>
    </div>
    <div id="container4">
      <h1>I am heading 1</h1>
       <h2>I am heading 2</h2>
    </div>
    <div id="container5">
      <h1>I am heading 1</h1>
       <h2>I am heading 2</h2>
    </div>
</div> */}

// const containerDiv = React.createElement('div',{id:"container"},[
//     React.createElement('h1',{},"I am heading 1"),
//     React.createElement('h2',{},"I am heading 2")

// ]);

const containerDiv = React.createElement('div',{id:"container"},[
    React.createElement('div',{id:'container1'},[
        React.createElement('h1',{},"I am heading 1"),
        React.createElement('h2',{},"I am heading 2")
    ]),
    React.createElement('div',{id:'container2'},[
        React.createElement('h1',{},"I am heading 1"),
        React.createElement('h2',{},"I am heading 2")
    ])
]);

console.log(containerDiv);

const root = ReactDOM.createRoot(document.getElementById('root'));
// pass the reference of root

root.render(containerDiv) 
// react element or object 
// Hey browser take react element , JS engine converts into format of HTML Content and displays it on the frontend;
// it does not appends , it replaces , if root div has something , it replaces that something
//  use jsx for creating react element / object

// what is jsx, why it is used , what problems does it solves

// Questions : 1. Does render() replaces or appends ? , 2. Does React runs on web app or can run on single part ? , yes , you can make react run on single part too