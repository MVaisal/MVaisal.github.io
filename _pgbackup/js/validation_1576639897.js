$("#formmasukii").submit(function(event) {
         	event.preventDefault();
            var uname = $("#uname").val();
            var psw = $("#psw").val();
    		console.log(($.isEmptyObject(uname) || $.isEmptyObject(psw)));
            if ($.isEmptyObject(uname) || $.isEmptyObject(psw)){
            alert("Username atau Password Kosong");
            } else if (uname == "user" && psw == "user"){
                $(this).attr('action', "profil.html");
                return true;
            } else if (uname != "admin" && psw != "admin"){
            	alert("Username atau Password Salah");
                return false;
            } else
                document.location.href = "useradmin.html";
            }
        });