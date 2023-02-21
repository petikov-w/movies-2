import styles from '../style.scss';

function Main() {

    let sdf =[styles.content, styles.container];
    sdf = sdf.join(' ')
    return (
        <main className ={sdf}>
           Привет!!!
        </main>
        )
}

export {Main};