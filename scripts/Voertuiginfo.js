let myChart = document.getElementById("myChart1").getContext("2d");

Chart.defaults.global.defaultFontFamily="Roboto Mono";
Chart.defaults.global.defaultFontSize=10;
Chart.defaults.global.defaultFontColor="#FFFFFF";

// Dit is de informatie die in mijn grafiek staat, ik heb gekozen voor een donut grafiek.
let luchtChart = new Chart(myChart,{
    type: "doughnut", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Stikstof","Zuurstof","Koolstofdioxide"],
        datasets:[{
            label:"Lucht stoffen in percentages",
            data:[78,20,1],
            backgroundColor:["#FCB802","#FF05D9","#00F7A1"],
            hoverColor:"#300067",
        }]
    },
    options:{
        title:{
            display:true,
            text:"Luchtstoffen in percentages",
            // float:"left",
            fontSize: 14
        },
        legend:{
            display:true,
            position:"right",
        }

    }
})