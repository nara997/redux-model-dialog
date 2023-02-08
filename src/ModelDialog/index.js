import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import './index.css';


const ModelDialog = props => {
    const {eachMessage} = props 
   const{subject, id, body} = eachMessage
    

    return (
        <div className="MessageContainer">
         <div>
        <p>id : {id}</p>
        <p>sub : {subject}</p>
        </div>
    <Dialog.Root  className="dialogContainer">
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
         Detailed View
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle"></Dialog.Title>
        <Dialog.Description className="DialogDescription">
            {body}
        </Dialog.Description>
         
        
        
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Done</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close >
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
 </div>
 )
}

export default ModelDialog