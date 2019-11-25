import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Accepted } from './Leads/Accepted';
import { Invited } from './Leads/Invited';
import { Header } from './Header';
import { Container } from './shared/styles';
import { PATH } from './shared/lib/raoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Route path={PATH.INVITED} exact={true} component={Invited} />
        <Route path={PATH.ACCEPTED} component={Accepted} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
