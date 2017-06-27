import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar, FlatButton, TextField} from "material-ui";
import Reports from "./Reports";



class App extends Component {
  render() {
      new Reports();
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title={"Reports"}>
          </AppBar>
              {/*<TextField*/}
                  {/*multiLine={true}*/}
                  {/*rows={2}*/}
                  {/*hintText={}*/}
                  {/*rowsMax={10}/>*/}
          </div>
        </MuiThemeProvider>

      </div>
  );
  }
  }

  export default App;
