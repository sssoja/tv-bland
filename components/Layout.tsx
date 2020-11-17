import React, { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Meta />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
