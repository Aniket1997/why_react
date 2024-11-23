console.log(React);
console.log(ReactDOM);

const domContainer = document.querySelector('#root');

// const elem = React.createElement(
//     'div',
//     null,
//     [   
//         React.createElement('span',null,"Hello Word"),
//         React.createElement('span',null,"Good Evening")
//     ]);

const Elem = ()=>{
    const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1 id="display">{ counter }</h1>
      <div>
        <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Elem/>,domContainer);

// const countElement = document.querySelector('#count');
// const button = document.querySelector('#increase');

// if (button && countElement) {
//     button.addEventListener('click', () => {
//         let value = parseInt(countElement.textContent, 10);
//         value++;
//         countElement.textContent = value;
//     });
// } else {
//     console.error('Button or count element not found.');
// }


