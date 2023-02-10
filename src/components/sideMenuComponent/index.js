import {TWITTER_LOGO_SVG, HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG} from './images/'
import MenuItem from './menuItem';
import './styles.css'

function SideMenu() {

    const menu = [
        { 
            icon: HOME_SVG,
            name: 'Home'
        },
        { 
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        { 
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        { 
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        { 
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
    ]

    return (
        <div className="w-20 mt-3 mx-5 side-menu">
            {TWITTER_LOGO_SVG}
            {menu.map((item, idx) => <MenuItem item={item} key={idx} />)}
        </div>
    )
}

export default SideMenu;