import * as React from "react";

import "./Progressbar.scss";



const Progressbar = ({result, total, width, hasMarker, children}) => {

    const [progress, setProgress] = React.useState(0);
    const [progressTransitionEnd, setProgressTransitionEnd] = React.useState(false);
    const perc = Math.floor((result / total) * 100);
    const ref = React.useRef();



    React.useEffect(() => {
        ref.current.addEventListener("transitionend", () => {
            setProgressTransitionEnd(true);
        });
     });

    React.useEffect(() => {
      if (progress > 0) {
        setProgress(0);
      }
      setTimeout(() => {
        setProgress((perc / 100) * width);
      }, 20);
    }, [perc, width, progress]);
  
    return (
      <div className="progessBar">
        <div className="progessBar__label">{children}</div>
        <div className="progessBar__bar">
          <div
            ref={ref}
            className="progessBar__progress"
            style={{ width: `${progress}px` }}
          ></div>

          <div
            className={`progessBar__percent ${
              progressTransitionEnd ? " progessBar__percent--show" : ""
            }`}
          >
            <div>{perc}%</div>
          </div>
        </div>
        <div className="progessBar__values">
          {result} out of {total}
        </div>
        <div
          className={`progessBar__marker${
            hasMarker ? " progessBar__marker--show" : ""
          }`}
        >
          <div className="progessBar__marker--marker"></div>
          <div className="progessBar__marker--text">Your Choice!</div>
        </div>
      </div>
    );
}

export default Progressbar
