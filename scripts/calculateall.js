'use strict';
var Price_Map = {
    roomsclean1: 27,
    roomsprotect1: 62,
    staircasesclean1: 62,
    staircasesprotect1: 27,
    bathsclean1: 20,
    bathsprotect1: 11,
    hallwaysclean1: 20,
    hallwaysprotect1: 11,
    roomsclean2: 103,
    roomsclear1: 51,
    roomscolorseal1: 160,
    staircasesclean2: 100,
    staircasesclear1: 51,
    staircasescolorseal1: 160,
    bathsclean2: 45,
    bathsclear1: 25,
    bathscolorseal1: 70,
    hallwaysclean2: 45,
    hallwaysclear1: 25,
    hallwayscolorseal1: 70,
    sofasclean1: 83,
    sofasprotect1: 43,
    sectionalsclean1: 165,
    sectionalsprotect1: 84,
    loveseatsclean1: 66,
    loveseatsprotect1: 33,
    chairsclean1: 44,
    chairsprotect1: 22
};
document.forms[0].addEventListener('change', function() {

    var i = 0, query = this.querySelectorAll('select'), len = query.length;
    var total = 0;
    for(; i < len; i++) {
        total += Price_Map[query[i].id] * parseInt(query[i].options[query[i].selectedIndex].value, 10);

    }
document.getElementById('total').textContent = '$' + total; 

}, true);
$("#cartsubmit").click(function() {
    var output = [];
    var obj = {};
    $("tr").each(function() {
        
        var pushresult = parseInt($("select option:selected").val());
        if (pushresult > 0) {
        obj.name = pushresult;
        obj.select = $("select option:selected").val();
        
        //obj.gender = $( ).val();
        output.push(obj);
        
        }
    });
    
    var table = $('#carpetclean').tableToJSON(); // Convert the table into a javascript object
  console.log(table);
  alert(JSON.stringify(table));
    alert(JSON.stringify(output));
    return false;
});

          