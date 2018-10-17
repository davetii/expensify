import React from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import CreatePage from '../components/CreatePage'
import EditPage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashBoardPage} activeClassName="is-active"/>
                <Route path="/create" component={CreatePage} activeClassName="is-active"/>
                <Route path="/edit/:id" component={EditPage} activeClassName="is-active"/>
                <Route path="/help" component={HelpPage} activeClassName="is-active"/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;