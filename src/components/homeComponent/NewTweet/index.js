import {PROFILE_PIC} from '../images/'

export default function NewTweet( {content, onChangeTextInput, addToTweets} ) {

    return (
        <div className='d-flex p-3' style={{borderBottom: '2px solid whitesmoke'}}>
            <img src={PROFILE_PIC} style={{width: 50, height: 50, borderRadius: 50}}></img>

            <div style={{width: 'auto'}}>
                <input onChange={onChangeTextInput} value={content} placeholder="What's happening?" style={{border: 'none', fontSize: 18, outline: 'none', width: '450px'}} className='mx-3' />
                <div className='d-flex justify-content-end align-items-end'>
                    <button onClick={addToTweets} style={{backgroundColor: '#1d9cf0', color: 'white', borderRadius: 25, fontSize: 16, border: 'none', width: 'auto'}}>Tweet</button>
                </div>
            </div>
        </div>
    )    
}