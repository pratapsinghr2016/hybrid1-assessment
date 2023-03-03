import LayoutWrapper from "@/layout";
import { GetServerSideProps } from "next";

import styled from "styled-components";

const getDate = (dateStr: string) => dateStr.substring(0, 10);

const Page = styled.section`
  margin-top: 5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.2rem;
`;

const PageHeader = styled.section`
  display: flex;
  flex-direction: column;
  > h4 {
    line-height: 0px;
    padding: 0;
    margin: 0;
  }
  > small {
    display: flex;
    align-items: center;
    > p {
      display: inline;
      margin-right: 1rem;
      margin-left: 0.5rem;
    }
    > span {
      color: white
      background-color:#FF5733;
      font-weight: 600;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;

const DetailsRow = styled.section`
  background-color: #fff;
  padding: 0.1rem;
  font-size: 0.9rem;
  padding-left: 0.8rem;
  font-style: italic;
  margin: 0.8rem;
  margin-left: 0;
  line-height: 1.5;
  text-align: left;
  > p {
    font-weight: 700;
    line-height: 0.1;
    font-size: 0.7rem;
    font-style: normal;
  }
`;

const ScrollToTopBtn = styled.button`
  position: absolute;
  right: 6rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ff5733;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  background-color: #333;
`;

type CommentType = {
  text: string;
  id: string;
  created_at: string;
};

type DetailsProps = {
  data: {
    author: string;
    created_at: string;
    title: string;
    type: string;
    children: [CommentType];
  };
};

function Details(props: DetailsProps) {
  const {
    data: { author, created_at: date, title, type, children: comments },
  } = props;

  return (
    <LayoutWrapper>
      <Page>
        <PageTitle>Details page</PageTitle>
        <section>
          <PageHeader>
            <h4>{`${title || "_____"} by ${author || "_____"}`}</h4>
            <small>
              <strong>Created at:</strong>
              <p>{date ? getDate(date) : "N/A"}</p>
              <span>{type || ""}</span>
            </small>
          </PageHeader>
          {comments?.map((item) => (
            <DetailsRow key={item.id}>
              <div
                dangerouslySetInnerHTML={{ __html: item.text || "N/A" }}
              ></div>

              <p>{item.created_at ? getDate(item.created_at) : "N/A"}</p>
            </DetailsRow>
          ))}

          {!!(comments && comments.length) && (
            <ScrollToTopBtn
              onClick={() =>
                window
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : () => {}
              }
            >
              ⬆
            </ScrollToTopBtn>
          )}
        </section>
      </Page>
    </LayoutWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id;

  // Fetch data from external API
  try {
    const path = process.env.NEXT_PUBLIC_API_URL + `/items/${id}` || "";

    const res = await fetch(path);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
  } catch (err) {
    console.error("Err: ", err);
  }
  return { props: { data: null } };
};

export default Details;
