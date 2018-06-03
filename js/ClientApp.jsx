import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function (props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  )
};

const MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title='Game of Thrones hafiz' color='YellowGreen' />
      <MyTitle title='Stranger Things alid' color='GreenYellow' />
      <MyTitle title='Rick and Morty dad' color='LimeGreen' />
      <MyTitle title='House of Cards mom' color='peru' />
      <MyTitle title='blue lions' color='blue' />
    </div>
  )
};

render(<MyFirstComponent />, document.getElementById('app'));
