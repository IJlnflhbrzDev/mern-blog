import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import { Header, Footer } from '../../component';



const MainApp = () => {
     return (
          <div>
               {/* Header Page  */}
               <Header />

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

               {/* Footer Page  */}
               <Footer />
          </div>
     )
}

export default MainApp
