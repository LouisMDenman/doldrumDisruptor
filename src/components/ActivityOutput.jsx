import { useState } from "react"

//Support function for generating a random integer between a min and max value inclusive
const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }

//Main component function
export function ActivityOutput() {
    //State variables required and their setters declared here
    const [error, setError] = useState(null)
    const [id, setId] = useState(null)
    const [activity, setActivity] = useState(null)
    const [category, setCategory] = useState(null)
    const [duration, setDuration] = useState(null)
    const [kidFriendly, setKidFriendly] = useState(null)

    //Asyncronous function responsible for fetching the API data
    const getRandomData = async () => {
        //Declare variables for the two select element values category and participants
        const selectParticipants = document.getElementById("selectparticipants")
        const selectCategory = document.getElementById("selectcategory")

        //Call the API and await a response using the values in the category and participants selectors
        const response = await fetch(`https://bored-api.appbrewery.com/filter?participants=${selectParticipants.value}&type=${selectCategory.value}`, {
            methods: "GET"
        })
        if (response.ok) {
            //Wait to recieve the list of objects as JSON
            const largeBody = await response.json()
            //Select a random JSON object from the list of objects
            const body = largeBody[getRandomInteger(0,largeBody.length)]
            return body
        }
        else {
            //Block to display when there isn't an activity for the current selector combination
            if (response.status == "404") {
                const body = {"error": "Oh dear, it looks like there are no activities currently available for this number of participants in this category! Try swapping one of these for results."}
                return body
            }
            //Block to display when the API has recieved too many requests in too short of a timeframe
            else if (response.status == "429") {
                const body = {"error": "Aww man, unfortunately the bored API this website uses only takes 100 requests every 15 minutes. You'll just have to be bored for a bit longer!"}
                return body
            }
            //Block for any other unanticipated errors
            else {
                const body = {"error": "An unexpected error occured."}
                console.log(response.status)
                return body
            }
        }
    }
    
    //Asyncronous function that is called when the find activity button is clicked
    const onClickHandler = async () => {
        //Set the error and id state variables as null, so that they don't trigger a return option below even though there wasn't a new request
        setError(null)
        setId(null)
        //Call the getRandomData function to get the API data
        const body = await getRandomData()
        //if getRandomData returns an error, set the error in state
        if (body.error) {
            setError(body.error)
        }
        //set the other values in state
        else {
            setId(body.key)
            setActivity(body.activity)
            setCategory(body.type)
            setDuration(body.duration)
            //kidFriendly returns a true or false value, so dependant on this make the kidFriendly part of the object "yes" or "no"
            if (body.kidFriendly) {
                setKidFriendly("Yes")
            }
            else {
                setKidFriendly("No")
            }
        }
    }
    
    //if the error state exists
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
    //if the id state exists
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
    //if neither of those states exist
    else {
        //if there is not a previous activity in state
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