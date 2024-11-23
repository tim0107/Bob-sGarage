import './feedback.css';
import HeaderFeedback from './Component/HeaderFeedback';
import ContentFeedback from './Component/Content';
import Addfeedback from './Component/Addfeedback';

function Feedback() {
    return (
        <div>
            <HeaderFeedback/>
            <Addfeedback/>
            <ContentFeedback/>
        </div>
    )
}


export default Feedback;