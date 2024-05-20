import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (<>
 <Routes>
    <Route  path="/" render={()=><>Home</>} >
    </Route>
  </Routes>
  </>
  )
}



// import { JiraBoard } from "./components/jira-board";
// function App() {
//   return (
//     <>
//       {/* <LearnUseReducer /> */}
//       <JiraBoard />

// import { Route, Routes, createBrowserRouter } from "react-router-dom";

       
// //       <div className=" h-screen bg-red-500">check width</div>
// //         <InfiniteScroll/>
// //     </>
// //   );
// // }

// const router = createBrowserRouter([
//   {
//   path:'/',
//   element: <Root />,
//   errorElement: <>not found</>,
//   children: [
//     { index: true, element: <>home</>}, 
//     { path:'/box1', element: <>Box1</> },
// ],
//  },

// ]);

// function App() {
//   // return <RouterProvider router={router} />;
//   return <>
//   {/* <BrowserRouter> */}
//   <Routes>
//     <Route path="/dashboard" element={<>this is dashboard</>}></Route>
//   </Routes>
//     {/* </BrowserRouter> */}
//   </>
// }

// export default App;