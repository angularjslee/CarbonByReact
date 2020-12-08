import logo from './logo.svg';
import './App.css';
// import './app.scss';
import { Button } from 'carbon-components-react'
import { Accordion } from 'carbon-components-react'
import '../node_modules/carbon-components/scss/globals/scss/styles.scss'
import { AccordionItem } from 'carbon-components-react/lib/components/Accordion';

import { StackedBarChart, SimpleBarChart, PieChart, LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import React from 'react';
import ReactDOM from 'react-dom';

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

const simpleBarOptions = {
  "title": "Simple bar (discrete)",
  "axes": {
    "left": {
      "mapsTo": "value"
    },
    "bottom": {
      "mapsTo": "group",
      "scaleType": "labels"
    }
  },
  "height": "400px"
};

const pieOptions = {
  "title": "Pie",
  "resizable": true,
  "height": "400px"
};

const lineOptions = {
  "title": "Line (discrete)",
  "axes": {
    "bottom": {
      "title": "2019 Annual Sales Figures",
      "mapsTo": "key",
      "scaleType": "labels"
    },
    "left": {
      "mapsTo": "value",
      "title": "Conversion rate",
      "scaleType": "linear"
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
    ],
    simpleBarData: [
      {
        "group": "Qty",
        "value": 65000
      },
      {
        "group": "More",
        "value": 29123
      },
      {
        "group": "Sold",
        "value": 35213
      },
      {
        "group": "Restocking",
        "value": 51213
      },
      {
        "group": "Misc",
        "value": 16932
      }
    ],
    pieData: [
      {
        "group": "2V2N 9KYPM version 1",
        "value": 20000
      },
      {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "value": 65000
      },
      {
        "group": "JQAI 2M4L1",
        "value": 75000
      },
      {
        "group": "J9DZ F37AP",
        "value": 1200
      },
      {
        "group": "YEL48 Q6XK YEL48",
        "value": 10000
      },
      {
        "group": "Misc",
        "value": 25000
      }
    ],
    lineData: [
      {
        "group": "Dataset 1",
        "key": "Qty",
        "value": 34200
      },
      {
        "group": "Dataset 1",
        "key": "More",
        "value": 23500
      },
      {
        "group": "Dataset 1",
        "key": "Sold",
        "value": 53100
      },
      {
        "group": "Dataset 1",
        "key": "Restocking",
        "value": 42300
      },
      {
        "group": "Dataset 1",
        "key": "Misc",
        "value": 12300
      },
      {
        "group": "Dataset 2",
        "key": "Qty",
        "value": 34200
      },
      {
        "group": "Dataset 2",
        "key": "More",
        "value": 53200
      },
      {
        "group": "Dataset 2",
        "key": "Sold",
        "value": 42300
      },
      {
        "group": "Dataset 2",
        "key": "Restocking",
        "value": 21400
      },
      {
        "group": "Dataset 2",
        "key": "Misc",
        "value": 0
      },
      {
        "group": "Dataset 3",
        "key": "Qty",
        "value": 41200
      },
      {
        "group": "Dataset 3",
        "key": "More",
        "value": 18400
      },
      {
        "group": "Dataset 3",
        "key": "Sold",
        "value": 34210
      },
      {
        "group": "Dataset 3",
        "key": "Restocking",
        "value": 1400
      },
      {
        "group": "Dataset 3",
        "key": "Misc",
        "value": 42100
      },
      {
        "group": "Dataset 4",
        "key": "Qty",
        "value": 22000
      },
      {
        "group": "Dataset 4",
        "key": "More",
        "value": 1200
      },
      {
        "group": "Dataset 4",
        "key": "Sold",
        "value": 9000
      },
      {
        "group": "Dataset 4",
        "key": "Restocking",
        "value": 24000,
        "audienceSize": 10
      },
      {
        "group": "Dataset 4",
        "key": "Misc",
        "value": 3000,
        "audienceSize": 10
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
        <div>
          <StackedBarChart
            data={this.state.stackedBarData}
            options={stackedBarOptions}
          />
        </div>
        <div>
          <SimpleBarChart
            data={this.state.simpleBarData}
            options={simpleBarOptions}
          />
        </div>
        <div>
          <PieChart
            data={this.state.pieData}
            options={pieOptions}
          />
        </div>
        <div>
          <LineChart
            data={this.state.lineData}
            options={lineOptions}
          />
        </div>
    </div>
    );
  }
}

export default App;