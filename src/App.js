import './App.css';
import styled,{ThemeProvider} from 'styled-components'
import {useState,useEffect} from 'react';
import {darkTheme, lightTheme} from './utils/Themes'
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Education from './component/Education';
import Footer from './component/Footer';
import Experience from './component/Experience';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectDetails from './component/ProjectDetails'



const Body = styled.div`
 background-color: ${({theme}) => theme.bg};
 width:100%;
 height:100%;
 overflow-x: hidden;
 `;

 const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode]= useState(true);
  const [openModal, setOpenModal]=useState({state:false, project:null});
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
      <Router>
       <Navbar />
       <Body>

         <HeroSection/>
         <Wrapper>
           <Skills />
           <Experience/>
    
         </Wrapper>
         <Projects openModal={openModal} setOpenModal={setOpenModal}/>
         <Wrapper>
            <Education />
            <Contact/>
            
          </Wrapper>
          <Footer/>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        
        </Body>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
