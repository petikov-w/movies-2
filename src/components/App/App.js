import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import {Footer} from "../Footer";
//import {Maink} from "../Main/Maink";
import {Mainfn} from "../Main/Mainfn";


// const onClickEvent = (e) => {
//     e.preventDefault();
//     alert('You Clicked Me!')
// }

const App = () => {
   const [ movSearch, setMovSearch ] = useState("")
   const updateData = (value) => {
       setMovSearch(value)
    }
    useEffect(() => {
        console.log("==== App ====>>> ", movSearch);
    },[movSearch]);
    return (
        <React.Fragment>
            <Header updateData={updateData}/>
            <Mainfn search={movSearch}/>
            <Footer />
        </React.Fragment>

        // <div className={styles.content}>
        //     <div className={styles.label}>
        //         Create React App Without CRA😊
        //     </div>
        //
        //     <button className={styles.btn} onClick={onClickEvent}>Click Me 😎</button>
        // </div>
    )
}

export default App