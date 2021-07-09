import React from 'react';
import {RequestsList} from '../components/RequestsList'
import {Navig} from '../components/Navig'

export const CreationPage = () => {
    document.title = "FileSharing - Список услуг"
    const requests = [
        {
            type: 1,
            title: "Мат помощь"
        },
        {
            type: 2,
            title: "Повышенная стипендия"
        }
    ];

    return(
        <div className="block">
            <header>
                <Navig />
            </header>
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                <RequestsList requests={requests} />
            </div>
        </div>
    )
}