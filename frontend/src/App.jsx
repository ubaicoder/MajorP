import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSign from "./Components/LoginSign/LoginSign";
import Hero from "./Components/Hero/Hero";
import  {LandingPage}  from "./Components/LandingPage/LandingPage";
import InterviewSetup from "./Components/InterviewSetup/InterviewSetup";
import InterviewSession from "./Components/InterviewSession/InterviewSession";
import InterviewResults from "./Components/Result/InterviewResults";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <LandingPage />
        </>
      )
    },
    {
      path: "/tohero",
      element: (
        <>
        <Hero />
        </>
      )
    },
    {
      path: "/toLogin",
      element: (
        <>
        <LoginSign />
        </>
      )
    },
    {
      path: "/toInterviewset",
      element: (
        <>
        <InterviewSetup/>
        </>
      )
    },
    {
      path: "/tointerviewSession",
      element: (
        <>
        <InterviewSession />
        </>
      )
    },
    {
      path: "/toresults",
      element: (
        <>
        <InterviewResults />
        </>
      )
    }
    
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App
