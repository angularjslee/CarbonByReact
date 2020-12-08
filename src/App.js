import logo from './logo.svg';
import './App.css';
// import './app.scss';
import { Button } from 'carbon-components-react'
import { Accordion } from 'carbon-components-react'
import '../node_modules/carbon-components/scss/globals/scss/styles.scss'
import { AccordionItem } from 'carbon-components-react/lib/components/Accordion';

import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import React from 'react';
import ReactDOM from 'react-dom';

// function App() {

  
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Button>Click Me</Button>
//       <Accordion>
//         <AccordionItem title="Title1"><p>A</p></AccordionItem>
//         <AccordionItem title="Title2"><p>B</p></AccordionItem>
//       </Accordion>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }
const stackedBarOptions = {
  "title": "Stacked bar (discrete)",
  "axes": {
    "left": {
      "mapsTo": "value",
      "stacked": true
    },
    "bottom": {
      "mapsTo": "key",
      "scaleType": "labels"
    }
  },
  "height": "400px"
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    stackedBarData: [
      {
        "group": "Dataset 1",
        "key": "Qty",
        "value": 65000
      },
      {
        "group": "Dataset 1",
        "key": "More",
        "value": 29123
      },
      {
        "group": "Dataset 1",
        "key": "Sold",
        "value": 35213
      },
      {
        "group": "Dataset 1",
        "key": "Restocking",
        "value": 51213
      },
      {
        "group": "Dataset 1",
        "key": "Misc",
        "value": 16932
      },
      {
        "group": "Dataset 2",
        "key": "Qty",
        "value": 32432
      },
      {
        "group": "Dataset 2",
        "key": "More",
        "value": 21312
      },
      {
        "group": "Dataset 2",
        "key": "Sold",
        "value": 56456
      },
      {
        "group": "Dataset 2",
        "key": "Restocking",
        "value": 21312
      },
      {
        "group": "Dataset 2",
        "key": "Misc",
        "value": 34234
      },
      {
        "group": "Dataset 3",
        "key": "Qty",
        "value": 12312
      },
      {
        "group": "Dataset 3",
        "key": "More",
        "value": 23232
      },
      {
        "group": "Dataset 3",
        "key": "Sold",
        "value": 34232
      },
      {
        "group": "Dataset 3",
        "key": "Restocking",
        "value": 12312
      },
      {
        "group": "Dataset 3",
        "key": "Misc",
        "value": 34234
      },
      {
        "group": "Dataset 4",
        "key": "Qty",
        "value": 32423
      },
      {
        "group": "Dataset 4",
        "key": "More",
        "value": 21313
      },
      {
        "group": "Dataset 4",
        "key": "Sold",
        "value": 64353
      },
      {
        "group": "Dataset 4",
        "key": "Restocking",
        "value": 24134
      },
      {
        "group": "Dataset 4",
        "key": "Misc",
        "value": 32423
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Button>Click Me</Button>
        <Accordion>
          <AccordionItem title="Title1"><p>A</p></AccordionItem>
          <AccordionItem title="Title2"><p>B</p></AccordionItem>
        </Accordion>
        <div className="App">
          <StackedBarChart
            data={this.state.stackedBarData}
            options={stackedBarOptions}
          />
        </div>
    </div>
    );
  }
}

export default App;
