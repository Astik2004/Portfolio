import React from 'react';
import SMS from '../assets/SMS.jpeg';
import Todo from '../assets/Todo.jpeg';
import PlantL from '../assets/PlantL.jpeg';

function ProjectCard({ logo, name, link, desc }) {
    return (
        <div className='relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col justify-between'>
            <img src={logo} className='w-full h-[200px] object-cover' alt={`${name} logo`} />
            <div className='p-4 flex-grow'>
                <h3 className='text-2xl font-semibold text-gray-800'>{name}</h3>
                <p className='mt-2 text-gray-600'>{desc}</p>
            </div>
            <div className="p-4">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 rounded-lg shadow-md'
                >
                    Source Code
                </a>
            </div>
        </div>
    );
}

function Projects() {
    const cardItems = [
        {
            id: 1,
            logo: Todo,
            name: "Todo-App",
            link: "https://github.com/Astik2004/Todo-App",
            desc: "A task management app using React and Node.js, enabling users to add, update, and delete tasks."
        },
        {
            id: 2,
            logo: SMS,
            name: "Student Management System",
            link: "https://github.com/Astik2004/Student-Management-System",
            desc: "A full-stack web application for managing student records with CRUD operations, admin, and user panels."
        },
        {
            id: 3,
            logo: PlantL,
            name: "Plants Leaf Disease Detection System",
            link: "https://github.com/Astik2004/AgroSathi",
            desc: "A machine learning-based system that accurately diagnoses plant diseases from images to enhance crop health management."
        }
    ];

    return (
        <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>PROJECTS</h1>
                <h2 className='text-5xl font-bold mb-5 text-gray-500'>What I've Built</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {cardItems.map((item) => (
                        <ProjectCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
