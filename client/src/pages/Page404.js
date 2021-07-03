import React from 'react';

export const Page404 = () => {
    document.title = "FileSharing - Страница не найдена"
    return(
        <div style={{top:'50%', left:'50%'}}>
            <h1 style ={{textAlign:'center', fontSize:'40px'}}>File Sharing</h1>
            <h3 style ={{textAlign:'center', fontSize:'35px'}}>404 PAGE NOT FOUND</h3>
        </div>
    )
}