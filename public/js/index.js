var currpage = 0, pages = [];
$(document).ready(function() {
  pages[0] = 'return Math.floor((Math.random() * 99) + 0)';
  pages[1] = 'return crypto.getRandomValues()';
  loadData(new Function(pages[currpage]));
  $('#refresh').click(function() {
    loadData(new Function(pages[currpage]));
  });
});


function loadData(func) {
  var data = refreshDataSets(func);
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

function pageForward() {
  if(currpage < 1) {
    currpage++;
    $("#alg").text(pages[currpage]);
  }
}

function pageBack() {
  if(currpage > 0) {
    currpage--;
    $("#alg").text(pages[currpage]);
  }
}

function refreshDataSets(func) {
  var alldata = [];
  alldata[0] = [];
  alldata[1] = [];
  alldata[2] = [];
  var data = alldata[0];
  for(i=0;i<100000;i++) {
    var rnd = func();
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
    var rnd = func();
    if(data[rnd]) {
      data[rnd].y = data[rnd].y+1;
    } else {
      data[rnd] = { label: rnd, y: 1};
    }
  }
  var data = alldata[2];
  for(i=0;i<10000;i++) {
    var rnd = func();
    if(data[rnd]) {
      data[rnd].y = data[rnd].y+1;
    } else {
      data[rnd] = { label: rnd, y: 1};
    }
  }
  return alldata;
}
