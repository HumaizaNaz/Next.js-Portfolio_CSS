import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Cards/Cards'
// import styles from './Projects.module.css'; // Import custom CSS module

const data =[ 
    {
        id:0,
        title:"Resume Builder App",
        desc:" Built a seamless Resume BuliderApp using Html ,CSS,Typescript to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/Resume.png",
        tags:["React","Tailwind"]
    },
    {
        id:1,
        title:"GIAIC Website",
        desc:"Built a seamless GIAIC website clone using Next.js to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/gov.jpg",
        tags:["Next.js","Tailwind"]
    },
    {
        id:2,
        title:"Responsive CV",
        desc:"Developed a professional CV to demonstrate my ability to build fast, responsive, and dynamic by using cutting-edge technologies.",
        img:"/facebook.jpg",
        tags:["HTML5","CSS3","Javascript"]
    },
   
    {
        id:3,
        title:"Travel Management website",
        desc:"Built a seamless jungle traveling experience website to showcase my skills in creating fast, responsive, and dynamic web applications.",
        img:"/jung.jpg",
        tags:["HTML5","CSS3"]
    },{
        id:4,
        title:"Portfolio website",
        desc:"Created a professional portfolio website to showcase my skills in building fast, responsive, and dynamic web applications using modern technologies",
        img:"/port.jpg",
        tags:["HTML5","CSS3","Javascript"]

    
    },
    {
        id:5,
        title:"Facebook Clone",
        desc:"Built a Facebook clone using HTML5 and CSS3, featuring login, sign-in, and forgotten password pages to showcase my skills in creating dynamic web applications",
        img:"/j.jpg",
        tags:["Html","Css","Typescript"]
        
    },
   
    {
        id:6,
        title:"HoroScope Website",
        desc:"Built a horoscope website using HTML, CSS, and TypeScript, providing personalized horoscope results with interactive features",
        img:"/horro.jpg",
        tags:["Html","Css","Typescript"]
    },
    {
        id:7,
        title:"ToDo App",
        desc:" Built a seamless ToDo app using React.js to showcase my skills in creating fast, responsive, and dynamic web applications",
        img:"/todo.jpg",
        tags:["React","Tailwind"]
    },
    {
        id:8,
        title:"Easypaisa CLI",
        desc:"Built an EasyPaisa CLI application using TypeScript and Node.js, offering a simple and efficient way to interact with payment services",
        img:"/Easypaisa.jpg",
        tags:["Html","Css","Typescript"]
        
    },
]

  
const Projects = () => {
  return (
    <div id='projects' className='container pt-32 no-underline '>
        <Heading title='My Projects ' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center no-underline'>
            {data.map((el) => (
           <Card
            key ={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags} 
            
            />
            ))}
        </div>
      
    </div>
  )
}

export default Projects
