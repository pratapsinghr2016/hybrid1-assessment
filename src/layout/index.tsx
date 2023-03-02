import { Header } from "@/atoms";
import { NavBarComponent } from "@/molecules";
import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";

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

const LayoutWrapper = ({ children }) => {
  return (
    <Fragment>
      <Header title={"Demo App"} />
      <NavBarComponent>
        <StyledLink href="/">Application</StyledLink>
        <StyledLink href="/">Documentation</StyledLink>
      </NavBarComponent>

      <main>{children}</main>

      <footer>Footer</footer>
    </Fragment>
  );
};

export default LayoutWrapper;
