import LayoutWrapper from "@/layout";

function Details() {
  return (
    <LayoutWrapper>
      <h1>Details page</h1>
      <section>
        <h2 id="hybrid1-assessment">Hybrid1 assessment</h2>
        <p>
          <strong>Objective</strong>
        </p>
        <blockquote>
          <p>
            To create a demo application highlighting the various factors
            involved in development standards like:
          </p>
          <ul>
            <li>Code quality</li>
            <li>Modularity</li>
            <li>Folder structure</li>
            <li>Name convention followed</li>
            <li>Optimized usage of technolgy like Virtual DOM</li>
            <li>
              Optimization techniques (Asset optimization, lazyloads,
              memoization, etc.)
            </li>
            <li>Type checking</li>
            <li>Test cases</li>
            <li>Scalibility</li>
            <li>Standards of design-system</li>
          </ul>
        </blockquote>
        <p>
          <strong>Tech stack used</strong>
        </p>
        <ul>
          <li>
            Typescript
            <ul>
              <li>
                For static type checking
                <ul>
                  <li>Styled-component</li>
                  <li>To follow the custom yet adaptable design-system</li>
                  <li>PNPM</li>
                  <li>As node package manager</li>
                  <li>Next-js</li>
                  <li>
                    To enable SSR &amp; inbuilt features like file-based routing
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>General User-flow</strong>
          <a href="https://www.linkpicture.com/view.php?img=LPic6401ded5a0c95454104563">
            <img
              src="https://www.linkpicture.com/q/Untitled-Diagram-Page-1.jpg"
              alt="image"
              width={"100%"}
            />
          </a>
        </p>
        <p>
          <strong>Profiler report</strong>
        </p>
        <p>
          <a href="https://www.linkpicture.com/view.php?img=LPic6401b068638e9427468683">
            <img
              width={"100%"}
              src="https://www.linkpicture.com/q/re1_2.jpg"
              alt="image"
            />
          </a>
        </p>
        <blockquote>
          <p>
            Note: Here&#39;s there&#39;s a clear highlighted parts like top-two
            rows which need the improvement. But before considering the point of
            improvement there are few points to be considered like:
          </p>
          <ul>
            <li>
              The application we made is filled with 20 item list. Which unless
              all items are present on the DOM it will cause the continous work
              for completing the ocmplete CRP (content rendering path). Which
              collectively or its better to say that due to React&#39;s out of
              the box batch processing mechanisim we are able to see render time
              of ~38 ms But, human eye can notice only 30 frames per second i.e
              1000/30 = 33.33 ms but if we consider other factors like network
              calls &amp; React&#39;s internal mechanisim its almost near to
              what is expected.
            </li>
          </ul>
        </blockquote>
        <p>
          <strong>Other traits</strong>
        </p>
        <ul>
          <li>Design system : obstained from styled-component</li>
        </ul>
        <p>
          <strong>POI (Points of improvement)</strong>
        </p>
        <ul>
          <li>
            Folder structure is not optimum i.e atomic structure of folders can
            be improved
          </li>
          <li>More modularity can be obtained</li>
          <li>
            More features like filters can be introduced as its supported by API
          </li>
          <li>Performance can be improved</li>
          <li>
            If application would have chances to scale then usage of libraries
            like axios, RTK &amp; ReactQuery comes in picture
          </li>
        </ul>
        <p>
          <strong>Local setup</strong>
        </p>
        <pre>
          <code>
            <div>1- clone the project from given repo link</div>)
            <div>2- Must have node installed on your PC</div>
            <div>3- npm install -g pnpm</div>
            <div>4- Must have node installed on your PC</div>
            <div>
              5- create .env.local &amp; add the following value:
              NEXT_PUBLIC_API_URL = https://hn.algolia.com/api/v1
            </div>
            <div>6- pnpm run dev</div>
          </code>
        </pre>
        <p>
          <strong>Author</strong>
          <br />
          <em>Name: Rajat Pratap Singh</em>
          <br />
          <em>E-mail: pratapsinghr2016@gmail.com</em>
          <br />
          <em>
            Linkedin:
            <a
              style={{ color: "#FF5733", fontWeight: 600 }}
              href="https://www.linkedin.com/in/rajat-pratap-singh-sse/"
            >
              Click here
            </a>
          </em>
          <em>
            <br />
            Resume:
            <a
              style={{ color: "#FF5733", fontWeight: 600 }}
              href="https://drive.google.com/file/d/1pik0LQJyyrRmlpT_U_fPuulAvap4OW27/view?usp=sharing"
            >
              Click here
            </a>
          </em>
        </p>
      </section>
    </LayoutWrapper>
  );
}

export default Details;
