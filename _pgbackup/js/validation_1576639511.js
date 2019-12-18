$("#formmasukii").submit(function(event) {
         	event.stopProgation();
            var uname = $("#uname").val();
            var psw = $("#psw").val();
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