      google.setOnLoadCallback(drawChart);

      function drawChart() {

        var dashboard = new google.visualization.Dashboard(
          document.getElementById('programmatic_dashboard_div'));

        // We omit "var" so that programmaticSlider is visible to changeRange.
        programmaticSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'programmatic_control_div',
          'options': {
            'filterColumnLabel': 'CPU Usage',
            'ui': {'labelStacking': 'vertical'}
          }
        });

       programmaticChart  = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'programmatic_chart_div',
        'options': {
          'width': 300,
          'height': 300,
          'legend': 'none',
          'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
          'pieSliceText': 'value'
        }
      });
  
      var data = google.visualization.arrayToDataTable([
        ['Name', 'CPU Usage'],
        ['Dryer' , 5],
        ['Dish Washer', 7],
        ['Air Conditioner', 3],
        ['Washer', 2],
        ['Nest', 6],
        ['Camera', 1],
        ['Light', 8]
      ]);

      dashboard.bind(programmaticSlider, programmaticChart);
      dashboard.draw(data);
    }

google.setOnLoadCallback(drawGChart);
      function drawGChart() {

        var gdata = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 600, height: 190,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(gdata, options);
        }, 13000);
        setInterval(function() {
          gdata.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(gdata, options);
        }, 5000);
        setInterval(function() {
          gdata.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(gdata, options);
        }, 26000);
          chart.draw(gdata, options);
      }

google.load("visualization", "1.1", {packages:["table"]});
      google.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Machine');
        data.addColumn('number', 'CPU');
        data.addColumn('boolean', 'Connect');
        data.addRows([
          ['Server-1',  {v: 10000, f: '90%'}, true],
          ['Computer',   {v:8000,   f: '12%'},  false],
          ['Dryer', {v: 12500, f: '17.5%'}, true],
          ['Washer',   {v: 7000,  f: '55%'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
