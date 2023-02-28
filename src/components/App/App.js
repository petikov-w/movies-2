import React from 'react';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Main} from "../Main/Main";


// const onClickEvent = (e) => {
//     e.preventDefault();
//     alert('You Clicked Me!')
// }

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Main />
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