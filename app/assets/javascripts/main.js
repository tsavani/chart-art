var jsondata = [];
var count;

$(document).ready(function(){
//   // var json_url = document.getElementById("json_url").value;
//   alert("run");
   var json_url = "/chart_index"
  // For Jquery Tabs
  // $('#myTab a').click(function (e) {
  //     if($(this).parent('li').hasClass('active')){
  //     }
  //     else {
  //         e.preventDefault();
  //         $(this).tab('show');
  //     }
  // });

  //  var table = $('#users').DataTable({
  //   "iDisplayLength": 200,
  //   "aLengthMenu": [[10, 25, 50, 100, 200, -1], [10, 25, 50, 100, 200, "All"]],
  //   "sDom": '<"top"i>rflt<"bottom"p><"clear">'
  // });

$.ajax({
  type : 'get',
  url : json_url+'.json',
  success: function(data) {

    jsondata = data;
    console.log(data)
    series = []


$(function () {
// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        margin: 75,
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Chart rotation demo'
    },
    subtitle: {
        text: 'Test options by dragging the sliders below'
    },
    plotOptions: {
        column: {
            depth: 30
        }
    },
    series: [{
        data: jsondata.total
    }]
});

        function showValues() {
                $('#R0-value').html(chart.options.chart.options3d.alpha);
                $('#R1-value').html(chart.options.chart.options3d.beta);
            }

        // Activate the sliders
        $('#R0').on('change', function () {
            chart.options.chart.options3d.alpha = this.value;
            showValues();
            chart.redraw(false);
        });
        $('#R1').on('change', function () {
            chart.options.chart.options3d.beta = this.value;
            showValues();
            chart.redraw(false);
        });
        showValues();
});


$(function () {
        $('#arearange').highcharts({
            chart: {
                renderTo: 'arearange',
                type: 'bar'
            },
            title: {
                text: 'TCS Associate Count'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Total'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' '
            },
            plotOptions: {
                bar: {pointWidth: 60,
                    dataLabels: {
                        enabled: true
                    },
                }
            },
            legend: {
                layout: 'horizontal ',
                align: 'right',
                verticalAlign: 'top',
                x:-200,
                y: 230,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Total',
                data: jsondata.total
            }]
        });
    });
    },
  });
});