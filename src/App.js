import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar, FlatButton, TextField, Paper, Card, CardHeader, CardText, CardTitle} from "material-ui";

import Reports from "./Reports";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeAddress: "0xd4f52aa7c26b0169f942939d7ee6d72e2e16a4a1",
            workingTime: 1498545234
        }


    }

  render() {

      let containerStyle = {
          margin: "1.5em"
      };

      return (
          <div>
              <MuiThemeProvider>
                  <div>
                      <AppBar title={"Reports"}>
                      </AppBar>
                      <CardHeader title={"Write to contract"}/>
                      <Card containerStyle={containerStyle}>
                          <Paper >
                              <CardTitle>Create report</CardTitle>
                              <TextField ref="employee_address" key="employee_address" defaultValue={this.state.employeeAddress} />
                              <TextField ref="workingTime" key="working_time" defaultValue={this.state.workingTime} style={{marginLeft: 10}}/>
                              <FlatButton onClick={()=>{
                                  var reports = new Reports(this.state.employeeAddress, this.state.workingTime);
                                  this.setState({
                                          reports: reports
                                  })
                              }}>Create</FlatButton>
                          </Paper>
                      </Card>
                      <CardHeader title={"Read from contract"}/>
                      <Card containerStyle={containerStyle}>
                          <Paper>
                              <CardTitle>Get employees</CardTitle>
                              <CardText>{this.state.reports!==undefined?this.state.reports.getEmployees():""}</CardText>
                              <CardTitle>Get day reports</CardTitle>
                              <CardText>{this.state.reports!==undefined?this.state.reports.getDayReports():""}</CardText>
                              <CardTitle>Good points</CardTitle>
                              <CardText>{this.state.reports!==undefined?this.state.reports.getGoodPoints():""}</CardText>
                              <CardTitle>Bad points</CardTitle>
                              <CardText>{this.state.reports!==undefined?this.state.reports.getBadPoints():""}</CardText>
                          </Paper>
                      </Card>
                  </div>
              </MuiThemeProvider>

          </div>
      );
  }
}

  export default App;
