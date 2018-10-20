import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INfo</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
      <div>
          <p>Private info.</p>
          <WrapperComponent {...props}/>
      </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDom.render(<AdminInfo info="Testing q123" />,document.getElementById('app'));


