import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30rem;
  background-color: #ffffff;

  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  &: hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  } ;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Col = styled.div`
  flex: 33.33%;
  padding: 0px;
  line-height: 1rem;
`;

const H3 = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

const Title = styled.strong`
  margin-right: 5px;
`;

const Chip = styled.p`
  padding: 0.2rem 0.1rem;
  border: 1px solid;
  width: 100px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  border-radius: 0.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 15px;
  align-items: center;
  border: 1px solid;
  border-radius: 5rem;
  text-align: center;
`;

const CardComponent = ({ title, author, id }) => (
  <Card>
    <Link
      href={{
        pathname: "/details",
        query: { id },
      }}
    >
      <TitleContainer>
        <H3>{title || "N/A"}</H3>
      </TitleContainer>
      <CardRow>
        <Title>Author:</Title>{" "}
        <p
          style={{
            textTransform: "capitalize",
          }}
        >
          {author || "N/A"}
        </p>
      </CardRow>
      <CardRow>
        <Col>
          <Title>Comments</Title> <p>20K</p>
        </Col>
        {/* High | Low | Not Relevant */}
        <Col>
          <Title>Relevance</Title>{" "}
          <Chip style={{ backgroundColor: "green" }}>High</Chip>
        </Col>
        {/* Recommended | Not-recommended | Free will */}
        <Col>
          <Title>Recommended</Title>{" "}
          <Chip style={{ backgroundColor: "green" }}>High</Chip>
        </Col>
      </CardRow>
    </Link>
  </Card>
);

export default CardComponent;
