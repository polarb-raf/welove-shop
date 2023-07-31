import { ReactElement } from 'react';

import Nav from '@components/common/Nav';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
