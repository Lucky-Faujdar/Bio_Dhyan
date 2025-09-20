import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Space from "../Pages/Space";
import Upload from "../Pages/Dashboard/upload";
import ImageGeneratorPage from "../Pages/Dashboard/ImageGenerator";
import GraphGeneratorPage from "../Pages/Dashboard/GraphGenerator";
import QuizPage from "../Pages/Dashboard/Quiz";
import GamifiedLearning from "../Pages/Dashboard/GamifiedLearning";

const MainRoutes = () => {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden overflow-hidden">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/galaxy" element={<Space />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/image-generator" element={<ImageGeneratorPage />} />
          <Route path="/graph-generator" element={<GraphGeneratorPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/gamified-learning" element={<GamifiedLearning />} />
        </Routes>
    </div>
  );
};

export default MainRoutes;

      // <div className="absolute w-full h-full z-10">