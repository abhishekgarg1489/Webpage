function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(".panels").accordion({
    collapsible:true,
    event:"click",
    animate:300,
    active:0,
    heightStyle:true,
    icons:{header:"ui-icon-plus", activeHeader:"ui-icon-minus"}
});
