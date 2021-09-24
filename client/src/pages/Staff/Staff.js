
import StaffLayout from '../../components/StaffLayout';
import { staffObj1, staffObj2 } from './StaffData';

function Staff() {

    return (
        <>
            <title style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#000"
                }}
            >
                <h1>Our Staff</h1>
            </title>
            <StaffLayout {...staffObj1} />
            <StaffLayout {...staffObj2} />
        </>  
          )
};

export default Staff; 