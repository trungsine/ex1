import Sidebar from '../components/Sidebar/Sidebar';
import MessageNav from "../components/Messages/MessageNav/MessageNav"
import MessageContent from '../components/Messages/MessageContent/MessageContent';
import "./DefaultLayout.scss"
import MessageDetail from '../components/Messages/MessageDetail/MessageDetail';

const DefaultLayout = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <MessageNav />
            <MessageContent />
            <MessageDetail />
        </div>
    )
}

export default DefaultLayout;