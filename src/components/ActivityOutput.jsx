import { useState } from "react"

const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }

export function ActivityOutput() {
    const [error, setError] = useState(null)
    const [id, setId] = useState(null)
    const [activity, setActivity] = useState(null)
    const [category, setCategory] = useState(null)
    const [duration, setDuration] = useState(null)
    const [kidFriendly, setKidFriendly] = useState(null)

    const getRandomData = async () => {
        const selectParticipants = document.getElementById("selectparticipants")
        const selectCategory = document.getElementById("selectcategory")
        console.log(selectParticipants.value)
        console.log(selectCategory.value)

        const response = await fetch(`https://bored-api.appbrewery.com/filter?participants=${selectParticipants.value}&type=${selectCategory.value}`, {
            methods: "GET"
        })
        if (response.ok) {
            const largeBody = await response.json()
            const body = largeBody[getRandomInteger(0,largeBody.length)]
            console.log(body)
            return body
        }
        else {
            if (response.status == "404") {
                const body = {"error": "Oh dear, it looks like there are no activities currently available for this number of participants in this category! Try swapping one of these for results."}
                return body
            }
            else if (response.status == "429") {
                const body = {"error": "Aww man, unfortunately the bored API this website uses only takes 100 requests every 15 minutes. You'll just have to be bored for a bit longer!"}
                return body
            }
            else {
                const body = {"error": "An unexpected error occured."}
                console.log(response.status)
                return body
            }
        }
    }
    
    const onClickHandler = async () => {
        setError(null)
        setId(null)
        const body = await getRandomData()
        if (body.error) {
            setError(body.error)
        }
        else {
            setId(body.key)
            setActivity(body.activity)
            setCategory(body.type)
            setDuration(body.duration)
            if (body.kidFriendly) {
                setKidFriendly("Yes")
            }
            else {
                setKidFriendly("No")
            }
        }
    }
    
    if (error) {
        return (
            <>
                <div id="output">
                    <h3 id="error">Error: {error}</h3>
                </div>
                <div id="buttondiv">
                    <button id="search" onClick={onClickHandler}>
                        Find Activity
                    </button>
                </div>
            </>
        )
    }
    else if (id) {
        return (
            <>
                <div id="output">
                    <h3 id="activity">Activity: {activity}</h3>
                    <h3 id="type">Category: {category}</h3>
                    <h3 id="duration">Expected Duration: {duration}</h3>
                    <h3 id="kidfriendly">Child Friendly: {kidFriendly}</h3>
                </div>
                <div id="buttondiv">
                    <button id="search" onClick={onClickHandler}>
                        Find Activity
                    </button>
                </div>
            </>

        )
    }
    else {
        if (!activity) {
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
        else {
            return (
                <>
                    <div id="output">
                        <h3>Loading...</h3>
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
}