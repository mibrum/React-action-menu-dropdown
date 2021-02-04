import './App.scss';
import React from 'react';
import ActionMenu from './components/ActionMenu';
import data from './data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

function App() {
  const popperConfig = {
    placement: 'bottom',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'right', 'bottom'],
        },
      },
    ],
  }

  return (
    <div className="container">
      <ActionMenu popperConfig={popperConfig} icon={<FontAwesomeIcon icon={faEllipsisH} className="button-icon" />} data={data} />
    </div>
  );
}

export default App;
