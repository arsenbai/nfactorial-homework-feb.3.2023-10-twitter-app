import { Link } from "react-router-dom";

export default function MenuItem({item}) {

    return (
    <div className='d-flex my-3'>
        <div style={{width: 30, height: 30}}>
            {item.icon}
        </div>
        <Link to={item.path} className='mx-3' style={{fontSize: 20, color: 'black', textDecoration: 'none'}}>{item.name}</Link>
    </div>
    )
}