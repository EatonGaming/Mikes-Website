function getMessage()
{
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var messageToReturn;

    if (currentHour <= 12)
    {
        messageToReturn = "Good Morning.";
    }
    else if (currentHour <= 17)
    {
        messageToReturn = "Good Afternoon.";
    }
    else
    {
        messageToReturn = "Good Evening.";
    }

    document.getElementById("welcome-title").innerHTML = messageToReturn;
};