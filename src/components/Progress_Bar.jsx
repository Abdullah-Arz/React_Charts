import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../sass/Technical_Comp.scss';

function Progress_Bar() {
  // const [progressNow, setProgressNow] = useState(0)
  // const updateProgressNowHandler = setInterval(() => {
  //   if (progressNow >= 70 ){
  //    setProgressNow(70)
  //    clearInterval(updateProgressNowHandler)
  //   }
  //   setProgressNow(s => s+1)
  //  }, 50)

  return <ProgressBar animated now={45}/>;
}

export default Progress_Bar;