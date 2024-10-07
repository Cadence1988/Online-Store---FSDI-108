import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home page'>
            <div className='text'>
            <h2>Welcome to Organika store</h2>
            
            <Link className='btn btn-large btn-success'>
            </Link>
            </div>

            <img src="https://png.pngtree.com/background/20210715/original/pngtree-hanging-string-lights-shiny-background-picture-image_1274866.jpg" alt="" />
        </div>
    );
}

export default Home;






/**

 * 

 * Create Home page

 * 

 * - create Home jsx and css in pages

 * - inside jsx create the Home component and export

 * - Home component return a div a H2

 * 

 * - in app.js

 * - import and render <Home> above Catalog

 */