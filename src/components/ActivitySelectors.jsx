

export function ActivitySelectors() {
    return (
        <div id="selectors">
            <div id="participantselect">
                <label for="participants">Participants:</label>
                <select name="participants" id="participants">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div id="typeselect">
                <label for="category">Category:</label>
                <select name="category" id="category">
                    <option value="social">Social</option>
                    <option value="recreational">Recreational</option>
                    <option value="education">Educational</option>
                    <option value="charity">Charitable</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="cooking">Cooking</option>
                    <option value="busywork">Work</option>
                </select>
            </div>
        </div>
    )
}