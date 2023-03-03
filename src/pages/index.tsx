import { Pagination } from "@/atoms";
import LayoutWrapper from "@/layout";
import { CardComponent } from "@/molecules";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ShowListProp, HomeProps, FnPromise } from "@/types";

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const HomePageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > section {
    margin-bottom: 2.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 1rem;
  align-items: center;
  > input {
    width: 100%;
    border-radius: 30px 0px 0px 30px;
    border: 0.2px solid;
    border-right: none;
    padding-left: 1rem;
  }
  > button {
    width: 25%;
    border-radius: 0px 30px 30px 0px;
    border: 0.2px solid;
    border-left: none;
    background-color: #333;
    color: #ffffff;
    height: 2.6rem;
  }
`;

function Home(props: HomeProps) {
  const { data } = props;
  const [dataSt, setDataSt] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debounceFn = (fn: FnPromise) => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (...args: [any]) {
      if (timer) clearTimeout(timer);
      const ctx: any = this;
      timer = setTimeout(() => {
        fn.apply(ctx, args);
      }, 1000);
    };
  };

  useEffect(() => {
    (async () => {
      const path =
        process.env.NEXT_PUBLIC_API_URL +
          `/search?query=${searchedValue}&page=${currentPage}` || "";
      try {
        const res = await fetch(path);
        const data = await res.json();
        setDataSt(data?.hits || []);
      } catch (err) {
        console.error("err:", err);
      }
    })();
  }, [currentPage]);

  const inputChangeHandler = debounceFn(async (value: any) => {
    const path =
      process.env.NEXT_PUBLIC_API_URL +
        `/search?query=${value}&page=${currentPage}` || "";
    setSearchedValue(value);
    try {
      const res = await fetch(path);
      const data = await res.json();
      setDataSt(data?.hits || []);
    } catch (err) {
      console.error("err:", err);
    }
  });

  const showList = (
    {
      title,
      author,
      points,
      objectID,
      num_comments: comments,
      relevancy_score: relevancy,
    }: ShowListProp,
    index: number
  ) => (
    <CardComponent
      title={title}
      author={author}
      comments={comments}
      relevancy={relevancy}
      points={points}
      key={index}
      id={objectID}
    />
  );

  function onNextClickHandler() {
    setCurrentPage((prev) => {
      return prev < 10 ? prev + 1 : prev;
    });
  }

  function onPrevClickHandler() {
    setCurrentPage((prev) => {
      return prev == 1 ? prev : prev - 1;
    });
  }

  function onPageNumberClickHandler(value: number) {
    setCurrentPage(value);
  }

  return (
    <LayoutWrapper>
      <HomePageContainer>
        <SearchContainer>
          <input
            onChange={(e) => inputChangeHandler(e.target.value)}
            placeholder="Search..."
            style={{ height: "2.3rem" }}
          />
          <button>Search</button>
        </SearchContainer>
        <CardSection>
          {dataSt.length ? dataSt.map(showList) : data?.hits?.map(showList)}
        </CardSection>
      </HomePageContainer>

      <Pagination
        currentPage={currentPage}
        onNextClick={onNextClickHandler}
        onPrevClick={onPrevClickHandler}
        onPageNumberClick={onPageNumberClickHandler}
      />
    </LayoutWrapper>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const path = process.env.NEXT_PUBLIC_API_URL + "/search/?page=1" || "";
    const res = await fetch(path);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
  } catch (err) {
    console.error("Err: ", err);
  }
}

export default Home;
