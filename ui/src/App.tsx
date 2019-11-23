import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Accepted } from './Leads/Accepted';
import { Invited } from './Leads/Invited';
import { Header } from './Header';
import { Container } from './shared/styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Route path="/" exact={true} component={Invited} />
        <Route path="/accepted" component={Accepted} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
