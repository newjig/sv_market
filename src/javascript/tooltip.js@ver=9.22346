var offsetfromcursorX 		= 12;
var offsetfromcursorY 		= 10;
var offsetdivfrompointerX 	= 10;
var offsetdivfrompointerY 	= 13;

document.write('<div id="dhtmltooltip"></div>');
document.write('<img width="15" height="15" id="dhtmlpointer" src="style/images/tooltiparrow.gif">');
document.write('<div id="tooltip_html"></div>');

var ie 					= document.all;
var ns6 				= document.getElementById && ! document.all;
var enable_tip 			= false;
var enable_tip_html 	= false;

var tipobj 				= document.getElementById("dhtmltooltip");
var pointerobj 			= document.getElementById("dhtmlpointer");
var html_tipobj 		= document.getElementById("tooltip_html");

function ietruebody()
{
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}

String.prototype.trim = function (){
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function showtip(thetext, thewidth, thecolor) {
    if (ns6 || ie) {
        if (typeof thewidth != "undefined")
            tipobj.style.width = thewidth + "px";

        if (typeof thecolor != "undefined" && thecolor != "")
            tipobj.style.backgroundColor = thecolor;

        thetext = thetext.trim();
        var arr = thetext.split(" ");

        for(i=0;i<arr.length;i++)
        {
            if(arr[i].length>=40)
            {
                thetext=thetext.replace(arr[i],arr[i].substr(0,40)+"...");
            }
        }

        tipobj.innerHTML 	= thetext;
        enable_tip 			= true;

        return false;
    }
}


function html_tip(the_html)
{
    if (ns6 || ie)
    {
        html_tipobj.style.width = "auto";

        html_tipobj.style.opacity = 1;

        html_tipobj.innerHTML = the_html.trim();

        enable_tip_html = true;

        //jQuery('.boxTooltip').fadeIn(800);
        return false;
    }
}

function positiontip(e) {
    if (enable_tip)
    {
        var nondefaultpos = false;

        var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
        var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;

        var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
        var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;

        var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
        var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;

        var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;


        if (rightedge < tipobj.offsetWidth) {
            tipobj.style.left = curX - tipobj.offsetWidth + "px";
            nondefaultpos = true;
        }
        else if (curX < leftedge)
            tipobj.style.left = "5px";
        else {
            tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
            pointerobj.style.left = curX + offsetfromcursorX + "px";
        }

        if (bottomedge < tipobj.offsetHeight) {
            tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
            nondefaultpos = true;
        }
        else {
            tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
            pointerobj.style.top = curY + offsetfromcursorY + "px";
        }

        tipobj.style.visibility = "visible";

        if (! nondefaultpos)
            pointerobj.style.visibility = "visible";
        else
            pointerobj.style.visibility = "hidden";
    }
    else if (enable_tip_html)
    {
        var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
        var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;

        var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
        var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;

        var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
        var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;

        var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;


        if (rightedge < html_tipobj.offsetWidth) {
            html_tipobj.style.left = curX - html_tipobj.offsetWidth + "px";
        }
        else if (curX < leftedge)
            html_tipobj.style.left = "5px";
        else {
            html_tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
        }

        if (bottomedge < html_tipobj.offsetHeight) {
            html_tipobj.style.top = curY - html_tipobj.offsetHeight - offsetfromcursorY + "px";
        }
        else {
            html_tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
        }

        html_tipobj.style.visibility = "visible";
    }
}

function hidetip()
{
    if (ns6 || ie)
    {
        enable_tip 						= false;
        enable_tip_html 				= false;

        tipobj.style.visibility 		= "hidden";
        pointerobj.style.visibility 	= "hidden";

        tipobj.style.left 				= "-1000px";
        tipobj.style.backgroundColor 	= '';
        tipobj.style.width 				= '';

        html_tipobj.style.visibility 		= "hidden";
        html_tipobj.style.left 				= "-1000px";
        html_tipobj.style.backgroundColor 	= '';
        html_tipobj.style.width 			= '';
    }
}


/*
 function positiontipimg(e) {
 if (enable_tip){
 var nondefaultpos = false;
 var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
 var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;

 var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
 var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;

 var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
 var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;

 var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;

 if (rightedge < tipobj.offsetWidth) {
 tipobj.style.left = curX - tipobj.offsetWidth + "px";
 nondefaultpos = true;
 }
 else if (curX < leftedge)
 tipobj.style.left = "5px";
 else {
 tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
 pointerobj.style.left = curX + offsetfromcursorX + "px";
 }

 if (bottomedge < tipobj.offsetHeight) {
 tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
 nondefaultpos = true;
 }
 else {
 tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
 pointerobj.style.top = curY + offsetfromcursorY + "px";
 }

 tipobj.style.visibility = "visible";

 if (! nondefaultpos)
 pointerobj.style.visibility = "visible";
 else
 pointerobj.style.visibility = "hidden";
 }
 }*/

document.onmousemove = positiontip;