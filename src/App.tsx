import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@components/common/Layout';
import Main from '@src/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
