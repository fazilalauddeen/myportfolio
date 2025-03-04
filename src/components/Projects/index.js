import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'full stack' ?
            <ToggleButton active value="full stack" onClick={() => setToggle('full stack')}>FULL STACK</ToggleButton>
            :
            <ToggleButton value="full stack" onClick={() => setToggle('full stack')}>FULL STACK</ToggleButton>
          }
          <Divider />
          {toggle === 'react js' ?
            <ToggleButton active value="react js" onClick={() => setToggle('react js')}>REACT JS</ToggleButton>
            :
            <ToggleButton value="react js" onClick={() => setToggle('react js')}>REACT JS</ToggleButton>
          }
          <Divider />
          {toggle === 'spring boot' ?
            <ToggleButton active value="spring boot" onClick={() => setToggle('spring boot')}>SPRING BOOT</ToggleButton>
            :
            <ToggleButton value="spring boot" onClick={() => setToggle('spring boot')}>SPRING BOOT</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
