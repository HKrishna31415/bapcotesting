
import React from 'react';
import ReactDOM from 'react-dom/client';
import AcousticThermalFootprintAssessmentApp from './AcousticThermalFootprintAssessmentApp';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AcousticThermalFootprintAssessmentApp />
  </React.StrictMode>
);
