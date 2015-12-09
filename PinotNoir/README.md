# PinotNoir

Test server for simulating a local installed GPII backend (flowmanager)
This component will become obsolete if the connection to real flowmanager can be established 
for example vie the chrome extension. 

## Installation
 
* Install `node.js` and `npm` from [https://nodejs.org/en/](https://nodejs.org/en/).

* Clone this repository 

* To install all dependencies run `npm install` from inside the the PinoNoir folder 

* To start the server, execute the file `PinotNoirServer.js` in your node context.

## Usage
Open a browser (Firefox is recommended) and browse to `http://127.0.0.1:3030/html/flowmanager_simul.html`
to get to the GPII/Flowmanger simulation. 

The flowmanger simulation provides several "Personas" with static preference sets. 
By selecting a Persona the information of the corresponding preference set is send the the application running the 
Dariwn application running in the web browser. A sample Darwin appliation can be fund in the `Darwin_Testbed`.

Browse to `[Path_To_Darwin_Repo]Darwin_Testbed/html/` and open the `index.html` file 
in a browser, which is capable of running web components - A up-to-date version of Chrome is recommended.  


