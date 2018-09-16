import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HotelView from "./components/HotelView/HotelView";


class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="content">
                    <Sidebar/>
                    <HotelView/>
                </div>
            </div>
        );
    }
}

export default App;
