import { useEffect } from "react";

import Home from "../../components/MainPageComponents/Home/Home";
import Features from "../../components/MainPageComponents/Features/Features";

export default function MainPage() {

  useEffect(() => window.scrollTo(0, 0))

  return (
    <>
      <Home/>
      <Features/>
    </>
  )
}