import Shipment from './contents/Shipment';
import Coupon from './contents/Coupon';
import Postbox from './contents/Postbox';
import Likecon from './contents/Likecon';
import Currentcon from './contents/Currentcon';
import Alcstyle from './contents/Alcstyle';

export default function listContents({ categoryNum }) {
    function ViewCon() {
        switch (categoryNum) {
            case 0:
                return <Shipment />;
            case 1:
                return <Coupon />;
            case 2:
                return <Postbox />;
            case 3:
                return <Likecon />;
            case 4:
                return <Currentcon />;
            case 5:
                return <Alcstyle />;
            default:
                return <Shipment />;
        }
    }

    return (
        <div className="listContents">
            {ViewCon()}
        </div>
    )
}