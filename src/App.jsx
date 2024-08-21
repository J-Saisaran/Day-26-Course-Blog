import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar'; 
import AllCourses from './Components/AllCourses';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';
import FullStack from './Components/FullStack'


function App() {
    return (
        <div>
<AppBar />
            <Routes>
                <Route path="/all" element={<AllCourses />} />
                <Route path="/fullstack" element={<FullStack />} />
                <Route path="/datascience" element={<DataScience />} />
                <Route path="/cybersecurity" element={<CyberSecurity />} />
                <Route path="/career" element={<Career />} />
            </Routes>

        </div>
            
        
      
        
         
      

    );
}

export default App;
