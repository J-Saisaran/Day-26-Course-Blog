import React from 'react';
import CourseCard from './CourseCard';

const AllCourses = () => {
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

export default AllCourses;
