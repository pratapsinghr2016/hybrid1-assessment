import styled from "styled-components";

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > div {
    flex-grow: 1;
    width: 33%;
    height: 100px;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  line-height: 1px;
  & + a {
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    & + a {
      font-size: 1.1rem;
    }
  }
`;

const MediaLinkContainer = styled.div`
  display: flex;
  padding-top: 2.2rem;
  justify-content: space-evenly;
  > a {
    font-size: 1.1rem;
    border: 2px solid #ffffff;
    padding: 0.5rem;
    border-radius: 2rem;
    background-color: #f5b174;
  }
`;

const FooterComponent = () => {
  return (
    <footer>
      <FooterContent>
        <div>
          <Title>Demo Application</Title>
          <a href="" target="_blank">
            Created by Rajat
          </a>
        </div>

        <div>
          <Title>Blogs</Title>
          <a href="" target="_blank">
            Hashnode
          </a>
        </div>

        <div>
          <Title>Contacts</Title>
          <a href="tel:+91-9877411556">+91-9877411556</a>
          <a href="mailto:pratapsinghr2016@gmail.com">
            pratapsinghr2016@gmail.com
          </a>
        </div>
      </FooterContent>
      <hr />
      <MediaLinkContainer>
        <a
          href="https://www.linkedin.com/in/rajat-pratap-singh-sse/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a target="_blank" href="https://hashnode.com/@iJustCode">
          Hashnode
        </a>
        <a target="_blank" href="https://leetcode.com/code_road/">
          Leetcode
        </a>
        <a target="_blank" href="https://github.com/pratapsinghr2016">
          Github
        </a>
      </MediaLinkContainer>
    </footer>
  );
};

export default FooterComponent;
