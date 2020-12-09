import logo from './logo.svg';
import './App.css';
// import './app.scss';
import { Button } from 'carbon-components-react'
import '../node_modules/carbon-components/scss/globals/scss/styles.scss'
import { AccordionItem } from 'carbon-components-react/lib/components/Accordion';

import { StackedBarChart, SimpleBarChart, PieChart, LineChart, ComboChart, GaugeChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import React from 'react';
import {Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction } from 'carbon-components-react';
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink} from 'carbon-components-react';
import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';


import { ProgressIndicator, ProgressStep, Tooltip} from 'carbon-components-react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';

import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
} from 'carbon-components-react';
import { CheckmarkFilled16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';


// import { action } from '@storybook/addon-actions';
// npm install --save @storybook/addon-actions

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

const ComboOptions = {
  "experimental": true,
  "title": "Combo (Line + Simple bar) - custom configs",
  "axes": {
    "left": {
      "mapsTo": "value",
      "scaleType": "linear",
      "title": "USA Summer School Attendance"
    },
    "right": {
      "mapsTo": "temp",
      "scaleType": "linear",
      "title": "Temperature (°F)",
      "correspondingDatasets": [
        "Temperature"
      ]
    },
    "bottom": {
      "title": "Day of the Week",
      "mapsTo": "date",
      "scaleType": "labels"
    }
  },
  "comboChartTypes": [
    {
      "type": "simple-bar",
      "correspondingDatasets": [
        "School A"
      ]
    },
    {
      "type": "line",
      "options": {
        "points": {
          "radius": 5
        }
      },
      "correspondingDatasets": [
        "Temperature"
      ]
    }
  ],
  "height": "400px"
};

const GaugeOptions = {
  "title": "Gauge semicircular -- danger status",
  "resizable": true,
  "height": "250px",
  "width": "100%",
  "gauge": {
    "type": "semi",
    "status": "danger"
  }
};

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true">
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const { prefix } = settings;


const structuredListBodyRowGenerator = (numRows) => {
  return Array.apply(null, Array(numRows)).map((n, i) => (
    <StructuredListRow label key={`row-${i}`}>
      <StructuredListCell>Time {i}</StructuredListCell>
      <StructuredListCell>
          <h5>Request to promote</h5>
          <div>Promote to QUA in G1/A1/R1</div>
          <span>Requested by Ada White</span>
      </StructuredListCell>
      <StructuredListCell>
        <a>Detail</a>
      </StructuredListCell>
      <StructuredListInput
        id={`row-${i}`}
        value={`row-${i}`}
        title={`row-${i}`}
        name="row-0"
        defaultChecked={!i || null}
      />
      <StructuredListCell>
        <CheckmarkFilled16
          className={`${prefix}--structured-list-svg`}
          aria-label="select an option">
          <title>select an option</title>
        </CheckmarkFilled16>
      </StructuredListCell>
    </StructuredListRow>
  ));
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
    ],

    ComboData: [
      {
        "group": "School A",
        "date": "Monday",
        "value": 10000
      },
      {
        "group": "School A",
        "date": "Tuesday",
        "value": 65000
      },
      {
        "group": "School A",
        "date": "Wednesday",
        "value": 30000
      },
      {
        "group": "School A",
        "date": "Thursday",
        "value": 49213
      },
      {
        "group": "School A",
        "date": "Friday",
        "value": 49213
      },
      {
        "group": "Temperature",
        "date": "Monday",
        "temp": 70
      },
      {
        "group": "Temperature",
        "date": "Tuesday",
        "temp": 75
      },
      {
        "group": "Temperature",
        "date": "Wednesday",
        "temp": 31
      },
      {
        "group": "Temperature",
        "date": "Thursday",
        "temp": 31
      },
      {
        "group": "Temperature",
        "date": "Friday",
        "temp": 43
      }
    ],

    GaugeData: [
      {
        "group": "value",
        "value": 42
      },
      {
        "group": "delta",
        "value": -13.37
      }
    ]
  };

  render() {
    return (
      <div class="App">
        {/* Header */}
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="">
            <i class="fas fa-space-shuttle"></i>
            &nbsp;
            Rocket DevOps
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
            {/* <HeaderGlobalAction aria-label="Search" onClick={action('search click')}> */}
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Notifications">
              {/* onClick={action('notification click')}> */}
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher">
              {/* onClick={action('app-switcher click')}> */}
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        {/* Left Panel bar */}
        <SideNav
          isFixedNav
          expanded={true}
          isChildOfHeader={false}
          aria-label="Side navigation">
          <SideNavItems>
            <SideNavLink href="javascript:void(0)" isActive={true}>
              <i class="fas fa-home"></i>
              &nbsp;
              Overview
            </SideNavLink>
            <SideNavMenu title="Reporting">
              <SideNavMenuItem href="javascript:void(0)">
                <i class="fas fa-tachometer-alt"></i>
                &nbsp;
                Dashboard
              </SideNavMenuItem>
            </SideNavMenu>
          </SideNavItems>
        </SideNav>
          {/* Chart */}          

          {/* <div class="container">		
            <div class="row">							
              <div class="col-md-4">
                  <StackedBarChart
                    data={this.state.stackedBarData}
                    options={stackedBarOptions}
                  />
              </div>							
              <div class="col-md-4">
                <SimpleBarChart
                  data={this.state.simpleBarData}
                  options={simpleBarOptions}
                />  
              </div>							
              <div class="col-md-4">
                <PieChart
                  data={this.state.pieData}
                  options={pieOptions}
                />
              </div>							
            </div>	
            <div class="row">							
              <div class="col-md-4">
                <LineChart
                  data={this.state.lineData}
                  options={lineOptions}
                />
              </div>							
              <div class="col-md-4">
                <ComboChart
                  data={this.state.ComboData}
                  options={ComboOptions}
                />
              </div>							
              <div class="col-md-4">
                <GaugeChart
                  data={this.state.GaugeData}
                  options={GaugeOptions}
                />
              </div>							
            </div>							
          </div> */}

          {/* Progress Indicator */}
          {/* <ProgressIndicator
            vertical={boolean('Vertical (vertical)', false)}
            currentIndex={number('Current progress (currentIndex)', 1)}
            spaceEqually={boolean('Space Equally (spaceEqually)', false)}>
            <ProgressStep
              label={text('Label (label)', 'First step')}
              description="Step 1: Getting started with Carbon Design System"
              secondaryLabel="Optional label"
            />
            <ProgressStep
              label="Second step with tooltip"
              description="Step 2: Getting started with Carbon Design System"
              renderLabel={() => (
                <Tooltip
                  direction="bottom"
                  showIcon={false}
                  // triggerClassName={`${prefix}--progress-label`}
                  triggerText={'Second step with tooltip'}
                  tooltipId="tooltipId-0">
                  <p>Overflow tooltip content.</p>
                </Tooltip>
              )}
            />
            <ProgressStep
              label="Third step with tooltip"
              description="Step 3: Getting started with Carbon Design System"
              renderLabel={() => (
                <Tooltip
                  direction="bottom"
                  showIcon={false}
                  // triggerClassName={`${prefix}--progress-label`}
                  triggerText={'Third step with tooltip'}
                  tooltipId="tooltipId-1">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                    consequuntur hic ratione aliquid cupiditate, nesciunt saepe iste
                    blanditiis cumque maxime tenetur veniam est illo deserunt sint quae
                    pariatur. Laboriosam, consequatur.
                  </p>
                </Tooltip>
              )}
            />
            <ProgressStep
              label="Fourth step"
              description="Step 4: Getting started with Carbon Design System"
              invalid
              secondaryLabel="Example invalid step"
            />
            <ProgressStep
              label="Fifth step"
              description="Step 5: Getting started with Carbon Design System"
              disabled
            />
          </ProgressIndicator> */}


          {/* StruturedList */}
          <div class="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <StructuredListWrapper selection>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>Pending Requests</StructuredListCell>
                  <StructuredListCell head>{' '}</StructuredListCell>
                  <StructuredListCell head>{' '}</StructuredListCell>
                  <StructuredListCell head>
                    <span> n to be completed</span>
                  </StructuredListCell> 
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                {structuredListBodyRowGenerator(4)}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>



    </div>
    );
  }
}

export default App;