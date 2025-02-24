import { useState } from "react"
import editIcon from "../assets/editIcon.png"

export default function Exercise(props){

    let [distance, setDistance] = useState(0)
    let [time, setTime] = useState('NaN:NaN')
    let [exerciseName, setExerciseName] = useState('Exercise '+String(props.index+1))


    function handleAmountOfPoolsChange(e){
        setDistance(e.target.value*25)
    }

    function handleTimeChange(e){
        setTime(e.target.value)
    }

    function handleExerciseNameChange(e){
        setExerciseName(e.target.value)
    }

    function convertToSecs(mmss){
        if(mmss != undefined){
            let mins = mmss.substring(0,2);
            let secs = mmss.substring(3,5);

            return parseInt(mins)*60 + parseInt(secs);
        }
    }


    function convertToMins(s){
        let mins = parseInt(s/60)
        let secs = s%60

        return (mins<10 ? '0' + parseInt(mins) : parseInt(mins)) + ':' + (secs<10 ? '0' + parseInt(secs) : parseInt(secs))
    }

    return(
        <div className="exercise">
            <label><input type="text" onChange={(e) => {handleExerciseNameChange(e)}} className="exerciseName dataInput" placeholder="Exercise name" value={exerciseName}/><img className="editIcon" src={editIcon} alt="edit" /></label>
            <div className="dataInputsWrapper">
                <label>Amount of pools(25m): <input type="number" min={0} onChange={(e)=>{handleAmountOfPoolsChange(e)}} className="dataInput exercisePoolsInput"/></label>
                <label>Time(mm:ss): <input type="text" placeholder="mm:ss"onChange={(e)=>{handleTimeChange(e)}} className="dataInput exerciseTimeInput"/></label>
            </div>
            <div className="exerciseCalculations">
                <div className="exerciseDistance">Distance(m): {distance}</div>
                <div className="exercisePace">Pace(/100m): {convertToMins(convertToSecs(time)/(distance/100)) != 'NaN:NaN' ? convertToMins(convertToSecs(time)/(distance/100)) : '00:00'}</div>
            </div>
            <div className="exerciseButtons">
                <button className="moveUpButton" onClick={()=>props.moveUpFunc(props.index)}>UP</button>
                <button className="deleteButton" onClick={()=>props.deleteFunc(props.index)}>X</button>
                <button className="moveDownButton" onClick={()=>props.moveDownFunc(props.index)}>DOWN</button>
            </div>
        </div>
    )
}