 // https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_wVf4uhzD9b2f4UGoZGs5OZKfjWWDf&emailAddress=support@whoisxmlapi.com
    // api key    at_wVf4uhzD9b2f4UGoZGs5OZKfjWWDf

    fetch('https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_wVf4uhzD9b2f4UGoZGs5OZKfjWWDf&emailAddress=arma19@gmail.com')
    .then(res => res.json())
    .then(data => {
      if(data.formatCheck){
        console.log(data.formatCheck)
        console.log(data.smtpCheck)
        console.log(data.disposableCheck)
      }
    })