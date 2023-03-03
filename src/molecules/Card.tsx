import Link from "next/link";
import { useCallback, useMemo } from "react";
import styled from "styled-components";

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

type CardComponentProps = {
  title: string;
  author: string;
  id: string;
  comments: string;
  relevancy: string;
  points: string;
};

const labelObj = {
  low: {
    label: "Low",
    color: "#a3a3a3",
    border: "2px solid #333",
  },
  medium: {
    label: "Medium",
    color: "#e7a74e",
    border: "2px solid #FF5733",
  },
  high: {
    label: "High",
    color: "#76b376",
    border: "2px solid green",
  },
};

const CardComponent = ({
  title,
  comments,
  relevancy,
  points,
  author,
  id,
}: CardComponentProps) => {
  const commentCount = useMemo((): number | string => {
    let intCount: number | string = Number(comments);

    const getTwoDecimalValue = (num: number) => Math.round(num * 100) / 100;

    if (intCount >= 1000000) {
      intCount = getTwoDecimalValue(intCount / 1000000) + "M";
    } else if (intCount >= 1000) {
      intCount = getTwoDecimalValue(intCount / 1000) + "K";
    }

    return intCount;
  }, [comments]);

  const relevancyLabelObj = useMemo(() => {
    const relevancyInt = relevancy ? Number(relevancy) : 0;
    if (relevancyInt < 3000) {
      return labelObj.low;
    } else if (relevancyInt > 3000 && relevancyInt < 6000) {
      return labelObj.medium;
    }

    return labelObj.high;
  }, [relevancy]);

  const pointsLabelObj = useMemo(() => {
    const pointsInt = points ? Number(points) : 0;
    if (pointsInt < 500) {
      return labelObj.low;
    } else if (pointsInt > 500 && pointsInt < 1000) {
      return labelObj.medium;
    }

    return labelObj.high;
  }, [points]);

  return (
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
            <Title>Comments</Title> <p>{commentCount}</p>
          </Col>
          {/* High | Low | Not Relevant */}
          <Col>
            <Title>Relevance</Title>{" "}
            <Chip
              style={{
                backgroundColor: relevancyLabelObj.color,
                border: relevancyLabelObj?.border,
              }}
            >
              {relevancyLabelObj.label}
            </Chip>
          </Col>
          {/* Recommended | Not-recommended | Free will */}
          <Col>
            <Title>Recommended</Title>{" "}
            <Chip
              style={{
                backgroundColor: pointsLabelObj.color,
                border: pointsLabelObj.border,
              }}
            >
              {pointsLabelObj.label}
            </Chip>
          </Col>
        </CardRow>
      </Link>
    </Card>
  );
};

export default CardComponent;
