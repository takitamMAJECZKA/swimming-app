import { useState, useEffect } from "react";
import editIcon from "../assets/editIcon.png"
import Exercise from "./Exercise";
import Break from "./Break";


export default function Workout(){
    let [timeLong, setTimeLong] = useState(0);
    let [distance, setDistance] = useState(0);
    let [content, setContent] = useState([])
    let date = new Date();
    let [workoutName, setWorkoutName] = useState('Workout')
    
    function handleWorkoutNameChange(e){
        setWorkoutName(e.target.value)
    }

    function updateTimeLong(addedTime){
        setTimeLong(t => t+addedTime)
    }

    function updateDistance(addedDistance){
        setDistance(d => d+addedDistance)
    }

    function handleAddExercise(){
        setContent(c => [...c, {type:'exercise'}])
    }
    
    function handleAddBreak(){
        setContent(c => [...c, {type:'break'}])
    }

    function handleElementUp(index){
        if(index > 0){
            let updatedContent = content;
            [updatedContent[index] , updatedContent[index-1]] = [updatedContent[index] , updatedContent[index-1]];
            setContent(updatedContent)
        }
    }

    function handleElementDown(index){
        
    }
    function handleElementDelete(index){
        let updatedContent = content.filter((element, i) => index!==i )
        setContent(updatedContent)
    }
    function getMonthString(){
        switch(date.getMonth()){
            case 0:
                return 'January'
            case 1:
                return'February'
            case 2:
                return'March'
            case 3:
                return'April'
            case 4:
                return'May'
            case 5:
                return'June'
            case 6:
                return'July'
            case 7:
                return'August'
            case 8:
                return'September'
            case 9:
                return'October'
            case 10:
                return'November'
            case 11:
                return'December'
        }
    }

    return(
        <div className="workoutContainer">
            <div className="workoutHeader">
                <label><input type="text" onChange={(e) => {handleWorkoutNameChange(e)}} className="workoutName dataInput" placeholder="Workout name" value={workoutName}/><img className="editIcon" src={editIcon} alt="edit" /></label>
                <div className="workoutInfo">
                    <div className="workoutDate">{date.getDate()} {getMonthString()} {date.getFullYear()}</div>
                    <div className="workoutDistance">{distance} m</div>
                    <div className="workoutTime">{timeLong} seconds</div>
                </div>
            </div>
            <div className="exercisesAndBreaksWrapper">
                {content.map((element, i)=>{
                    if (element.type == 'exercise'){
                        return(
                        <Exercise key={i} index={i} deleteFunc={handleElementDelete} moveUpFunc={handleElementUp} moveDownFunc={handleElementDown}/>
                        )
                    }else{
                        return(
                            <Break key={i}/>
                            )
                    }
                })}
                <Break />
            </div>
            <div className="addElements">
                <button className="addExercise" onClick={() => {handleAddExercise()}}>add exercise</button>
                <button className="addBreak" onClick={() => {handleAddBreak()}}>add break</button>
            </div>
        </div>
    )
}