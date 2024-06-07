import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Fourhomecards from '@site/src/components/Fourhomecards';


import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (


<div className='homehero padding-vert--lg'>
  <div className="container margin-top--lg" >
  <div className="row ">
    
    <div className="col col--1">
      <div className=""></div>
    </div>
    <div className="col col--3 text--center padding-horiz--md">
      <div className="" > <img src="./img/docux.png" style={{borderRadius:'50%'}}></img></div>
   
    </div> 
    <div className="col col--6 text--center  ">
      <div className=" padding-vert--xl"><h1 className="hero__title ">Bienvenue</h1>
            <p className="hero__subtitle">Cet espace est dédié à mon exploration de docusaurus </p>
            <p className="">Ici vous retrouvez toutes les infos sur developpement et recherche ainsi que mes notes </p></div>
            
    </div>
    <div className="col col--1">
      <div className=""></div>
    </div>
  </div>

    
    </div>
    </div>
  );
}

export default function Home() {
  
  return (
    <Layout>
      <HomepageHeader />
      <main>
      <div className='homebody padding-vert--lg'>
      <div className="container margin-top--lg">
  <div className="row">
    
    <div className="col ">
      <div className=""></div>
    </div>
    
    <div className="col  text--center  ">
      <div className=" padding-vert--xl"><h1 className="hero__title ">Description of xxx components</h1>
            <p className="hero__subtitle">hero__subtitle</p>
            <p className="">test  xx </p></div>
            
    </div>
    <div className="col ">
      <div className=""></div>
    </div>
  </div>

    
    </div></div>
      </main>

    </Layout>
  );
}
