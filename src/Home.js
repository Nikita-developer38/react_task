import Board from "./component/javascript/Board"
import Card from "./component/javascript/Card"
import "./Home.css"

function Home() {
    return (
        <>
            <Board />
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default Home