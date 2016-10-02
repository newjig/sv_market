var MING_APP_KEY		=	'519822c5a6685af4ef3d276267104705';

var ming_root_path		=	'../vietid.net/'
var ming_big4LoginPath 	= 	ming_root_path + 'big4/request';

var ming_client_path	=	ming_root_path + 'mingid/ming_request.php';
var ming_callback		=	ming_root_path + 'mingid/ming_callback.php';
var ming_access_key		=	'';
var ming_user_id		=	'';

//http://localhost/Ming/public_id/

function getParams(args){
	params = "?";
  	for(i in args){
    	params += (i + '=' + args[i] + '&');
  	}
  	return params;
}

function generateLoginUrl(foreign_type, type) {
 	args = {
	    site_key:		MING_APP_KEY,
	    site_callback:	ming_callback,
	    access_key:		ming_access_key,
	    user_id:		ming_user_id,
	    foreign_type:	foreign_type,
	    type:			type	
  	}
	
  	return ming_big4LoginPath + getParams(args);
}
//Login qua facebook=2, twitter=3, google=4, yahoo=5, ming=6
function openLoginWindow(foreign_type, type){
	var _width	=	530;
  	var Xpos	=	( (screen.availWidth - _width)/2 );
  	var _height	=	390;
  	var Ypos  	=	( (screen.availHeight - _height)/2 );
	if(foreign_type == 6){
		window.mingWindow = window.open(ming_client_path,'','width='+_width+',height='+_height+',toolbar=no,resizable=fixed,status=no,scrollbars=no,menubar=no,screenX='+Xpos+',screenY='+Ypos);
  		mingWindow.focus();
  		return false;
  	}else{
  		window.big4Window = window.open(generateLoginUrl(foreign_type, type),'','width='+_width+',height='+_height+',toolbar=no,resizable=fixed,status=no,scrollbars=no,menubar=no,screenX='+Xpos+',screenY='+Ypos);
  		big4Window.focus();
  		return false;
  	}
}

function openWindow(sUrl){
	var _width	= 530;
  	var Xpos	=	( (screen.availWidth - _width)/2 );
  	var _height	=	390;
  	var Ypos  	=	( (screen.availHeight - _height)/2 );

    window.mingWindow = window.open(sUrl,'','width='+_width+',height='+_height+',toolbar=no,resizable=fixed,status=no,scrollbars=no,menubar=no,screenX='+Xpos+',screenY='+Ypos);
    mingWindow.focus();
    return false;

}

function loadMingConnect(id){
	var html	=	'';
	html	=	'<a href="javascript://" onclick="openLoginWindow(6, 1)">Ming</a> '+
				'<a href="javascript://" onclick="openLoginWindow(5, 1)">Yahoo</a> '+
				'<a href="javascript://" onclick="openLoginWindow(4, 1)">Google</a> '+
				'<a href="javascript://" onclick="openLoginWindow(3, 1)">Twitter</a> '+
				'<a href="javascript://" onclick="openLoginWindow(2, 1)">Facebook</a> ';
	document.getElementById(id).innerHTML	=	html;			
}

function openMyModal(source,width,height, close_modal)
{
    shop.hide_overlay_popup('cart-regulations');
	if(typeof(close_modal) == 'undefined') close_modal = true;
	
	
    modalWindow.windowId 	= "myModal";
    modalWindow.width 		= width;
    modalWindow.height 		= height;
	modalWindow.btnclose 	= close_modal;
	
    modalWindow.content 	= "<iframe frameborder='0' scrolling='no' allowtransparency='true' src='" + source + "' style='width:700px;height:600px'></iframe>";
    modalWindow.open();
}

function closeMyModal(){
    modalWindow.close();
    window.location.href = window.location.href;
}

function closeMyModalLogout(){
    modalWindow.close();       
    window.location.href = oRootEngine.m_sAbsPath+'home';
}

function refreshPage(){
    window.location.reload();
}

function refreshParent(){
    window.opener.location.href = window.opener.location.href;
  	if (window.opener.progressWindow){
  		window.opener.progressWindow.close();
  	}
	
  	window.close();
}