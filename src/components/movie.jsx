import '../style.scss';
function Movie (props) {
    const {filmId, nameRu, year, rating, posterUrl} = props;
    const textTitle = {color: "#000000",
                       fontSize: "1rem",
                       fontWeight: "600"}
    const flex ={display: "flex",
                height: "140px",
                 flexDirection: "column",
                 justifyContent: "space-between"}
    const flex2 ={display: "flex",
                 justifyContent: "space-between"}



    return <div id={filmId} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" height="400" src={posterUrl} />
        </div>
        <div className="card-content" style={flex}>
            {/*<span className="card-title activator grey-text text-darken-4">{nameRu}</span>*/}
            <span className="text-title" style={textTitle}>{nameRu}</span>
            <div style={flex2}>
                <p>!{rating}.indexOf('%') > -1 ? {rating} : ""</p>
                <p>{year}</p>
            </div>
        </div>
    </div>
}
export {Movie}