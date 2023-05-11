import React from "react";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";

export default function App(){
  return(
    <>
    <ErrorBoundary>
      <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  )
}