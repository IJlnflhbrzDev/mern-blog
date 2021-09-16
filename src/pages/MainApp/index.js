import React from 'react';
import './mainApp.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import { Header, Footer } from '../../component';



const MainApp = () => {
     return (
          <div className="main-app-wrapper">

               {/* Header Page  */}
               <Header />

               <div className="content-wrapper">
                    {/* Dinamic Routes Content Berlapis */}
                    <Router>
                         <Switch>
                              <Route path="/create-blog">
                                   <CreateBlog />
                              </Route>

                              <Route path="/detail-blog">
                                   <DetailBlog />
                              </Route>
                              <Route path="/">
                                   <Home />
                              </Route>
                         </Switch>
                    </Router>
               </div>

               {/* Footer Page  */}
               <Footer />
          </div>
     )
}

export default MainApp
