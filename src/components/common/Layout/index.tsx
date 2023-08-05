import { ReactElement } from 'react';

import Header from '@components/common/Nav';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
