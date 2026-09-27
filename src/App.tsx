import { HashRouter } from 'react-router-dom';
import { SiteLayout } from '@/layouts/SiteLayout';

function App() {
  return (
    <HashRouter>
      <SiteLayout />
    </HashRouter>
  );
}

export default App;
