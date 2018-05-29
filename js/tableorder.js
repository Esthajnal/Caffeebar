function tableths() {
  var tabletitle = document.querySelectorAll("th");
  //document.querySelectorAll("th") = tabletitles.toUpperCase();
  for (let i = 0; i < tabletitle.length; i++) {
    tabletitle[i].innerHTML = "change";
  }
}
tableths();
