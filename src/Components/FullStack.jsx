import React from 'react';
import CourseCard from './CourseCard';

const FullStackDevelopment = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        image="FSD.png"
        title=" MERN Full Stack Development "
        description="Learn more about MERN Full Stack Development..."
        link="https://www.guvi.in/zen-class/mern-full-stack-development-course-august/"
      />
      <CourseCard
        image="JAVAFSD.png"
        title=" Java Full Stack Development "
        description="Learn more about Java Full Stack Development..."
        link="https://www.guvi.in/zen-class/java-full-stack-development-course/"
      />
      <CourseCard
        image="PFSD.png"
        title=" Python Full Stack Development "
        description="Learn more about Python Full Stack Development..."
        link="https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/?couponCode=SKILLS4SALEA"
      />
    </div>
  );
};

export default FullStackDevelopment;
