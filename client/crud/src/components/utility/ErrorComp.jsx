import './error.css'
import warning from "../../media/pngwing.com.png"
import Button from 'react-bootstrap/Button';

function ErrorComp({onOK, errorMsg}){
    return (
        <div className="error-background">
            <div className="cover">
                <img src={warning} className='warn-img' alt="warning"/>
                <p>{errorMsg}</p>
                <Button onClick={onOK}>OK</Button>
            </div>
        </div>
        
    )
}

export default ErrorComp;