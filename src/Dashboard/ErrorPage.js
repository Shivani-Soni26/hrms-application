import images from '../assets/images/images.jpg';
import '../../src/index.css';
const ErrorPage = () => {
   
    return (
        <>

            <div className="ErrBackground">
                <div className='ErrContent'>
                    <h4>Sorry!</h4>
                    <img src={images} alt="Sample" />
                    <h1>Opps! something went wrong.......</h1>
                    <h3> Back to Home Page &nbsp; <a href='/layout/dashboard'>Click Here </a>  </h3>
                    
                    
                </div>
            </div>
        </>
    );
}

export default ErrorPage;