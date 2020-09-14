type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function () {
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        ctx = document.getElementById('lineChartExample').getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        myChart = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Active Users",
                    borderColor: "#f96332",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f96332",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                }]
            },
            options: gradientChartOptionsConfiguration
        });
    },

    initDashboardPageCharts: function () {

        gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: true
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: true
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(225,78,202,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: true
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 110,
                        padding: 20,
                        fontColor: "#ff8a76"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(220,53,69,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#ff8a76"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: true
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,242,195,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        };


        gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: true
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 120,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        };

        var ctx = document.getElementById("chartLinePurple").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

        var data = {
            labels: [
                'jan',
                'feb',
                'mar',
                'apr',
                'may',
                'jun',
                'jul',
                'aug',
                'sep',
                'oct',
                'nov',
                'dec'],
            datasets: [{
                label: 'Promotion (sales)',
                data: [
                    7783.20,
                    7773.37,
                    8253.18,
                    8427.14,
                    8087.94,
                    8509.40,
                    8257.99,
                    7926.83,
                    7917.81,
                    7646.745,
                    8163.89,
                    10490.79
                ],
                backgroundColor: "#00b6ed",
                borderColor: "#00b6ed",
                fill: false,
                lineTension: 0
            }, {
                label: 'No promotion (sales)',
                data: [
                    5592.60,
                    5748.05,
                    5806.24,
                    5855.30,
                    6301.32,
                    5871.99,
                    5753.07,
                    5680.40,
                    5529.55,
                    5845.74,
                    6257.74,
                    7318.43
                ],
                backgroundColor: "#eda600",
                borderColor: "#eda600",
                fill: false,
                lineTension: 0
            }]
        };

        var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipPurple
        });


        var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

        var gradientStroke = ctxGreen.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

        var data = {
            labels: [
                'jan',
                'feb',
                'mar',
                'apr',
                'may',
                'jun',
                'jul',
                'aug',
                'sep',
                'oct',
                'nov',
                'dec'],
            datasets: [{
                label: 'Assortment A (Sales)',
                data: [
                    6299.04,
                    6299.76,
                    6646.61,
                    6738.67,
                    6776.11,
                    6676.13,
                    6596.76,
                    6243.73,
                    6245.48,
                    6330.47,
                    6814.74,
                    8079.38
                ],
                backgroundColor: "#eda600",
                borderColor: "#eda600",
                fill: false,
                lineTension: 0
            },
                {
                    label: 'Assortment B (Sales)',
                    data: [
                        7580.06,
                        8290.55,
                        8593.67,
                        8738.91,
                        9131.07,
                        8999.65,
                        8852.00,
                        7949.79,
                        8254.68,
                        8616.47,
                        9139.94,
                        9685.26],
                    backgroundColor: "#00b6ed",
                    borderColor: "#00b6ed",
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Assortment C (Sales)',
                    data: [
                        6850.78,
                        6891.02,
                        7325.09,
                        7366.58,
                        7441.36,
                        7332.27,
                        7315.56,
                        7071.43,
                        6846.79,
                        6862.46,
                        7563.05,
                        9174.82
                    ],
                    backgroundColor: "#7e00ed",
                    borderColor: "#7e00ed",
                    fill: false,
                    lineTension: 0
                }]
        };

        var myChart = new Chart(ctxGreen, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen

        });


        var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];


        var ctx = document.getElementById("chartBig1").getContext('2d');

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "Sales",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 0.1,
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };


        var myChartData = new Chart(ctx, config);
        $("#0").click(function () {
            fetch("/trainingallstores?year=2013", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData.update();

                console.log("populated data." + myJson)

            });
        });
        $("#0").click();

        $("#1").click(function () {

            fetch("/trainingallstores?year=2014", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData.update();

                console.log("populated data." + myJson)

            });
            // var chart_data = [300, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];

        });

        $("#2").click(function () {
            fetch("/trainingallstores?year=2015", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData.update();

                console.log("populated data." + myJson)

            });
        });

        var ctxbig2 = document.getElementById("chartBig2").getContext('2d');

        // var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config2 = {
            type: 'bar',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "Sales",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 0.1,
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };


        var myChartData2 = new Chart(ctxbig2, config2);

        $("#3").click(function () {
            fetch("/salesbytype?type=a", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData2.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData2.update();

                console.log("populated data." + myJson)

            });
        });
        $("#3").click();
        $("#4").click(function () {

            fetch("/salesbytype?type=b", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData2.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData2.update();

                console.log("populated data." + myJson)

            });
            // var chart_data = [300, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];

        });

        $("#5").click(function () {
            fetch("/salesbytype?type=c", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);


                    // do something with "key" and "value" variables
                }

                var data = myChartData2.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData2.update();

                console.log("populated data." + myJson)

            });
        });
        var ctxbig3 = document.getElementById("chartBig3").getContext('2d');

        // var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config3 = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "Sales",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 0.1,
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };


        var myChartData3 = new Chart(ctxbig3, config3);
        $("#6").click(function () {
            fetch("/allstores", {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);

                }
                var ar = [labels,values], table = document.querySelector('table tbody');


                var r = ar[0].map(function(col, i) {
                    return ar.map(function(row) {
                        return row[i];
                    });
                });
                //Add data to table
                r.forEach(function(e) {
                    table.innerHTML += '<tr><td>' + e[0] + '</td><td>' + e[1] + '</td></tr>'
                });

                var data = myChartData3.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData3.update();

                console.log("populated data." + myJson)

            });
        });
        $("#6").click()

        var ctxbig4 = document.getElementById("singleStore").getContext('2d');

        // var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config4 = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "Sales",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 0.1,
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };


        fetch_data('1');
        var myChartData4 = new Chart(ctxbig4, config4);

        $('#predict-btn').click(function () {
            fetch_data(document.getElementById('store_num').value)
        });
        function fetch_data (num) {

            let url="/onestore?num="+num;
            console.log('url is '+ url);
            fetch(url, {
                method: 'GET',

            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                if (myJson !== null)
                // populateGraph(myJson);
                    values = [];
                labels = [];
                for (var key in myJson) {
                    labels.push(key);
                    values.push(myJson[key]);
                }

                var data = myChartData4.config.data;
                data.datasets[0].data = values;
                data.labels = labels;
                myChartData4.update();

                console.log("populated data." + myJson)

            });
        }



        var ctx = document.getElementById("CountryChart").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


        var myChart = new Chart(ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: true
            },
            data: {
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                    label: "Countries",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: '#1f8ef1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [53, 20, 10, 80, 100, 45],
                }]
            },
            options: gradientBarChartConfiguration
        });

    },

    initGoogleMaps: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#1d2c4d"
                }]
            },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8ec3b9"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1a3646"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#4b6878"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#64779e"
                    }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#4b6878"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#334e87"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#283d6a"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#6f9ba5"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#3C7680"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#304a7d"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#98a5be"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c6675"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#9d2a80"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#9d2a80"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#b0d5ce"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#98a5be"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#283d6a"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#3a4762"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#0e1626"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#4e6d70"
                    }]
                }
            ]
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function (from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "tim-icons icon-bell-55",
            message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    }

};