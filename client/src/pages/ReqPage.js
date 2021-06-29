import React from 'react';
import {Navig} from '../components/Navig'
import { RequestCard } from '../components/RequestCard';
import {useHttp} from '../context/hooks/http.hook' 

export const ReqPage = () => {
    const {loading, error, request, clearError} = useHttp()
    const info = {
        id: 1,
        status: 1,
        title: "Мат. помощь"
    }
    return(
        <div className="block">
            <header>
                <Navig />
            </header>
            <br />
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto"}}>
                
                {!loading && info && <RequestCard requestInfo={info}></RequestCard>}
                {!loading && info && <RequestCard requestInfo={info}></RequestCard>}
                {!loading && info && <RequestCard requestInfo={info}></RequestCard>}
                {!loading && info && <RequestCard requestInfo={info}></RequestCard>}
                {!loading && info && <RequestCard requestInfo={info}></RequestCard>}
                
            </div>
        </div>
    )
}