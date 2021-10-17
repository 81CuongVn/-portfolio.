import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Skills = lazy(() => import('./pages/Skills'));
const Works = lazy(() => import('./pages/Works'));
const Contact = lazy(() => import('./pages/Contact'));
const Discord = lazy(() => import('./pages/redirects/Discord'));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/skills" component={Skills} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Route path="/discord" component={Discord} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}
