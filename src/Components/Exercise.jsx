import { useState } from "react"
import editIcon from "../assets/editIcon.png"

export default function Exercise(props){
    let [exerciseInfo, setExerciseInfo] = useState({index: props.index,name:'Exercise '+String(props.index+1), distance: 0, time:'NaN:NaN'})


    function handleAmountOfPoolsChange(e){
        setExerciseInfo({...exerciseInfo , distance: e.target.value*25})
    }

    function handleTimeChange(e){
        setExerciseInfo({...exerciseInfo , time: e.target.value})
    }

    function handleExerciseNameChange(e){
        setExerciseInfo({...exerciseInfo , name: e.target.value})
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
            <label><input type="text" onChange={(e) => {handleExerciseNameChange(e)}} className="exerciseName dataInput" placeholder="Exercise name" value={exerciseInfo.name}/><img className="editIcon" src={editIcon} alt="edit" /></label>
            <div className="dataInputsWrapper">
                <label>Amount of pools(25m): <input type="number" min={0} onChange={(e)=>{handleAmountOfPoolsChange(e)}} className="dataInput exercisePoolsInput"/></label>
                <label>Time(mm:ss): <input type="text" placeholder="mm:ss"onChange={(e)=>{handleTimeChange(e)}} className="dataInput exerciseTimeInput"/></label>
            </div>
            <div className="exerciseCalculations">
                <div className="exerciseDistance">Distance(m): {exerciseInfo.distance}</div>
                <div className="exercisePace">Pace(/100m): {convertToMins(convertToSecs(exerciseInfo.time)/(exerciseInfo.distance/100)) != 'NaN:NaN' ? convertToMins(convertToSecs(exerciseInfo.time)/(exerciseInfo.distance/100)) : '00:00'}</div>
            </div>
            <div className="exerciseButtons">
                <button className="moveDownButton" onClick={()=>props.moveDownFunc(exerciseInfo.index)}>DOWN</button>
                <button className="deleteButton" onClick={()=>{props.deleteFunc(exerciseInfo.index)}}>X</button>
                <button className="moveUpButton" onClick={()=>props.moveUpFunc(exerciseInfo.index)}>UP</button>
            </div>
        </div>
    )
}