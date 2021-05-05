/////////////////////////////////////////////////////////
////////Voices of Hope for Apasia Counting Script////////
/////////////////////////////////////////////////////////
/*
Authors: 	Devin D., Manuel U.
Institution: 	University of Florida
Organization: 	Association for Information Systems
Branch: 	Community Development and Outreach Consulting Team B
Version: 	1.1 (4/26/21)
*/

//Duration multiplier for quick changes
const dur_multiplier = 1;

//Sets starting values for counters (0)
let startNums = new Array(0,0,0,0);

//Sets the number that the value will increase by each time it counts
const increments = new Array(
							3200,		//Figure 1 Increment
							1,			//Figure 2 Increment
							50,			//Figure 3 Increment
							1			//Figure 4 Increment
							);

//Sets the ending values that the counters finish on
const endNums = new Array(
						2400000,		//Figure 1 Data
						40,				//Figure 2 Data
						23000,			//Figure 3 Data
						16				//Figure 4 Data
						);

//Sets the amount of time between counts
const durations =  new Array(
							4,			//Figure 1 Duration (ms)
							75,			//Figure 2 Duration (ms)
							6.67,		//Figure 3 Duration (ms)
							187.5		//Figure 4 Duration (ms)
							);

//Array for the 4 element tags for iteration
const tags = new Array(
						'#counter0',	//Text element 1
						'#counter1',	//Text element 2
						'#counter2',	//Text element 3
						'#counter3'		//Text element 4
						);

const units = new Array('+','%','+','%',);

const logicals = new Array('','','','<',);

//Event Listener for scroll-over
$w.onReady(function () {
  $w('#counter0').onViewportEnter(counter0_view);
});

//Calls countup() passing the element increment and duration
export function counter0_view(event){
	for(let i = 0; i <= 3; i++) {
		setInterval(()=> {countUp(i);}, (durations[i])*dur_multiplier);
	}
}

//Counts number using increment, startNum, and endNum
function countUp(element){	 
	if (startNums[element] < (endNums[element]+increments[element])){
		$w(tags[element]).text = logicals[element].concat(startNums[element].toLocaleString().toString().concat(units[element]));
		startNums[element]+=increments[element];
	}
}
