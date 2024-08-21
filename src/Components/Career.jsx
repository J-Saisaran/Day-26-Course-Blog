import React from 'react';
import CourseCard from './CourseCard';

const Career = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        image="carrier.png"
        title="Top 5 Tech Careers of the Future"
        description="In this we’ll explore the top 5 tech careers of 2024 that are going to boom in the coming future and how one should prepare themselves to pursue them."
        link="https://guvi.in/blog/top-tech-careers-of-the-future/"
      />
      <CourseCard
        image="carrier1.png"
        title="Is Switching Careers From Non-Tech To Tech Challenging"
        description="Market Point of View on career switch from non-IT to IT."
        link="https://www.guvi.in/blog/is-switching-careers-from-non-tech-to-tech-challenging/"
      />
      <CourseCard
        image="carrier2.png"
        title="Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career"
        description="Undoubtedly, data science, machine learning, artificial intelligence, cybersecurity, cloud, and blockchain are some of the top technologies that people learn to transition into a high-paying tech role.  ."
        link="https://www.guvi.com/blog/top-technologies-to-learn-now/"
      />
     
    </div>
  );
};

export default Career;
