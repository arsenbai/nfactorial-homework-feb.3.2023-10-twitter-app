import Tweet from './Tweet';

export default function TweetsList({tweets, deleteTweet, substring}) {

    if (substring !== "" || substring !== null) {
        return (
            substring = substring.toLowerCase(),
            tweets.filter((ele) => {
                let str = ele.content.toLowerCase();
                return str.includes(substring);
            }).map((element) => <Tweet element={element} key={element.id} deleteTweet={deleteTweet} />)
        )
    }
    else if (substring === "" || substring === null) {
        return (
            tweets.map((element) => <Tweet element={element} key={element.id} deleteTweet={deleteTweet} />)
        )
    }


}