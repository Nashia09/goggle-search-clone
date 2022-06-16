import React from 'react';
import {BrowserRouter as Router, Routes, Switch, Route, Redirect, Navigate } from 'react-router-dom';
import Results from './Results';
 

const Navigation = () => {
  return (
    <div>

   <React.StrictMode>
   
   
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Navigate to="/search" replace />}/>
        {/* <Route exact path={['/search','/images', '/news', '/videos']} caseSensitive={false}  element={<Navigate to="/results" />} /> */}
        

 <Route path='/search' element={<Results />} />
  <Route path='/image' element={<Results />} />
  <Route path='/news' element={<Results />} />
  <Route path='/videos' element={<Results />} />
        
      </Routes>

   </React.StrictMode>



















{/*       
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"/>
          
        </Route>
        <Route exact path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Switch> */}

  
    </div>
  )
}

export default Navigation