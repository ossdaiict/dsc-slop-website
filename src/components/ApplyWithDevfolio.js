import React from 'react';
import './devfolio.css';
import { Typography } from '@material-ui/core';
export default function ApplyWithDevfolio(props) {
  const handleLoad = () => {
    new window.Devfolio({
      key: 'dsc-slop',
      buttonSelector: '#devfolio-apply-now',
    });
  };

  const loadApplyNowScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co';
    script.async = true;
    document.body.appendChild(script);

    script.onload = handleLoad;
  };
  React.useEffect(() => {
    window.onload = loadApplyNowScript();
  }, []);

  return (
    <button id="devfolio-apply-now">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 115.46 123.46"
        {...props}
      >
        <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
        <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
      </svg>
      <Typography>Apply with Devfolio</Typography>
    </button>
  );
}
