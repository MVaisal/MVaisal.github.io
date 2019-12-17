$("#formmasukii").submit(function(event) {
         	event.preventDefault();
            var uname = $("#uname").val();
            var psw = $("#psw").val();
            if ($.isEmptyObject(uname) || $.isEmptyObject(psw)){
            alert("Username atau Password Kosong");
            } else  if (uname != "admin" && psw != "admin"){
            	alert("Username atau Password Salah");
            } else {
                document.location.href = "useradmin.html";
            
            }
        });