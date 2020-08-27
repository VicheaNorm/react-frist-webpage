import React from 'react';
import '../styles/main.css';
import Header from '../components/Header'
import SectionCard from '../components/SectionCard'
import Test from '../components/test'
import Achievements from '../components/Achievements'
import StoryOfSai from '../components/storyOfSai'

function App() {
  return (
    <div className="w-auto">
      <Header />
      <SectionCard />
      
      <Achievements />
      <StoryOfSai />
    </div>
  );
}

export default App;
