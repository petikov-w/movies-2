import React from 'react';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Main} from "./components/main";


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