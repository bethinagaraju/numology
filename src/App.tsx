import { BrowserRouter } from 'react-router-dom';
import { SiteLayout } from '@/layouts/SiteLayout';

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
