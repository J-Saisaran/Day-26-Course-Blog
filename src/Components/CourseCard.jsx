import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image, title, link, description }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} className="course-card__image" />
            <h3 className="course-card__title">{title}</h3>
            <p className="course-card__description">{description}</p>
            <a href={link} className="course-card__button">Learn More</a>
        </div>
    );
};

export default CourseCard;
