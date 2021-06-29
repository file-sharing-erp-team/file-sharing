import React from 'react';
import {Navig} from '../components/Navig'

export const ReqPage = () => {
    return(
        <div className="block">
            <header>
                <Navig />
            </header>
            <br />
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "hidden"}}>
                <p className="col">Lorem Ipsum</p>
                <p className="col">Lorem Ipsum</p>
                <p className="col">Lorem Ipsum</p>
                <p className="col">Lorem Ipsum</p>
                <p className="col">Lorem Ipsum</p>
                <p className="col">Lorem Ipsum</p>
            </div>
        </div>
    )
}