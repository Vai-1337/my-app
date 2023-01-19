import "../components/style.css"
import { Link } from 'react-router-dom'


const Credits = () => {
    return(
        <div className="credits">
            <div className="cred">   
            <img style={{width:"700px", marginTop:"1%", marginLeft:"5%"}} src="https://fontmeme.com/temporary/ed67cfa19dc462200c4b1e103d9be539.png" alt="credits"/>
                <div className="cred2">
                <div className="cred3" style={{width:"600px"}}>
                    <h1>Developers</h1>
                    <h3>Dimitri Habruk</h3>
                    <h3>Hicham Hajla</h3>
                    <h3>Vahitu Schmidt</h3>
                    <h3>Ludovic Leveque</h3>
                </div>
                <div className="cred3" style={{width:"600px"}}>
                    <h1>Special Thanks</h1>
                    <h3>Yacine Hamdada</h3>
                    <h3>Agash Jeyakumar</h3>
                    </div>
                    </div>
                <div>
                <Link style={{textDecoration:"none"}} to='/'><button style={{marginRight:"2%"}} className="start">BACK</button></Link>
                </div>

            </div>
        </div>
    )
}


export default Credits;