
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/WhatWeDo';
import { Volumetric } from './pages/Volumetric';
import { Volliam } from './pages/Volliam';


function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path={'/'} exact component={Home}></Route>
          <Route path={'/whatwedo'} component={WhatWeDo}></Route>
          <Route path={'/volumetric'} component={Volumetric}></Route> 
          <Route path={'/vol-liam-url'} component={Volliam}></Route> 
        </Switch>
      </div>
    </BrowserRouter>
    {/* <Canvas>
      <OrbitControls />
      <Box />
    </Canvas> */}
    </>
  );
}

export default App;
