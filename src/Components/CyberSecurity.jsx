import React from 'react';
import CourseCard from './CourseCard';

const CyberSecurity = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        image="CS.png"
        title="Cyber Security and Ethical Hacking - Beginner"
        description="Learn all of the Cyber Security and Ethical Hacking fundamentals and how to implement them with this beginner-friendly Cyber Security course along with Ethical Hacking."
        link="https://www.guvi.in/courses/network-and-security/cyber-security-ethical-hacking-beginners/"
      />
      <CourseCard
        image="CS1.png"
        title="Advanced Executive Program in Cybersecurity"
        description="Become an industry-ready professional with our Advanced Executive Program in Cybersecurity and transform your career in 6 months. This high-engagement course offers real-world applications and a masterclass by an ex-NPCI expert. It's designed for individuals seeking a new, more fulfilling career."
            link="https://www.simplilearn.com/pgp-advanced-executive-program-in-cyber-security?source=preview_Cyber%20Security_card&eventname=Mega_Menu_New_Select_Category_card"
      />
      <CourseCard
        image="CS2.png"
        title="The Complete Cyber Security Course : Hackers Exposed!"
        description="Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC."
        link="https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/?couponCode=SKILLS4SALEA"
      />
     
    </div>
  );
};

export default CyberSecurity;
