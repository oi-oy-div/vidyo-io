[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/oi-oy-div/vidyo-io)

##&lt;vidyo-io&gt;

# A Polymer 2.0 Component for Vidyo IO 

## Installation
* Install [git](https://git-scm.com/download) 
* Install [npm](https://nodejs.org/en/download/) 
* Using npm install bower
```
npm install -g bower
```
* Create a directory where you want to install vidyo-io and make this directory current
* Using bower install the vidyo-io
```
bower install --save oi-oy-div/vidyo-io
```

## Installation and Usage of demo
The repository contains a demo showing the usage of the components. 
To run the demo one would need to get [Vidyo IO account](https://developer.vidyo.io) and 
copy *Application ID* and *Developer Key* from the [Dashboard](https://developer.vidyo.io/dashboard)

NOTE: Knowledge of these values allows access to your vidyo io minutes, so keep them private.

* In the directory where the vidyo-io are installed create directory config and in it create file named default.json containing
```js
{
  "key":"[[Developer Key]]",
  "appID":"[[Application ID]]"
}
```
where [[Developer Key]] and [[Application ID]] need to be replaced with the values from the [Dashboard](https://developer.vidyo.io/dashboard)
* Install node components needed to run the demo
```
npm install jssha
npm install btoa
npm install express
npm install config
```
* Run the demo server
```
node bower_components/vidyo-io/demo/index.js
```
* Access the [demo](http://localhost:6789) 
* Allow the app to use the camera and microphone when asked 
* Repeat this process on another computer
* Press the green handset on both computers to establish a connection

## API Reference

### Properties
<table>
<tr>
    <td rowspan="2">controllerHeight</td>
    <td><i>String</i></td> 
    <td>Default: "6%"</td>
</tr>
<tr>
  <td colspan="2">The height of the controller as percent of the elelment height.</td> 
</tr>
<tr>
    <td rowspan="2">fillViewport</td>
    <td><i>Boolean</i></td> 
    <td>Default: false</td>
</tr>
<tr>
  <td colspan="2">If true then the element should take the entire viewport.</td> 
</tr>
<tr>
    <td rowspan="2">tokenServer</td>
    <td><i>String</i></td> 
    <td>Default: ""</td>
</tr>
<tr>
  <td colspan="2">The URL to which the GET request for a token will be sent. The expected response is a JSON document with a single field named "token" and containing the token value.</td> 
</tr>
<tr>
    <td rowspan="2">host</td>
    <td><i>String</i></td> 
    <td>Default: "prod.vidyo.io"</td>
</tr>
<tr>
  <td colspan="2">The Vidyo.io host.</td> 
</tr>
<tr>
    <td rowspan="2">displayName</td>
    <td><i>String</i></td> 
    <td>Default: ""</td>
</tr>
<tr>
  <td colspan="2">The display name of the participant in the conference.</td> 
</tr>
<tr>
    <td rowspan="2">resourceId</td>
    <td><i>String</i></td> 
    <td>Default: ""</td>
</tr>
<tr>
  <td colspan="2">The "resource ID" or room name. All the callers with the same resource name will be put in a single room.</td> 
</tr>
<tr>
    <td rowspan="2">participants</td>
    <td><i>Number</i></td> 
    <td>Default: 16</td>
</tr>
<tr>
  <td colspan="2">The maximum number of participants in a single room.</td> 
</tr>
<tr>
    <td rowspan="2">vidyoIoVersion</td>
    <td><i>String</i></td> 
    <td>Default: "latest"</td>
</tr>
<tr>
  <td colspan="2">The version of the Vidyo.io software to use.</td> 
</tr>
</table>

## Demo

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vidyo-io.html">
    <style>
        vidyo-io {
          width: 500px;
          height: 400px;
        }
    </style>    
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
   <vidyo-io
        token-server="http://localhost:6789/getToken"
        display-name="Best User" 
        controller-height="10%"
        resource-id="VidyoIODemoRoom">
   </vidyo-io>
```

