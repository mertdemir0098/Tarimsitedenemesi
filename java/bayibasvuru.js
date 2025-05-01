function fromgöder() {
    var z;
    z =document.getElementById("textarea").value;
    var m; 
    m = document.getElementById("textarea2").value;
    var x = document.getElementById("onay");
    var y = document.getElementById("onay2");
    if(m == "" || z == ""){
        alert("Lütfen Boş Kısımları Doldurun!");
        return false; 
    } 
    else{
        if(x.checked == false && y.checked == false){
            window.alert("Lütfen Önce Aydınlatma Metnini Okuyun Ve Daha Sonra Onay verin");
        }
        else{
            window.alert("Başvuru Formunuz Gönderilmiş En Kısa Zamanda Geri Dönüş Yapılacaktır");
         }
    }

    
    
}
     


function aydınlatma() {
        window.alert("Kişisel verilerinizin işlenmesi ile kişisel verilerinizin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem kastedilmektedir.");
}