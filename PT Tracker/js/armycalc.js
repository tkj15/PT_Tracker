/**
Hai Tu
haingoctu@gmail.com
**/
function loadData() {
    var puPoints = $("#puScore");
    var suPoints = $("#suScore");
    var aerobicPoints = $("#aerobicScore");
    
    var userAge = $("#inputAge").val();
    userAge = parseInt(userAge);
    console.log(userAge);
    var userSex;
    var pushup_input = $("#inputPU").val();
    pushup_input = parseInt(pushup_input);
    //console.log("! " + pushup_input );
    var situp_input = $("#inputSU").val();
    situp_input = parseInt(situp_input);
    var aerobic_input = $("#inputAerobic").val();

    var puScore;
    var suScore;
    var aerobicScore;
    var tempScore;
    var userMaxRep;
    
    var oneHundredPoints = 100;
    var ageGroupArr = [21, 26, 31, 36, 41];
    var suMaxRepsArr = [78, 80, 82, 76, 76];
    var puMaxRepsArr = [72, 75, 77, 75, 73];
    var SU_pattern = [1, 2, 1, 2, 2];
    var i;
    var index = 0;
    
    //get gender
    userSex = $("input[name=optionsGender]:checked", "#form-container").val();
    console.log(userSex);
    
    
    for (ele in ageGroupArr) {//open: age comparison
        if (userAge <= ageGroupArr[ele]) {
            userMaxRep = suMaxRepsArr[ele];
            index = ele;
            break;
        }
    }//close: age comparison
    
    console.log("index is: " + index);
    
    if(pushup_input >= 0) {
        console.log("PU im in" + "pu: " + pushup_input);
        if (index == 0) {
        console.log("PU in index === 0");
        i = SU_wrapper(SU_pattern, 0, pushup_input, userMaxRep, oneHundredPoints);
        } else {
            console.log("PU NOT in index === 0");
            i = recursive_SU(SU_pattern, 0, pushup_input, userMaxRep, oneHundredPoints)
        }
        //console.log("pu after recursive: " + i);
        //puPoints.text(SU_wrapper(i));
        puPoints.text(i);
    } else { puPoints.text("0")}

    //SIT UPS
    if(situp_input >= 0) {
        console.log("SU im in" + "su: " + situp_input);
        if(index == 0) {
        console.log("SU in index === 0");
        i = SU_wrapper(SU_pattern, 0, situp_input, userMaxRep, oneHundredPoints);
        } else {
            console.log("SU NOT in index === 0");
            i = recursive_SU(SU_pattern, 0, pushup_input, userMaxRep, oneHundredPoints)
        }
        suPoints.text(i);
    } else { suPoints.text("0")}

    aerobicPoints.text(tempScore);
    var sol;
    //sol = recursive_SU(SU_pattern, 0, 72, 78, 100);
    //sol = SU_wrapper(SU_pattern, 0, 99, 78, 100)
    //console.log(sol);
        
    
    return false;
};

function SU_wrapper(arr, curr_arr, input, reps, score) {
    console.log("beginning, score is:" + score);
    if ( (score === 100) && (input < reps) ) {
        console.log("first");
        return recursive_SU(arr, curr_arr, input, reps - 1, score - 2);
    } else if (reps === input) {
        console.log("second, score is: " + score);
        return score;
    } else if (input > reps) {
        console.log("third");
        return score + (input - reps);
    }
}
function recursive_SU(arr, curr_arr, input, reps, score) {
    console.log("recursive_SU: score:" + score + " input:" + input + " reps: " + reps + " curr_arr:" + curr_arr);
    if (reps === 0) {
        console.log("!! reps === 0");
        return 0;
    }
    
    if (score <= 0) {
        console.log("!! score <= 0");
        return 0;
    }    
    
    if(input === reps) {
        console.log("!! reps === input");
        return score;
    }

    ///////////////////////////////
    if (arr[curr_arr + 1]) {
        tempNum = arr[curr_arr];
        curr_arr++;
    } else {
        tempNum = arr[curr_arr];
        curr_arr = 0;
    }
    score = score - tempNum;
    reps--;
    return recursive_SU(arr, curr_arr, input, reps, score);
    
    
}

$("#form-container").submit(loadData);