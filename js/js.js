$(document).ready(function()
    {
      // definindo idioma
      var idiomaNavegador = navigator.language || navigator.userLanguage;
      if (idiomaNavegador === 'pt-BR')
      {
        idiomaNavegador = "Português";
      }
      $('#idioma_br').html("idioma: " + idiomaNavegador);
      var pages = $(".pag");
      var currentPage = 0;
      var scrollEnabled = true;
      var scrollTimeout;
      
      $(window).on("wheel", function(event) {
        if (!scrollEnabled) {
          return;
        }
        
        scrollEnabled = false;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          scrollEnabled = true;
        }, 800);
        
        if (event.originalEvent.deltaY > 0) {
          nextPage();
        } else {
          prevPage();
        }
      });
      
      function nextPage() {
        if (currentPage < pages.length - 1) {
          currentPage++;
          $("html, body").animate({
            scrollTop: pages.eq(currentPage).offset().top
          }, 800);
        }
      }
      
      function prevPage() {
        if (currentPage > 0) {
          currentPage--;
          $("html, body").animate({
            scrollTop: pages.eq(currentPage).offset().top
          }, 800);
        }
      }
    });
function mudaAno(ano)
    {
      $(".flow-text").removeClass("tl_ativo");
      $(".flow-text").addClass("tl_inativo");
      $("#tl" + ano).removeClass("tl_inativo");
      $("#tl" + ano).addClass("tl_ativo");
      $("#tl_img img").attr("src", "img/" + ano + ".png");
      $("#tl_text").html("<h3>" + ano + "</h3><br>")
    }