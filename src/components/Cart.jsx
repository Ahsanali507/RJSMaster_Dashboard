import React, { useState, useEffect, useRef } from 'react';
// import { DialogComponent, CheckBoxComponent } from '@syncfusion/ej2-react-popups';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
// import { PropertyPane } from '../common/property-pane';
// import './modal-dialog.css';

const Cart = () => {
    let dialogInstance = useRef(null);
    let animationSettings;
    let buttons;
    let buttonEle;
    const [display, setDisplay] = useState('none');
    const [status, setStatus] = useState(true);

    animationSettings = { effect: 'None' };
    buttons = [
        {
            click: () => {
                setStatus(false);
            },
            buttonModel: {
                isPrimary: true,
                content: 'OK',
            },
        },
    ];

    const onChange = (args) => {
        if (args.checked) {
            dialogInstance.current.overlayClick = () => {
                setStatus(false);
            };
        } else {
            dialogInstance.current.overlayClick = () => {
                setStatus(true);
            };
        }
    }

    const buttonClick = () => {
        setStatus(true);
    }

    const dialogClose = () => {
        setStatus(false);
        setDisplay('inline-block');
    }

    const dialogOpen = () => {
        setStatus(true);
        setDisplay('none');
    }

    return (
        <div className="control-pane">
            <div className="control-section modal-dialog-target">
                <div id="target" className="col-lg-8">
                    <button className="e-control e-btn dlgbtn dlgbtn-position" ref={(element) => buttonEle = element} onClick={buttonClick} style={{ display: display }}>Open</button>
                    <DialogComponent id="modalDialog" isModal={true} buttons={buttons} header="Software Update" width="335px" content="Your current software version is up to date." ref={dialogInstance} target="#target" visible={status} open={dialogOpen} close={dialogClose} animationSettings={animationSettings}></DialogComponent>
                </div>
                <div className="col-lg-4 property-section">
                    {/* <PropertyPane title="Properties"> */}
                        <table id="property" title="Properties" className="property-panel-table table-width">
                            <tbody>
                                <tr>
                                    <td className="table-td">
                                        <div className="dialog-td-font">Close on overlay click</div>
                                    </td>
                                    {/* <td>
                                        <CheckBoxComponent checked={false} change={onChange}></CheckBoxComponent>
                                    </td> */}
                                </tr>
                            </tbody>
                        </table>
                    {/* </PropertyPane> */}
                </div>
            </div>
        </div>
    );
}

export default Cart;