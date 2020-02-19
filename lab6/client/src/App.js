import React from 'react';
import FindId from './components/FindId';
import FindName from './components/FindName';
import ReportingArea from './components/ReportingArea';

class App extends React.Component{
  render() {
    return(
      <div>
        <FindId />
        <FindName />
        <ReportingArea />
      </div>
    );
  }
}

export default App;
