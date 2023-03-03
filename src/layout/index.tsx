import { Header } from "@/atoms";
import { NavBarComponent } from "@/molecules";
import { LayoutProps } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";
const ErrorBoundary = dynamic(() => import("./ErrorBoundary"));
const FooterComponent = dynamic(() => import("../organism/Footer"));

const StyledLink = styled(Link)`
  margin: 0px 2rem;
  padding: 0.1rem 0.5rem;
  text-align: center;
  border-radius: 2rem;
  font-weight: 400;
  border: 1px solid #ff5733;
  :hover {
    background-color: #ffffff;
    color: #333;
  }
`;

const LayoutWrapper = (props: LayoutProps) => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Header title={"Demo App"} />
        <NavBarComponent>
          <StyledLink href="/">Application</StyledLink>
          <StyledLink href="/docs">Documentation</StyledLink>
        </NavBarComponent>
        <main>{props.children}</main>
        <FooterComponent />
      </ErrorBoundary>
    </Fragment>
  );
};

export default LayoutWrapper;
