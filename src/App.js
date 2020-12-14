import logo from './logo.svg';
import './App.css';
// import './app.scss';
import { Button } from 'carbon-components-react'
import '../node_modules/carbon-components/scss/globals/scss/styles.scss'
import { AccordionItem } from 'carbon-components-react/lib/components/Accordion';

import { StackedBarChart, GroupedBarChart, PieChart, LineChart, ComboChart, GaugeChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import React from 'react';
import {Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction } from 'carbon-components-react';
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink} from 'carbon-components-react';
import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';

import { ProgressIndicator, ProgressStep, Tooltip} from 'carbon-components-react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';

// Pending Request
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


import { Grid, Row, Column } from 'carbon-components-react';


// Bootstrap
import { ButtonGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
// format is not correct 
import 'bootstrap/dist/css/bootstrap.min.css';


// import { action } from '@storybook/addon-actions';
// npm install --save @storybook/addon-actions
function DemoContent({ children }) {				
      return (				
        <div className="outside">				
          <div className="inside">{children}</div>				
        </div>				
      );				
}

// Chart
function ChartKPI({}) {
    return (
      <div>
        <div style={{backgroundColor: 'green'}}>
          <h4>{KPI.location}-{KPI.server}</h4>
          <p>{KPI.context}</p>
          <p>{KPI.server}</p>
          <i>{KPI.statusIcon}</i>
          <span>{KPI.status}</span>
          <span>Updated on {KPI.date}</span>
          <i>{KPI.update}</i>
        </div>
      </div>
    )
}

const KPI = {
  "location": "China",
  "server": "LM(e)",
  "context": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
  "statusIcon": "tick",
  "status": "Working properly",
  "date": "2020-11-23 15:36",
  "update": "loading"
};

const stackedBarOptions = {
  "title": "Tasks per Environment",
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

const GroupedBarOptions = {
  "title": "Status of Task in Release",
  "axes": {
    "left": {
      "mapsTo": "value"
    },
    "bottom": {
      "scaleType": "labels",
      "mapsTo": "key"
    }
  },
  "height": "400px"
};

const pieOptions = {
  "title": "Space Usage per App",
  "resizable": true,
  "height": "400px"
};

const lineOptions = {
  "title": "Release in Jan, 2019",
  "axes": {
    "bottom": {
      "title": "Date ",
      "mapsTo": "date",
      "scaleType": "time"
    },
    "left": {
      "mapsTo": "value",
      "title": "Release Count",
      "scaleType": "linear"
    }
  },
  "curve": "curveMonotoneX",
  "height": "400px"
};

const GaugeOptions = {
  "title": "Code Danger Status",
  "resizable": true,
  "height": "250px",
  "width": "100%",
  "gauge": {
    "type": "semi",
    "status": "danger"
  }
};

const StackedBarFilterOptions = {
  "title": "Deployment Status",
  "axes": {
    "left": {
      "mapsTo": "value",
      "stacked": true
    },
    "bottom": {
      "mapsTo": "date",
      "scaleType": "time"
    }
  },
  "experimental": true,
  "toolbar": {
    "enabled": true,
    "controls": [
      {
        "type": "Zoom in"
      },
      {
        "type": "Zoom out"
      },
      {
        "type": "Reset zoom"
      }
    ]
  },
  "zoomBar": {
    "top": {
      "enabled": true
    }
  },
  "height": "400px"
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


function Pipeline({}) {
  return (
    <div>
      <div>
        <span style={{float: "left"}}>Group1/App1/Release1</span>
        &nbsp;
        <span>LM(e)</span>
      </div>
      <br></br>
      <ProgressIndicator  
        vertical={boolean('Vertical (vertical)', false)}
        currentIndex={number('Current progress (currentIndex)', 1)}
        spaceEqually={boolean('Space Equally (spaceEqually)', false)}>
        <ProgressStep
          label={text('Label (label)', 'Release')}
          description="Finished"
          secondaryLabel="Created"
        />
        <ProgressStep
          label="QUA"
          description="Running"   
          secondaryLabel="3 Created"
          renderLabel={() => (
            <Tooltip  
              direction="bottom"
              showIcon={false}
              triggerClassName={`${prefix}--progress-label`}
              triggerText={'Environment'}
              tooltipId="tooltipId-0">
              <p>Overflow tooltip content.</p>
            </Tooltip>
          )}
        />
        <ProgressStep
          label="Tasks"
          description="Await"
          secondaryLabel="5 Created"
          renderLabel={() => (
            <Tooltip
              direction="top"
              showIcon={false}
              triggerClassName={`${prefix}--progress-label`}
              triggerText={'Tasks'}
              tooltipId="tooltipId-1">
              <p>Opened</p>
            </Tooltip>
          )}
        />
        <ProgressStep
          label="Deployment Profile"
          description="Failed"
          description="Creating"
          invalid
          secondaryLabel="Long"
        />
        <ProgressStep
          label="Last Promotion"
          secondaryLabel="new date()"
          disabled
        />
        <ProgressStep
          label="Last Deployment"
          secondaryLabel="new date()"
          disabled
        />
      </ProgressIndicator>
      <br></br>
    </div>
  )
}

// 清除浮动
// Bootstrap
  /*
    .clearfix::after {
      display: block;
      clear: both;
      content: "";
    }
  */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // Chart Data
  state = {
    stackedBarData: [
      {
        "group": "PDN",
        "key": "Task1",
        "value": 65000
      },
      {
        "group": "PDN",
        "key": "Task2",
        "value": 29123
      },
      {
        "group": "PDN",
        "key": "Task3",
        "value": 35213
      },
      {
        "group": "PDN",
        "key": "Task4",
        "value": 51213
      },
      {
        "group": "PDN",
        "key": "Task5",
        "value": 16932
      },
      {
        "group": "QUA",
        "key": "Task1",
        "value": 32432
      },
      {
        "group": "QUA",
        "key": "Task2",
        "value": 21312
      },
      {
        "group": "QUA",
        "key": "Task3",
        "value": 56456
      },
      {
        "group": "QUA",
        "key": "Task4",
        "value": 21312
      },
      {
        "group": "QUA",
        "key": "Task5",
        "value": 34234
      },
      {
        "group": "ITG",
        "key": "Task1",
        "value": 12312
      },
      {
        "group": "ITG",
        "key": "Task2",
        "value": 23232
      },
      {
        "group": "ITG",
        "key": "Task3",
        "value": 34232
      },
      {
        "group": "ITG",
        "key": "Task4",
        "value": 12312
      },
      {
        "group": "ITG",
        "key": "Task5",
        "value": 34234
      },
      {
        "group": "UNT",
        "key": "Task1",
        "value": 32423
      },
      {
        "group": "UNT",
        "key": "Task2",
        "value": 21313
      },
      {
        "group": "UNT",
        "key": "Task3",
        "value": 64353
      },
      {
        "group": "UNT",
        "key": "Task4",
        "value": 24134
      },
      {
        "group": "UNT",
        "key": "Task5",
        "value": 32423
      }
    ],
    GroupedBarData: [
      {
        "group": "Opened",
        "key": "Rls1",
        "value": 650
      },
      {
        "group": "Opened",
        "key": "Rls2",
        "value": 291
      },
      {
        "group": "Opened",
        "key": "Rls3",
        "value": 213
      },
      {
        "group": "Opened",
        "key": "Rls4",
        "value": 512
      },
      {
        "group": "Opened",
        "key": "Rls5",
        "value": 169
      },
      {
        "group": "Closed",
        "key": "Rls1",
        "value": 324
      },
      {
        "group": "Closed",
        "key": "Rls2",
        "value": 213
      },
      {
        "group": "Closed",
        "key": "Rls3",
        "value": 564
      },
      {
        "group": "Closed",
        "key": "Rls4",
        "value": 312
      },
      {
        "group": "Closed",
        "key": "Rls5",
        "value": 234
      }
    ],
    pieData: [
      {
        "group": "App1",
        "value": 20000
      },
      {
        "group": "App2",
        "value": 65000
      },
      {
        "group": "App3",
        "value": 75000
      },
      {
        "group": "App4",
        "value": 1200
      },
      {
        "group": "App5",
        "value": 10000
      },
      {
        "group": "App6",
        "value": 25000
      }
    ],
    lineData: [
      {
        "group": "Base Release",
        "date": "2018-12-31T16:00:00.000Z",
        "value": 50000,
        "surplus": 985797498.476142
      },
      {
        "group": "Base Release",
        "date": "2019-01-04T16:00:00.000Z",
        "value": 65000,
        "surplus": 679612687.4356447
      },
      {
        "group": "Base Release",
        "date": "2019-01-07T16:00:00.000Z",
        "value": null,
        "surplus": 12781.15548292859
      },
      {
        "group": "Base Release",
        "date": "2019-01-12T16:00:00.000Z",
        "value": 49213,
        "surplus": 273767631.1197295
      },
      {
        "group": "Base Release",
        "date": "2019-01-16T16:00:00.000Z",
        "value": 51213,
        "surplus": 335695408.3486776
      },
      {
        "group": "Build Release",
        "date": "2019-01-01T16:00:00.000Z",
        "value": 0,
        "surplus": 13085.612632446391
      },
      {
        "group": "Build Release",
        "date": "2019-01-05T16:00:00.000Z",
        "value": 57312,
        "surplus": 669723396.9037101
      },
      {
        "group": "Build Release",
        "date": "2019-01-07T16:00:00.000Z",
        "value": 27432,
        "surplus": 186302994.77014175
      },
      {
        "group": "Build Release",
        "date": "2019-01-14T16:00:00.000Z",
        "value": 70323,
        "surplus": 1003076676.7852507
      },
      {
        "group": "Build Release",
        "date": "2019-01-18T16:00:00.000Z",
        "value": 21300,
        "surplus": 200402318.5217033
      },
      {
        "group": "Delta Release",
        "date": "2018-12-31T16:00:00.000Z",
        "value": 50000,
        "surplus": 1116574121.9632893
      },
      {
        "group": "Delta Release",
        "date": "2019-01-04T16:00:00.000Z",
        "value": null,
        "surplus": 7855.563849988673
      },
      {
        "group": "Delta Release",
        "date": "2019-01-07T16:00:00.000Z",
        "value": 18000,
        "surplus": 169266423.42736316
      },
      {
        "group": "Delta Release",
        "date": "2019-01-12T16:00:00.000Z",
        "value": 39213,
        "surplus": 665790936.7589194
      },
      {
        "group": "Delta Release",
        "date": "2019-01-16T16:00:00.000Z",
        "value": 61213,
        "surplus": 1314684321.2544932
      }
    ],

    GaugeData: [
      {
        "group": "value",
        "value": 92
      },
      {
        "group": "delta",
        "value": -5
      }
    ],

    StackedBarFilterData: [
      {
        "group": "Success",
        "date": "2018-12-31T16:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Success",
        "date": "2019-01-04T16:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Success",
        "date": "2019-01-07T16:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Success",
        "date": "2019-01-12T16:00:00.000Z",
        "value": 49213
      },
      {
        "group": "Success",
        "date": "2019-01-16T16:00:00.000Z",
        "value": 51213
      },
      {
        "group": "Success",
        "date": "2019-01-02T16:00:00.000Z",
        "value": 75000
      },
      {
        "group": "Success",
        "date": "2019-01-05T16:00:00.000Z",
        "value": 57312
      },
      {
        "group": "Failed",
        "date": "2019-01-07T16:00:00.000Z",
        "value": 21432
      },
      {
        "group": "Failed",
        "date": "2019-01-14T16:00:00.000Z",
        "value": 70323
      },
      {
        "group": "Failed",
        "date": "2019-01-18T16:00:00.000Z",
        "value": 21300
      },
      {
        "group": "Failed",
        "date": "2018-12-31T16:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Failed",
        "date": "2019-01-04T16:00:00.000Z",
        "value": 15000
      },
      {
        "group": "Schedule",
        "date": "2019-01-07T16:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Schedule",
        "date": "2019-01-12T16:00:00.000Z",
        "value": 39213
      },
      {
        "group": "Schedule",
        "date": "2019-01-16T16:00:00.000Z",
        "value": 61213
      },
      {
        "group": "Schedule",
        "date": "2019-01-01T16:00:00.000Z",
        "value": 10
      },
      {
        "group": "Schedule",
        "date": "2019-01-05T16:00:00.000Z",
        "value": 37312
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
        {/* <SideNav
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
        </SideNav> */}

        <br></br>
        <br></br>
        {/* Overview */}
        <Grid fullwidth>
          <Row>
            <Column sm={1} md={2} lg={2}>
              <DemoContent>
                <ChartKPI></ChartKPI>
              </DemoContent>
            </Column>
            <Column sm={1} md={2} lg={2}>
              <DemoContent>
                <ChartKPI></ChartKPI>
              </DemoContent>
            </Column>
            <Column sm={1} md={2} lg={2}>
              <DemoContent>
              <ChartKPI></ChartKPI>
              </DemoContent>
            </Column>
            <Column className="pendingCSS" sm={1} md={8} lg={6}>
              <DemoContent>
                <div style={{backgroundColor: 'yellow'}}>
                  {/* StruturedList */}
                  {/* <div class="container"> */}
                    <StructuredListWrapper selection>
                      {/* List Head */}
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
                      {/* List Body */}
                      <StructuredListBody>
                        {structuredListBodyRowGenerator(6)}
                      </StructuredListBody>
                    </StructuredListWrapper>
                  {/* </div> */}
                </div>
              </DemoContent>
            </Column>
            <Column className="pipelineCSS" sm={1} md={2} lg={6}>
              <DemoContent>
                <>
                  <div>
                      <p style={{float: "left"}}>Pipelines</p>
                      <a href="/" style={{float: "right"}}>View all pipelines</a>
                  </div>
                  <br></br>
                  <hr></hr>
                  <Pipeline></Pipeline>
                  <Pipeline></Pipeline>
                  <Pipeline></Pipeline>
                </>
              </DemoContent>
            </Column>
          </Row>
        </Grid>


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
                <GroupedBarChart
                  data={this.state.GroupedBarData}
                  options={GroupedBarOptions}
                />  
              </div>							
              <div class="col-md-4">
                <PieChart
                  data={this.state.pieData}
                  options={pieOptions}
                />
              </div>							
            </div>	
            <br></br>
            <br></br>
            <div class="row">							
              <div class="col-md-4">
                <LineChart
                  data={this.state.lineData}
                  options={lineOptions}
                />
              </div>							
              <div class="col-md-4">
                <StackedBarChart
                  data={this.state.StackedBarFilterData}
                  options={StackedBarFilterOptions}
                />
              </div>							
              <div class="col-md-4">
                <GaugeChart
                  data={this.state.GaugeData}
                  options={GaugeOptions}
                />
              </div>							
            </div>							
          </div>
          <br></br> */}
          
    </div>
      
    );
  }
}

export default App;