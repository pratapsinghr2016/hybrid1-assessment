import LayoutWrapper from "@/layout";

function Details() {
  return (
    <LayoutWrapper>
      <h1>Details page</h1>
    </LayoutWrapper>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "");
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
  } catch (err) {
    console.error("Err: ", err);
  }
}

export default Details;
