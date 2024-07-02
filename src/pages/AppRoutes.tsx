import { Route, Routes } from 'react-router-dom';
import LinkTree from './LinkTree/LinkTree';
import DarkModeButton from '@/components/common/DarkModeButton';
import WhatsappButton from '@/components/common/WhatsappButton';

const AppRoutes = () => {
  return (
    <>
      <WhatsappButton />
      <DarkModeButton />
      <Routes>
        <Route path='/' element={<LinkTree />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
