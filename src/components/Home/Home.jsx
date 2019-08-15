import React from 'react';
import logo from '../../img/logo.svg';
import { Paragraph } from '../common/Typography';

const Home = () => (
  <div>
    <div>
      <img src={logo} width="480px" alt="logo" />
    </div>
    <Paragraph>React UI kit (used by BinaryCapsule).</Paragraph>
    <div style={{ marginTop: 48, fontSize: 32 }}>
      <span role="img" aria-label="man construction worker">
        👷‍♂️
      </span>
      <span role="img" aria-label="pill">
        💊
      </span>
      <span role="img" aria-label=":construction sign">
        🚧
      </span>
    </div>
  </div>
);

export default Home;
