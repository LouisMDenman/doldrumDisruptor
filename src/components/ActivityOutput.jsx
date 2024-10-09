
const getRandomData = async () => {
    const response = await fetch("https://bored-api.appbrewery.com/random")
    console.log(response)
}

const onClickHandler = () => {
    getRandomData()
}

export function ActivityOutput() {
    
    if (false) {
        return (
            <>
                <div id="output">
                    <h3 id="activity">Activity: {activityData.activity}</h3>
                    <h3 id="type">Category: {activityData.type}</h3>
                    <h3 id="duration">Expected Duration: {activityData.duration}</h3>
                    <h3 id="kidfriendly">Child Friendly: {activityData.kidFriendly}</h3>
                </div>
                <div id="buttondiv">
                    <button id="search">
                        Find Activity
                    </button>
                </div>
            </>

        )
    }
    else {
        return (
            <>
                <div id="output">
                    <h3>Select if you would like a solo or couple/group activity & what catgories you like, then click find activity!</h3>
                </div>
                <div id="buttondiv">
                    <button id="search" onClick={onClickHandler}>
                        Find Activity
                    </button>
                </div>
            </>
        )
    }
}