// Get the progress-one element
const progressOne = document.getElementById('progress-one');
console.log(progressOne);
const progressTwo = document.getElementById('progress-two');
const progressThree = document.getElementById('progress-three');

// Set the progress value (between 0 and 100)
let progressValueOne = 60;
if (progressValueOne == 0) {
	progressValue1 = 0
} else {
	progressValue1 = progressValueOne + 290/(progressValueOne + 20);
}

// Calculate the dash array based on the progress value
const circumferencebig = 64 * 2 * Math.PI; // circumference of the circle
const dashArray1 = (progressValue1 / 100) * circumferencebig;

// Set the dash array and dash offset as styles
progressOne.style.strokeDasharray = `${dashArray1} ${circumferencebig}`;

let progressValueTwo = 80;
if (progressValueTwo == 0) {
	progressValue2 = 0
} else {
	progressValue2 = progressValueTwo + 500/(progressValueTwo + 10);
}

const circumferencesmall = 50 * 2 * Math.PI;
const dashArray2 = (progressValue2 / 100) * circumferencesmall;

progressTwo.style.strokeDasharray = `${dashArray2} ${circumferencesmall}`;

let progressValueThree = 0

if (progressValueThree == 0) {
	progressValue3 = 0;
} else {
	const progressValue3 = progressValueThree + 4000/(progressValueThree + 80);
}

const dashArray3 = (progressValue3 / 100) * circumferencesmall;
console.log(dashArray3);
console.log(circumferencesmall);

progressThree.style.strokeDasharray = '${dashArray3} ${circumferencesmall}';

const xValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const yValues = [55, 49, 44, 24, 15, 20, 10];
const barColors = "grey"

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
			yAxes: [{
        ticks: {
        stepSize: 10 // Set the interval between each tick on the y-axis
        }
      }]
    },
		title: {
      display: true,
      text: "Wear from past week"
    },
		legend: {
			display: false
		}
  },
});