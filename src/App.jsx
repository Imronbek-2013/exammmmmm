import React from 'react'
import Home from './pages/Home'
import About from './pages/about'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/blog'
import Contact from './pages/Contact'
import MainLayout from './layout/Mainlayout'
import NotFound from './pages/NotFound'
import BlogSingle from './pages/blogsingle'
import ProjectSingle from './pages/projectsingle'
import Team from './pages/team'
import TeamSingle from './pages/Teamsingle'
import ServiceSingle from './pages/ServicesSingle'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/servicessingle" element={<MainLayout><ServiceSingle /></MainLayout>} />
        <Route path="/services/:id" element={<MainLayout><ServiceSingle /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/projectsingle" element={<MainLayout><ProjectSingle /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blogsingle" element={<MainLayout><BlogSingle /></MainLayout>} />
        <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
        <Route path="/team/:id" element={<MainLayout><TeamSingle /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App