$(document).ready(function() {
  loadData();
  $('#refresh').click(function() {
    loadData();
  });
});


function loadData() {
  var data = refreshDataSets();
  var chart = new CanvasJS.Chart("results", {
    title:{
      text: "Resultaten"
    },
    data: [
      {
        type: "line",
        dataPoints: data[0]
      },
      {
        type: "line",
        dataPoints: data[1]
      },
      {
        type: "line",
        dataPoints: data[2]
      },
    ],
    axisY:{
      stripLines:[
        {
          startValue:900,
          endValue:1100,
          color:"#ccffcc",
          label : "-",
          labelFontColor: "#ffffff",
          indexLabelPlacement: "inside"
        },
        {
          startValue:425,
          endValue:575,
          color:"#ccffcc",
          label : "-",
          labelFontColor: "#ffffff"
        },
        {
          startValue:80,
          endValue:120,
          color:"#ccffcc",
          label : "'",
          labelFontColor: "#ffffff"
        }
      ]
    }
  });
  chart.render();
}

function refreshDataSets() {
  var alldata = [];
  alldata[0] = [];
  alldata[1] = [];
  alldata[2] = [];
  var data = alldata[0];
  for(i=0;i<100000;i++) {
    var rnd = Math.floor((Math.random() * 99) + 0);
    if(data[rnd]) {
      if(data[rnd].y < 1099) {
        data[rnd].y = data[rnd].y+1;
      }
    } else {
      data[rnd] = { label: rnd, y: 1};
    }
  }
  var data = alldata[1];
  for(i=0;i<50000;i++) {
    var rnd = Math.floor((Math.random() * 99) + 0);
    if(data[rnd]) {
      data[rnd].y = data[rnd].y+1;
    } else {
      data[rnd] = { label: rnd, y: 1};
    }
  }
  var data = alldata[2];
  for(i=0;i<10000;i++) {
    var rnd = Math.floor((Math.random() * 99) + 0);
    if(data[rnd]) {
      data[rnd].y = data[rnd].y+1;
    } else {
      data[rnd] = { label: rnd, y: 1};
    }
  }
  return alldata;
}
