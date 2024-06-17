import React from 'react';
import "./projects.css";

function Portfolio() {
    const projects = [
        {
            name: "Event Planner",
            description: "A web application to plan and manage events.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPVnNptLusw9xlFcC6s1QzwlxPtFRoBNFaQ&s"
        },
        {
            name: "Food Delivery App",
            description: "An app to order food from various restaurants.",
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Expense Tracker",
            description: "A tool to track your expenses and manage budgets.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zxDqFXvDJwigbmS64Clsy5JDE_dQ48xw6w&s"
        },
        {
            name: "Habibi (Traveling App)",
            description: "A travel app to plan and book trips.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1OEkq5CPldILjktgGqnpJq1zYYgvQTLe_Q&s"
        }
    ];

    return (
        <>
        <h1>Projects</h1>
        <hr></hr>
            <div className="portfolio">
                {projects.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <div className="description">
                            <p>{project.description}</p>
                            <div className="buttons">
                                <button>View Project</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Portfolio;
