

export function ActivityOutput() {
    let activityData = {"id":"0", "activity": "Bobsledding", "type": "social", "duration": "hours", "kidFriendly": "yes"}

    if (activityData.id) {
        return (
            <div id="output">
                <h3 id="activity">Activity: {activityData.activity}</h3>
                <h3 id="type">Category: {activityData.type}</h3>
                <h3 id="duration">Expected Duration: {activityData.duration}</h3>
                <h3 id="kidfriendly">Child Friendly: {activityData.kidFriendly}</h3>
            </div>
        )
    }
    else {
        return (
            <div id="output">
                <h3>Select if you would like a solo or couple/group activity & what catgories you like, then click find activity!</h3>
            </div>
        )
    }
}