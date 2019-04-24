import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import ArtistSkeleton from './EmployeeSkeleton'
import PerformersSkeleton from './AboutUsSkeleton'
import { slowImport } from './utils/Helpers';
import './index.css';

const Artists = React.lazy(() => slowImport(import('./Employees'), 2000));
const Performers = React.lazy(() => slowImport(import('./AboutUs'), 4000));


class App extends React.Component {
    render(){
        return(
            <div className="App">
                <h1>Wild Sky Media Engineers</h1>
                <Suspense fallback={<ArtistSkeleton />}>
                    <Artists />
                </Suspense>
                <Suspense fallback={<PerformersSkeleton />}>
                    <Performers />
                </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
