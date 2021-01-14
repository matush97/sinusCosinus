var number = 1;
var data=[
    {y:[], mode:'lines', name: "sin"},
    {y:[], mode:'lines', name: "cos"}]

if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php");
    // http://vmzakova.fei.stuba.sk/sse/sse.php
 
    source.addEventListener("message", function(e) {
        
        var data = JSON.parse(e.data);
        if(number == 1){
        document.getElementById("hodnoty").innerHTML = e.data;
        Plotly.extendTraces('grafSinCos', {
                y: [[data.y1], [data.y2]]
            }, [0, 1])}
			}, false);
  
}else {
    document.getElementById("hodnoty").innerHTML =
     "Nefunguje";
}

function graf(){
    var cos= document.getElementById("sinus");
    var sin= document.getElementById("cosinus");
    var see = {visible: true};
    var hidden = {visible: false};

    if(sin.checked == true){
        Plotly.restyle(grafSinCos,see,0);
    }else{
        Plotly.restyle(grafSinCos,hidden,0);
    }
    if(cos.checked == true){
        Plotly.restyle(grafSinCos,see,1);
    }else{
        Plotly.restyle(grafSinCos,hidden,1);
    }
}



Plotly.newPlot('grafSinCos',data);

function start(){
    number=1;
}
function end(){
    number=0;
}


    