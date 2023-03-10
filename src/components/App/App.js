import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import {Footer} from "../Footer";
//import {Maink} from "../Main/Maink";
import {Main} from "../Main/Main";


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
            <Main search={movSearch}/>
            <Footer />
        </React.Fragment>

        // <div className={styles.content}>
        //     <div className={styles.label}>
        //         Create React App Without CRAπ
        //     </div>
        //
        //     <button className={styles.btn} onClick={onClickEvent}>Click Me π</button>
        // </div>
    )
}

export default App