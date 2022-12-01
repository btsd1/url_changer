function addState() {
    let stateObj = { id: "100" };
      
    window.history.pushState(stateObj,
             "Page 2", "/page2.html");}