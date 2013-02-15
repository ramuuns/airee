var _countDowncontainer = 0;
var _currentSeconds = 0;

function ActivateCountDown(strContainerID, initialValue) {
    _countDowncontainer = document.getElementById(strContainerID);

    if (!_countDowncontainer) {
        alert("count down error: container does not exist: " + strContainerID +
            "\nmake sure html element with this ID exists");
        return;
    }

    SetCountdownText(initialValue);
    window.setTimeout(CountDownTick, 1000);
}

function CountDownTick() {
    if (_currentSeconds <= 0) {
        //alert("your time has expired!");
        _currentSeconds = 0;
        return;
    }

    SetCountdownText(_currentSeconds - 1);
    window.setTimeout(CountDownTick, 1000);
}

function SetCountdownText(seconds) {
    //store:
    _currentSeconds = seconds;

    //get minutes:
    var minutes = parseInt(seconds / 60);

    //shrink:
    seconds = (seconds % 60);

    //get hours:
    var hours = parseInt(minutes / 60);

    //shrink:
    minutes = (minutes % 60);

    //get days:
    var days = parseInt(hours / 24);

    //shrink:
    hours = (hours % 24);

    //build text:
    //var strText = days + " dienas, " + AddZero(hours) + ":" + AddZero(minutes) + ":" + AddZero(seconds) + "";
    var strText = "<span class='accent'>" + days + "</span> diena" + (("" + days).substr(-1) === "1" && ("" + days).substr(-2) !== "11" ? '' : 's' ) + ", <span class='accent'>" + AddZero(hours) + "</span>:<span class='accent'>" + AddZero(minutes) + "</span>:<span class='accent'>" + AddZero(seconds) + "</span>";
    //var strText = "<span class='accent'>"days + "</span> dienas, <span class='accent'>" + AddZero(hours) + ":" + AddZero(minutes) + ":" + AddZero(seconds) + "</span>";

    //apply:
    _countDowncontainer.innerHTML = strText;
}

function AddZero(num) {
    return ((num >= 0) && (num < 10)) ? "0" + num : num + "";
} 
