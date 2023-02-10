import { COMMENTS, LIKES, RETWEETS, SHARE, VIEW, CLOSE_SVG } from '../images';
import TwitterBlue from './TwitterBlue';

 export default function Tweet( {element, deleteTweet} ) {

    return (
        <div className='mt-3 px-3' style={{borderBottom: '2px solid whitesmoke'}}>
            
            <p className='mx-5' style={{fontSize:13, fontWeight: '600'}}>You might like <span style={{color: "blue"}}>See more</span></p>

            <div className='d-flex align-items-start justify-content-between'>
                <div className='d-flex justify-content-start'>
                    <img src={element.img} style={{width: 50, height: 50, borderRadius: 50}} alt='pic' />
                    <div className='mx-3'>
                        <p style={{fontWeight: 600}}>{element.author}
                            <TwitterBlue {...element} />
                            <span style={{color: "gray"}}>
                                {element.username}
                            </span>
                        </p>
                        <p>{element.content.length>200 ? element.content.slice(0, 200) + '...' : element.content}</p>
                    </div>
                </div>

                <button className='d-flex justify-content-end align-items-start' onClick={() => deleteTweet(element.id)} style={{width: 35, height: 35, border: 'none', backgroundColor: 'transparent'}}>
                    {CLOSE_SVG}
                </button>
            </div>



            <div className='d-flex m-auto justify-content-between' style={{width: '87%'}}>
                <div className='d-flex mx-3'>
                    {COMMENTS}
                    <p className='px-1'>{element.replies}</p>
                </div>
                <div className='d-flex mx-3'>
                    {RETWEETS}
                    <p className='px-1'>{element.retweets}</p>
                </div>
                <div className='d-flex mx-3'>
                    {LIKES}
                    <p className='px-1'>{element.likes}</p>
                </div>
                <div className='d-flex mx-3'>
                    {VIEW}
                    <p className='px-1'>{element.views}</p>
                </div>
                <div className='d-flex mx-3'>
                    {SHARE}
                    <p className='px-1'>{element.shares}</p>
                </div>
            </div>
        </div>
    )
 }