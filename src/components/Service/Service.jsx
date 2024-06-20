import React, { useState } from 'react';
import "./Service.css";

const services = [
  {
    title: "Professional Code",
    description: "Delivering high-quality, efficient, and well-documented code that adheres to industry standards. This ensures your software is reliable, maintainable, and scalable. Our focus on best practices and clean architecture guarantees a smooth development process and robust final product.",
  },
  {
    title: "Creative Thinking",
    description: "Leveraging innovative solutions and unique approaches to tackle complex problems. Our creative thinking fosters original ideas that enhance project outcomes, providing you with cutting-edge solutions. This approach ensures your projects stand out and deliver exceptional value to your audience.",
  },
  {
    title: "SEO & Marketing",
    description: "Implementing comprehensive search engine optimization strategies and effective digital marketing campaigns. Our goal is to boost your online presence, drive targeted traffic, and increase conversions. We use data-driven techniques to optimize your content and reach your desired audience efficiently.",
  },
  {
    title: "User-Friendly Design",
    description: "Creating intuitive, accessible, and visually appealing interfaces. Our user-friendly design principles ensure your website or application is easy to navigate and enjoyable to use. We prioritize user experience, making sure your audience has a seamless and satisfying interaction with your platform.",
  },
  {
    title: "Web Development",
    description: "Building robust, scalable websites using modern technologies and best practices. We tailor our development process to meet your specific needs, ensuring your site is fast, secure, and responsive. Our expertise guarantees a professional web presence that supports your business goals.",
  },
  {
    title: "Data and Databases",
    description: "Managing and organizing data with expertise in database design, development, and maintenance. We ensure your data is stored securely and accessed efficiently. Our solutions support your business operations and decision-making processes by providing reliable and well-structured data management systems.",
  },
];

function Service() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="services-container">
      <div className="tabs">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
          Service 1
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
          Service 2
        </div>
      </div>

      <div className="services">
        {activeTab === 1 && services.slice(0, 3).map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        {activeTab === 2 && services.slice(3, 6).map((service, index) => (
          <div className="service-card" key={index + 3}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
