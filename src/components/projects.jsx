import { FaDatabase, FaShoppingCart, FaDocker, FaReact } from 'react-icons/fa';
import { SiDjango, SiJsonwebtokens } from 'react-icons/si';

const projects = [
    {
        title: 'CRUD Operation',
        description: 'It is the code to determine CRUD operation in Django Rest Framework making flexible for create, update, and delete operation.',
        codeUrl: 'https://github.com/sanjaynep/crud-func',
        icon: <SiDjango />,
    },
    {
        title: 'JWT Authentication',
        description: 'Authenticate user with Django REST API and React frontend. It consists of Access and Refresh token making environment more secure.',
        codeUrl: 'https://github.com/sanjaynep/jwt-auth',
        icon: <SiJsonwebtokens />,
    },
    {
        title: 'Ecommerce Site',
        description: 'It contains all authentication system with social login and simple management with cart and updation of product through database.',
        codeUrl: 'https://github.com/sanjaynep/ecommerce-web',
        icon: <FaShoppingCart />,
    },
    {
        title: 'API Authentication',
        description: 'Provide secure environment for API management giving special permissions to specific person by using Django model permission classes.',
        codeUrl: 'https://github.com/sanjaynep/api_authentication',
        icon: <FaDatabase />,
    },
    {
        title: 'Docker + Redis + Celery',
        description: 'It is the project of connecting Docker with broker Redis to perform asynchronous tasks through Celery and scheduling emails from Celery Beat.',
        codeUrl: 'https://github.com/sanjaynep/my-celery',
        icon: <FaDocker />,
    },
    {
        title: 'CRUD React Project',
        description: 'Simple React-based project in which we fill form and it updates a table, then we can delete and update data through state management.',
        codeUrl: 'https://github.com/sanjaynep/react-crud-structure',
        icon: <FaReact />,
    },
];

export default function Project() {
    return (
        <section id="projects" className="skills-section">
            <div className="skills-inner">
                <div className="section-heading">
                    <h2 className="skills-title">Projects</h2>
                </div>
                <div className="section-divider" />

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.title}>
                            <div className="project-icon">{project.icon}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-actions">
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}