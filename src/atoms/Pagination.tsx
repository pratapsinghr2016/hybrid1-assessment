import { useState } from "react";
import styled from "styled-components";

const PaginationButton = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 15px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid;
  border-left: 1px dotted;
  border-right: unset;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
`;

const highlightedStyleObj = {
  width: "3.5rem",
  height: "3.5rem",
  backgroundColor: "#ff5733",
  color: "#ffffff",
  borderRadius: "2px",
};

const Pagination = (props) => {
  const { currentPage, onNextClick, onPrevClick, onPageNumberClick } = props;
  const [clickedItem, setClickedItem] = useState(""); // left | number | right

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage == 1}
        onClick={() => {
          setClickedItem("left");
          onPrevClick();
        }}
        style={clickedItem == "left" ? highlightedStyleObj : {}}
      >
        {"<< "}
      </PaginationButton>
      {[...Array(5)].map((_, idx) => (
        <PaginationButton
          disabled={currentPage == idx + 1}
          key={idx}
          onClick={() => {
            setClickedItem("number");
            onPageNumberClick(idx + 1);
          }}
          style={
            clickedItem == "number" && currentPage == idx + 1
              ? highlightedStyleObj
              : {}
          }
        >
          {idx + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={currentPage == 10}
        onClick={() => {
          setClickedItem("right");
          onNextClick();
        }}
        style={clickedItem == "right" ? highlightedStyleObj : {}}
      >
        {" >>"}
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
