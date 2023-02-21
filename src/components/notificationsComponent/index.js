import { BIRD_ICON, PERSON_ICON } from "./images";


export default function NotificationsComponent() {
    return (
        <div className="w-50 mt-3">

            <h5 className="mx-3">Notifications</h5>


            <div className="d-flex notificationClass">
                <div style={{marginRight: 12}}>{PERSON_ICON}</div>
                <p>John followed you</p>
            </div>
            
            <div className="d-flex notificationClass">
                <div style={{marginRight: 12}}>{BIRD_ICON}</div>
                <p>There was a login to your account @arsenbaiseupov from a new device on 05 feb. 2023. Review it now.</p>
            </div>

        </div>  
    )
}