import React from 'react';
import CourseCard from './CourseCard';

const DataScience = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        image="DS.png"
        title="Data Science Course"
        description="Learn more about Data Science..."
        link="https://www.guvi.in/zen-class/data-science-course/"
      />
      <CourseCard
        image="DS1.png"
        title="The Data Science Course: Complete Data Science Bootcamp 2024"
        description="Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning"
        link="https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/?couponCode=SKILLS4SALEA"
      />
      <CourseCard
        image="DS2.png"
        title="Data Scientist: Machine Learning Specialist"
        description="Includes Python 3, SQL, pandas, scikit-learn, Matplotlib, TensorFlow, and more."
        link="https://www.codecademy.com/learn/paths/data-science"
      />
      
    </div>
  );
};

export default DataScience;
