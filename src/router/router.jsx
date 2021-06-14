
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './../App';
import Saterday from './../days/saterday';
import Sunday from './../days/sunday';
import Monday from './../days/monday';
import Tuseday from './../days/tusaday';
import Thurthday from './../days/thurthday';
import wednthday from './../days/wednthday';




class Routerr extends Component {
  
    render() { 

        return ( 
            <Router>
                <Switch>
                    <Route path="/" exact component={App} /> 
                    <Route path="/Saterday"  component={Saterday} />
                    <Route path="/Sunday" component={Sunday} />
                    <Route path="/Monday" component={Monday} />
                    <Route path="/Tuseday" component={Tuseday} />
                    <Route path="/Thurthday" component={Thurthday} />
                    <Route path="/wednthday" component={wednthday} /> 
                </Switch>
            </Router>
         );
    }
}
 
export default Routerr;