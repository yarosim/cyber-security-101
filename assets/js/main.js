(function(){
  var C = window.CS101_CONFIG || {}; var links = C.PAYMENT_LINKS || {}; var gumroad = C.GUMROAD_LINKS || {}; var email = C.SUPPORT_EMAIL || "pnsgloballlc@gmail.com";
  document.querySelectorAll("[data-buy]").forEach(function(a){
    var slug = a.getAttribute("data-buy"), name = a.getAttribute("data-name"), price = a.getAttribute("data-price");
    var url = (links[slug] || "").trim();
    if (url) { a.href = url; a.textContent = "Buy with Stripe — $" + price; a.classList.remove("soon"); a.classList.add("btn-primary"); a.rel = "noopener"; }
    else {
      a.href = "mailto:" + email + "?subject=" + encodeURIComponent("Order: " + name) + "&body=" + encodeURIComponent("Hi! I'd like to order the " + name + " ($" + price + "). Please send payment details.");
      a.textContent = "Coming soon — email to order"; a.classList.add("soon"); a.classList.remove("btn-primary");
    }
  });
  document.querySelectorAll("[data-gumroad]").forEach(function(a){
    var slug = a.getAttribute("data-gumroad"), price = a.getAttribute("data-price");
    var url = (gumroad[slug] || "").trim();
    if (!url) { a.hidden = true; return; }
    if (url.indexOf("wanted=") === -1) url += (url.indexOf("?") === -1 ? "?" : "&") + "wanted=true";
    a.href = url; a.textContent = "Buy on Gumroad — $" + price; a.hidden = false; a.rel = "noopener";
  });
  var v = C.VIDEOS || {};
  document.querySelectorAll("[data-video]").forEach(function(el){
    var u = (v[el.getAttribute("data-video")] || "").trim();
    if (u) { el.href = u; el.hidden = false; } else { el.hidden = true; }
  });
  var y = document.getElementById("yr"); if (y) y.textContent = new Date().getFullYear();
})();
