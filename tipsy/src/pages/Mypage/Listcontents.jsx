import Shipment from './contents/Shipment';
import Point from './contents/Point';
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
                return <Point />;
            case 2:
                return <Coupon />;
            case 3:
                return <Postbox />;
            case 4:
                return <Likecon />;
            case 5:
                return <Currentcon />;
            case 6:
                return <Alcstyle />;
            default:
                return <Shipment />;
        }
    }

    return (
        <div class="listContents">
            {ViewCon()}
        </div>
    )
}