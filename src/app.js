import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import AppBar from './components/app-bar';
import Welcome from './components/welcome';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageRouted: Welcome
        };
    }

    routePage = (page) => {
        this.setState({pageRouted: page})
    }

    render() {
        //console.logI('hear')
        return (
            <div>
                <Dialog fullScreen={Boolean("true")} open={Boolean("true")}>
                    <DialogTitle style={{padding: 0}}>
                        <AppBar mainApp={this}></AppBar>
                    </DialogTitle>
                    
                    <DialogContent className={'mainContent'}>
                        <Router>
                            <Route component={this.state.pageRouted}/>
                        </Router>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
