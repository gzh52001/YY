import React from 'react';
import './App.scss';
import Math from './component/Math'
import Footer from './component/Footer'
import 'antd/dist/antd.css';
class App extends React.Component{
  render(){
      return (
    <div className="App">
      <Math/>
      <Footer/>
    </div>
  );
  }
}
export default App;
