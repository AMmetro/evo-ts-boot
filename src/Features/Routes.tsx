import React from "react";

import PhotosPage from "./PhotosPage";
import { Route, Switch} from "react-router-dom";
import Favorites from "./Favorites";


function Routes() {
    return (
        <div>
             <Switch>
              <Route path={"/"} exact render={() => <PhotosPage/>}/>
              <Route path={"/photos"} render={() => <PhotosPage/>}/>
              <Route path={"/favorites"} render={() => <Favorites/>}/>
     </Switch>
    </div>
);
}

export default Routes;
