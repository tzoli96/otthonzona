import React, { useMemo } from "react";
import { CloudinaryContext } from "cloudinary-react";

function UploadComponent ({ onUpload, children, ...props }) {

    const uploadWidget = useMemo(() => {
        return window.cloudinary.createUploadWidget({
            cloudName: 'dq4anbcep', 
            uploadPreset: 'ml_default',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            ...props,
            }, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                onUpload(result.info)
              }
            }
          )
    }, [onUpload]);
    
    return (
      <div>
        <CloudinaryContext cloudName="dq4anbcep">
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    onClick: () => uploadWidget.open()
                })
            })}
        </CloudinaryContext>
      </div>
    );

}

export default UploadComponent;