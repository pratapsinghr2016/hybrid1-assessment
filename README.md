## Hybrid1 assessment

**Objective**

> To create a demo application highlighting the various factors involved in development standards like:
>
> - Code quality
> - Modularity
> - Folder structure
> - Name convention followed
> - Optimized usage of technolgy like Virtual DOM
> - Optimization techniques (Asset optimization, lazyloads, memoization, etc.)
> - Type checking
> - Test cases
> - Scalibility
> - Standards of design-system

**Tech stack used**

- Typescript
  - For static type checking
- Styled-component
  - To follow the custom yet adaptable design-system
- PNPM
  - As node package manager
- Next-js
  - To enable SSR & inbuilt features like file-based routing

**General User-flow**
[![image](https://www.linkpicture.com/q/Untitled-Diagram-Page-1.jpg)](https://www.linkpicture.com/view.php?img=LPic6401ded5a0c95454104563)

**Profiler report**

[![image](https://www.linkpicture.com/q/re1_2.jpg)](https://www.linkpicture.com/view.php?img=LPic6401b068638e9427468683)

> Note:
> Here's there's a clear highlighted parts like top-two rows which need the improvement. But before considering the point of improvement there are few points to be considered like:
>
> - The application we made is filled with 20 item list. Which unless all items are present on the DOM it will cause the continous work for completing the ocmplete CRP (content rendering path). Which collectively or its better to say that due to React's out of the box batch processing mechanisim we are able to see render time of ~38 ms
>   But, human eye can notice only 30 frames per second i.e 1000/30 = 33.33 ms but if we consider other factors like network calls & React's internal mechanisim its almost near to what is expected.

**Other traits**

- Design system : obstained from styled-component

**POI (Points of improvement)**

- Folder structure is not optimum i.e atomic structure of folders can be improved
- More modularity can be obtained
- More features like filters can be introduced as its supported by API
- Performance can be improved
- If application would have chances to scale then usage of libraries like axios, RTK & ReactQuery comes in picture

**Local setup**

    1) clone the project
    2) must have node-js install on your PC
    3) npm install -g pnpm
    4) create .env.local & add the following value:
        NEXT_PUBLIC_API_URL =  https://hn.algolia.com/api/v1
    5) npm run dev

**Author**
_Name: Rajat Pratap Singh_
_E-mail: pratapsinghr2016@gmail.com_
_Linkedin: [Click here](https://www.linkedin.com/in/rajat-pratap-singh-sse/)_
_Resume:[Click here](https://drive.google.com/file/d/1pik0LQJyyrRmlpT_U_fPuulAvap4OW27/view?usp=sharing)_
