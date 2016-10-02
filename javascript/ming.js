function load_user_ming()
{
    jQuery.ajax({
        type: 'GET',
        url: '../vietid.net/login/checksession@app_key=',
        jsonpCallback: 'mingAuthCallBack',
        dataType: 'jsonp',
        success: function(data)
        {
            var d = data;
        },
        error: function(e)
        {
//            alert(e.message);
        }

    });
}

function mingAuthCallBack(data)
{
    if(data!='null')
    {
        numbersArray = data.replace("{"," ");
        numbersArray = numbersArray.replace("}"," ");
        numbersArray = numbersArray.split(',');
        arr = numbersArray[2];
        arr_email = arr.split(':');
        arr0 = numbersArray[0];
        arr_id = arr0.split(':');
        user_ming_email = arr_email[1].replace('"',' ');
        user_ming_email = user_ming_email.replace('"',' ');
        user_ming_id = arr_id[1].replace('"',' ');
        user_ming_id = user_ming_id.replace('"',' ');
        jQuery.ajax({

            type: "POST",
            url:WEB_DIR+"ajax.php@act=user&code=auto_login_ming",
            data: "email="+user_ming_email+"&id="+user_ming_id,
            success: function(jsonp)
            {
                window.location.reload();
            }
        });
    }

}

