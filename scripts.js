// Write your JavaScript code here.
window.addEventListener('load', function () {
    let takeOffBtn = document.getElementById("takeoff");
    takeOffBtn.addEventListener('click', function(){
        let isReadyToLaunch=window.confirm ("Confirm that the shuttle is ready for takeoff.");
        if (isReadyToLaunch) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Shuttle in flight.";
            
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: #0000FF");

            let shuttleHeight=document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "10000";
        }    
    });

    let landBtn = document.getElementById("landing");
    landBtn.addEventListener('click', function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "The Shuttle has landed.";

        let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: #00FF00");
        
        let shuttleHeight=document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "0";
        });

    let abortBtn = document.getElementById("missionAbort");
    abortBtn.addEventListener('click', function () {
        let abortMission=window.confirm ("Confirm that you want to abort the mission.");
        if (abortMission) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Mission Aborted";
            
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: #0000FF");

            let shuttleHeight=document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "0";
        }
    });

    let rightBtn = document.getElementById("right");

    let leftBtn = document.getElementById("left");
    
    let upBtn = document.getElementById("up");
        upBtn.addEventListener('click', function () {
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            let shuttleHeightAmount = Number(shuttleHeight.innerText);
            shuttleHeightAmount += 10000;
            shuttleHeight.innerText=shuttleHeightAmount;
        });
        let downBtn = document.getElementById ("down");
    downBtn.addEventListener('click', function (){
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText=shuttleHeightAmount;
     });
});

// Remember to pay attention to page loading!
