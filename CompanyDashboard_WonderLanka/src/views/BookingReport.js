import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) =>{
    return(
        <>
            <div className="Post" ref={ref}>
                <h1>{props.tourId}</h1>
                <h1>{props.cancellationdate}</h1>
                <h1>{props.reason}</h1>
                <h1>{props.amount}</h1>
            </div>

            <Pdf targetRef={ref} filename="post.pdf">
                {({ toPdf }) => <button onClick={toPdf}
            > Capture as Pdf</button>}
                
                </Pdf>

        </>
        

    );
}

export default PDF; 