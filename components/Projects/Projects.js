import uniqid from 'uniqid'
import { ExternalLink } from 'react-external-link';

// import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import bitcoin from '../images/bitcoin.png';
import disneyclone from '../images/disneyclone.png';
import  onlinebank from '../images/onlinebank.png';


function Projects(){
  // if (!projects.length) return null

  return (
    <section id='projects' className='container'>
      <h2 className='section__title'>Projects</h2>

      <div className='box-container '>
        {/* {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))} */}

<div className="box">
            <img src={bitcoin} alt=""/>
            <h3>Bitcoin Search</h3>
            <p>This app was made with react and we used a third party api to fetch data</p>
            <ExternalLink href="https://cryptodaily.netlify.app/">
      <span className="btn">Visit the site</span>
    </ExternalLink>        </div>

        <div className="box">
            <img src={disneyclone} alt=""/>
            <h3>Disney Clone</h3>
            <p>This a movie app that covers functionalities like google authentication and redux</p>
            <ExternalLink href="https://disney-clone-d1e27.firebaseapp.com/">
      <span className="btn">Visit the site</span>
    </ExternalLink>        
    </div>

        <div className="box">
            <img src={onlinebank} alt=""/>
            <h3>OnlineBank</h3>
            <p>This is a frontend mentor challenge i took part in,it was purely 
              built with html5 and css3.
            </p>
            <ExternalLink href="https://online-bank.netlify.app/">
      <span className="btn">Visit the site</span>
    </ExternalLink>
        </div>

  


      </div>
    </section>
  )
}

export default Projects
