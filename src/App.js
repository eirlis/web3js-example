import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar, FlatButton} from "material-ui";


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title={"Reports"}>
          </AppBar>
              <FlatButton label={"Бутон"}/>
              <FlatButton label={"Бутон"}/>
              <FlatButton label={"Бутон"}/>
              <FlatButton label={"Бутон"}/>
          </div>
        </MuiThemeProvider>

      </div>
  );
  }
  }

  export default App;
