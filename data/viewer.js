window.addEventListener("message", function(event) {
  parseResponse(event.data)
}, false);

function parseResponse(response){
  var records = null;
  try {
    records = recline.Backend.CSV.parse(response);
  } catch(e) {
    console.log(JSON.stringify(e));
    alert('Failed to parse CSV file ...');
  }
  if (records) {
    makeView({records: records});
  } else {
    document.body.innerHTML = '<pre>' + response + '</pre>';
  }
}

function makeView(datasetInfo) {
  var dataset = new recline.Model.Dataset({
    records: datasetInfo.records
  });
  var views = [
     {
       id: 'grid',
       label: 'Grid', 
       view: new recline.View.SlickGrid({
         model: dataset
       })
     },
     {
       id: 'graph',
       label: 'Graph',
       view: new recline.View.Graph({
         model: dataset
       })
     },
     {
       id: 'map',
       label: 'Map',
       view: new recline.View.Map({
         model: dataset
       })
     }
  ];

  var sidebarViews = [{
    id: 'filterEditor',
    label: 'Filters',
    view: new recline.View.FilterEditor({
      model: dataset
    })
  }];

  this.grid = new recline.View.MultiView({
    el: jQuery('.recline-multiview-here'),
    model: dataset,
    views: views,
    sidebarViews: sidebarViews
  });
  dataset.query({size: Math.min(datasetInfo.records.length - 1, 10000)});
}


