import React from "react";

function Activity() {
    return (
      <form>
        <label>Username
          <input type="text" />
        </label><br/>
        <label for="exercise">Choose an exercice</label>
        <select id="exercise">
                <option value="running">Running</option>
                <option value="walkin">Walking</option>
                <option value="swimming">Swimming</option>
                <option value="cycling">Cycling</option>
                <option value="rowing">Rowing</option>
        </select><br/>
        <label>Time spent in minutes
        <input type="number" />
      </label><br/>
      <label for="date">Date:</label>

     <input type="date" id="date" name="exercise date"
       value="2022-04-28"
       min="2022-01-01"/><br/>
      <input type="submit" value="Submit"></input>  

      </form>
    )
  }

export default Activity