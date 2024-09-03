import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LinkTree from './LinkTree/LinkTree';
import Portfolio from './Portfolio/Porfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LinkTree />}></Route>
      <Route path='/portfolio' element={<Portfolio />} />
    </>
  )
);

export default router;
