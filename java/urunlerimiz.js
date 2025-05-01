
        function goster(){
            var x = document.getElementById("sonuc1");
            if(x.style.display === "none"){
                x.style.display = "block";
            }
            else{
                x.style.display = "none";
            }
            }
    
            function goster2(){
                var x = document.getElementById("sonuc2");
                if(x.style.display === "none"){
                    x.style.display = "block";
                }
    
                else{
                    x.style.display = "none";
                }
            }
            
          var toplam = 0;
          var domadet = 0;
          var saladet = 0;
          var bibadet = 0;
          var kbibadet = 0;
          var kerevizadet = 0;
          var zeyadet = 0;
          var domsalcaadet = 0;
          var bibsalcaadet = 0;
          var karsalcaadet = 0;
          var zeyyagadet = 0;
          var tursuadet = 0;
          var tozadet = 0;
          function sepet(){
              var dom = 3;
              domadet = domadet + 1;
              toplam = toplam + dom;
              document.getElementById("odeme1").innerHTML = domadet + "Kg Domates";
              document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
        
          }

          function sepet2(){
            var sal = 2;
            saladet = saladet + 1;
            toplam = toplam + sal;
            document.getElementById("odeme2").innerHTML = saladet + "Kg Salatalık";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }

        function sepet3(){
            var bib = 1;
            bibadet = bibadet + 1;
            toplam = toplam + bib;
            document.getElementById("odeme3").innerHTML = bibadet + "Kg Biber";
            document.getElementById("toplam").innerHTML = "Sepet Tutarı: " + toplam + "TL";
      
        }

        function sepet4(){
            var kbib = 2;
            kbibadet = kbibadet + 1;
            toplam = toplam + kbib;
            document.getElementById("odeme4").innerHTML = kbibadet + "Kg Kırmızı Biber";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }

        function sepet5(){
            var kereviz = 1.50;
            kerevizadet = kerevizadet + 1;
            toplam = toplam + kereviz;
            document.getElementById("odeme5").innerHTML = kerevizadet + "Kg Kereviz";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }   

        function sepet6(){
            var zeytin = 10;
            zeyadet = zeyadet + 1;
            toplam = toplam + zeytin;
            document.getElementById("odeme6").innerHTML = zeyadet + "Kg Yeşil Zeytin";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " + toplam + "TL";
      
        }

        function sepet7(){
            var domsalca = 15;
            domsalcaadet = domsalcaadet + 1;
            toplam = toplam + domsalca;
            document.getElementById("odeme7").innerHTML = domsalcaadet + "Kg Domates Salçası";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }

        function sepet8(){
            var bibsalca = 30;
            bibsalcaadet = bibsalcaadet + 1;
            toplam = toplam + bibsalca;
            document.getElementById("odeme8").innerHTML = bibsalcaadet + "Kg Biber Salçası";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }


        function sepet9(){
            var karsalca = 20;
            karsalcaadet = karsalcaadet + 1;
            toplam = toplam + karsalca;
            document.getElementById("odeme9").innerHTML = karsalcaadet + "Kg Karışık Salça";
            document.getElementById("toplam").innerHTML ="Sepet Tutarı: " +  toplam + "TL";
      
        }


        function sepet10(){
            var yag = 40;
            zeyyagadet = zeyyagadet + 1;
            toplam = toplam + yag;
            document.getElementById("odeme10").innerHTML = zeyyagadet + "Lt Zeytin Yağı";
            document.getElementById("toplam").innerHTML = "Sepet Tutarı: " + toplam + "TL";
      
        }


        function sepet11(){
            var tursu = 20;
            tursuadet = tursuadet + 1;
            toplam = toplam + tursu;
            document.getElementById("odeme11").innerHTML = tursuadet + "Kg Salatalık Turşusu";
            document.getElementById("toplam").innerHTML = "Sepet Tutarı: " + toplam + "TL";
      
        }

        function sepet12(){
            var toz = 25;
            tozadet = tozadet + 1;
            toplam = toplam + toz;
            document.getElementById("odeme12").innerHTML = tozadet + "Kg Kereviz Tozu";
            document.getElementById("toplam").innerHTML =   "Sepet Tutarı: " + toplam + "TL";
      
        }

        function siparisver() {
            var carp = 0;
            domadet = domadet * carp;
            saladet = saladet * carp;
            bibadet = bibadet * carp;
            kbibadet = kbibadet * carp;
            kerevizadet = kerevizadet * carp;
            zeyadet = zeyadet * carp;
            domsalcaadet = domsalcaadet * carp;
            bibsalcaadet = bibsalcaadet * carp;
            karsalcaadet = karsalcaadet * carp;
            zeyyagadet = zeyyagadet * carp;
            tursuadet = tursuadet * carp;
            tozadet = tozadet * carp;
            toplam = toplam * 0;
            document.getElementById("odeme1").innerHTML = " ";
            document.getElementById("odeme2").innerHTML = " ";
            document.getElementById("odeme3").innerHTML = " ";
            document.getElementById("odeme4").innerHTML = " ";
            document.getElementById("odeme5").innerHTML = " ";
            document.getElementById("odeme6").innerHTML = " ";
            document.getElementById("odeme7").innerHTML = " ";
            document.getElementById("odeme8").innerHTML = " ";
            document.getElementById("odeme9").innerHTML = " ";
            document.getElementById("odeme10").innerHTML = " ";
            document.getElementById("odeme11").innerHTML = " ";
            document.getElementById("odeme12").innerHTML = " ";
            document.getElementById("toplam").innerHTML = " ";
            window.alert("Siparişiniz Alınmıştır.Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz");
        }

        function sepetisil() {
            var carp = 0;
            domadet = domadet * carp;
            saladet = saladet * carp;
            bibadet = bibadet * carp;
            kbibadet = kbibadet * carp;
            kerevizadet = kerevizadet * carp;
            zeyadet = zeyadet * carp;
            domsalcaadet = domsalcaadet * carp;
            bibsalcaadet = bibsalcaadet * carp;
            karsalcaadet = karsalcaadet * carp;
            zeyyagadet = zeyyagadet * carp;
            tursuadet = tursuadet * carp;
            tozadet = tozadet * carp;
            toplam = toplam * 0;
            document.getElementById("odeme1").innerHTML = " ";
            document.getElementById("odeme2").innerHTML = " ";
            document.getElementById("odeme3").innerHTML = " ";
            document.getElementById("odeme4").innerHTML = " ";
            document.getElementById("odeme5").innerHTML = " ";
            document.getElementById("odeme6").innerHTML = " ";
            document.getElementById("odeme7").innerHTML = " ";
            document.getElementById("odeme8").innerHTML = " ";
            document.getElementById("odeme9").innerHTML = " ";
            document.getElementById("odeme10").innerHTML = " ";
            document.getElementById("odeme11").innerHTML = " ";
            document.getElementById("odeme12").innerHTML = " ";
            document.getElementById("toplam").innerHTML = " ";
            window.alert("Tüm Sepetiniz Temizlenmiştir");
        }

 
        



        
            
        