import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import BlogPage from "./components/BlogPage";
import Sublayouts from "./components/Sublayouts";
import { useState } from "react";
import BlogLayout from "./components/BlogLayout";
function App() {
  const [blogs, setblogs] = useState([
    {
      id: 1,
      title: "Work In Progress",
      text: "Learn more about June’s product releases and their early impact on lead flow to designers",
    },
    {
      id: 2,
      title: "Celebrating Pride Month Through Design",
      text: "Dribbble is proud to celebrate the LGBTQIA+ community through design. We’ve curated a selection of impactful Pride-themed artwork from our talented designers, each sharing their connection to the work and the deeper meaning behind their creations.",
    },
    {
      id: 3,
      title:
        "Unlock opportunity and showcase your skills with a Webflow Expert badge",
      text: "If you’re a designer who has mastered Webflow and wants to show off your skills, you can earn an Expert badge for your Dribbble profile and appear on our exclusive Webflow Expert landing page.",
    },
    {
      id: 4,
      title:
        "Balkan Bros: Building a Legacy of Trust from Progressive Insurance to AWS",
      text: "BB Agency’s success story is built on the power of long-term relationships and creative innovation. When a design project for Progressive Insurance led to a new product design for AWS, BB Agency’s seamless transition across industries and companies created a lasting impression of trust and consistency. Explore how they navigated these partnerships and how platforms like Dribbble played a crucial role in their growth and visibility",
    },
    {
      id: 5,
      title: "How to Make Emails That Survive the Delete Button",
      text: "What worked back in the day–or even a few years ago (cough, cough: emojis in email subject lines; random personalization that feels specific but isn’t), no longer captures attention. In fact, there are some common reasons why your emails might end up in the SPAM folder (or be left unread forever).",
    },
  ]);

  const addBlog = (title, text) => {
    const newBlog = { id: Date.now(), title, text };
    setblogs([newBlog, ...blogs]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="blogpage" element={<BlogLayout />}>
          <Route
            path=""
            element={<BlogPage blogs={blogs} addBlog={addBlog} />}
          />
          <Route path="blog" element={<Sublayouts />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
