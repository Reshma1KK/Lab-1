import React,{useState} from 'react'
import Axios from "axios"
import CreateReciept from "../Reciepts/CreateReciept.jsx"

export const ModalReciept = ({showModal,setShowModal}) => {


const name = JSON.parse(localStorage["user"])[0].name;

    return(
      <>
      {showModal ? (
        <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div showModal={showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
              <button type="button" className="close btn-success" data-dismiss="modal-all" aria-label="Close" style={{width:"25px",height:"25px"}} onClick={()=>setShowModal(prev=> !prev)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <CreateReciept />
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : null}
      </>
    )
  };
