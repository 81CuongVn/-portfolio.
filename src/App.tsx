import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Skills = lazy(() => import('./pages/Skills'));
const Discord = lazy(() => import('./pages/redirects/Discord'));
const Github = lazy(() => import('./pages/redirects/Github'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/skills" component={Skills} />
        <Route path="/works" />
        <Route path="/contact" />
        <Route path="/discord" component={Discord} />
        <Route path="/github" component={Github} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}
