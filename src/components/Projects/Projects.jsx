import React from 'react';
import "./projects.css";

// Importing images from the assets folder
import ExpenceImage from '../../assets/Expence.png';
import FoodDelImage from '../../assets/Food-Del.png';
import HabibiImage from '../../assets/Habibi.png';
import PlannerImage from '../../assets/planner.png'; 

function Portfolio() {
    const projects = [
        {
            name: "Habibi (Traveling App)",
            description: "A travel app to plan and book trips.",
            image: HabibiImage,
            viewUrl: "https://travel-and-stay-five.vercel.app/",
            githubUrl: "https://github.com/clairemuiru1/Travel-and-Stay"
        },
        
        {
            name: "Food Delivery App",
            description: "An app to order food from various restaurants.",
            image: FoodDelImage,
            viewUrl: " https://food-delivery-k1br.vercel.app/",
            githubUrl: "https://github.com/clairemuiru1/Food-Delivery"
        },
        {
            name: "Expense Tracker",
            description: "A tool to track your expenses and manage budgets.",
            image: ExpenceImage,
            viewUrl: "https://expense-tracker-git-main-clairemuiru1s-projects.vercel.app/",
            githubUrl: "https://github.com/clairemuiru1/Expense-tracker"
        },
        {
            name: "Event Planner",
            description: "A web application to plan and manage events.",
            image: PlannerImage, 
            viewUrl: "https://example.com/event-planner",
            githubUrl: "https://github.com/Moringa-Group-Work/server"
        }
        
    ];

    return (
        <>
            <h1 className='h1'>Explore My Projects</h1>
            <h4 className="h3">Innovative Solutions and Real-World Impact</h4>
            <div className="portfolio">
                {projects.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <div className="description">
                            <p>{project.description}</p>
                            <div className="buttons">
                                <a href={project.viewUrl} target="_blank" rel="noopener noreferrer">
                                    <button>View Project</button>
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <button>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Portfolio;
