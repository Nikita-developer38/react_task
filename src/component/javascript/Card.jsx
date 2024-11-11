import "../../Home.css"
function Card() {
    return(
        <>
            <div  className="card">
                <h4>Sunset</h4>
                <img alt="sunset" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-a2RRwDWjc5VMCX9PuoNjznLQaHLKUpdkw&s" style={{ width: "250px", height: "150px", objectFit:"cover"}} />
                <button className="natureImg">Nature Images</button>
            </div>
        </>
    )
}
export default Card