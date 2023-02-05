import {PROFILE_PIC} from '../images/'

export default function NewTweet() {
    return (
        <div className='p-3' style={{borderBottom: '2px solid whitesmoke'}}>
            <img src={PROFILE_PIC} style={{width: 50, height: 50, borderRadius: 50}}></img>
            <input placeholder="What's happening?" style={{border: 'none', fontSize: 18, outline: 'none'}} className='mx-3' />
        </div>
    )    
}