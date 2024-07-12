import React, { useEffect } from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default PageWrapper;
