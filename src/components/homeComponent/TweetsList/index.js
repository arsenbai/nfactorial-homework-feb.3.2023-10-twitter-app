import {KZ_IMG_PATH, NFACTORIAL_IMG_PATH} from '../images'
import Tweet from './Tweet'

export default function TweetsList() {
    
    const tweets = [
        {
            author: 'KZ today',
            username: '@kztoday',
            img: KZ_IMG_PATH,
            content: 'UPDATE: The key is to preserve statehood, President Tokayev',
            replies: 111,
            retweets: 222,
            likes: 333 ,
            views: 444 ,
            shares: 555 ,
            isTwitterBlue: false
        },
        {
            author: 'nFactorial School',
            username: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'UPDATE: New batch starts on Monday, February 6!',
            replies: 777777,
            retweets: 777777,
            likes: 777777 ,
            views: 777777 ,
            shares: 777777 ,
            isTwitterBlue: true,
        },
        {
            author: 'nFactorial School',
            username: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'UPDATE: New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6! New batch starts on Monday, February 6!',
            replies: 1,
            retweets: 2,
            likes: 3 ,
            views: 4 ,
            shares: 5 ,
            isTwitterBlue: true,
        }
    ]

    return (
        tweets.map((element, idx) => <Tweet {...element} key={idx} />)
    )
}