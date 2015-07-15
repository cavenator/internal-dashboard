AmCharts.themes.cj = {

    themeName: "cj",

    AmChart: {
        fontFamily: "Lato",
        addClassNames: true,
        fontSize: 12,
        color: "#858585", 
        backgroundColor: "#FFFFFF",
        pathToImages: "/member/javascript/lib/amcharts/images/"
    },

    AmCoordinateChart: {
        colors: ["#00AF66", "#FF7F41", "#7C6992", "#AA8066", "#49C5B1", "#34657F", "#FFB500"]
    },

    AmSlicedChart: {
        colors: ["#FF7F41", "#7C6992", "#AA8066", "#49C5B1", "#34657F", "#FFB500"],
        outlineAlpha: 1,
        outlineThickness: 2,
        labelTickColor: "#000000",
        labelTickAlpha: 0.3
    },

    AmRectangularChart: {
        zoomOutButtonColor: '#000000',
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: "lens.png"
    },

    AxisBase: {
        axisColor: "#999999",
        dashLength: 1,
        axisAlpha: 0,
        gridAlpha: 0.1,
        gridColor: "#000000"
    },

    ChartScrollbar: {
        scrollbarHeight: 50,
        color: "#CBCBCB",
        backgroundAlpha: .4,
        backgroundColor: "#CCC",
        graphFillColor: "#F5F5F5",
        graphFillAlpha: 0.2,
        graphLineAlpha: 0.5,
        selectedBackgroundAlpha: 1,
        selectedBackgroundColor: "#F6F6F6",
        selectedGraphLineColor: "#CBCBCB",
        selectedGraphFillColor: "#EEEEEE",
        selectedGraphFillAlpha: 1,
        selectedGraphLineAlpha: 1,
        gridAlpha: 0.2,
        gridColor: "#FFFFFF",
        autoGridCount:false,
        dragIconHeight: 28,
    },

    ChartCursor: {
        cursorColor: "#585858",
        color: "#FFFFFF",
        cursorAlpha: 0.5
    },

    Balloon: {
        borderAlpha: 0.5,
        shadowAlpha: 1
    },

    AmLegend: {
        color: "#858585",
        position: "top"
    },

    AmGraph: {
        lineAlpha: 0.6, 
        lineThickness: 1
    },

    GaugeArrow: {
        color: "#000000",
        alpha: 0.8,
        nailAlpha: 0,
        innerRadius: "40%",
        nailRadius: 15,
        startWidth: 15,
        borderAlpha: 0.8,
        nailBorderAlpha: 0
    },

    GaugeAxis: {
        tickColor: "#000000",
        tickAlpha: 1,
        tickLength: 15,
        minorTickLength: 8,
        axisThickness: 3,
        axisColor: '#000000',
        axisAlpha: 1,
        bandAlpha: 0.8
    },

    TrendLine: {
        lineColor: "#00AF66",
        lineAlpha: 0.8
    },

    // is this necessary?
    AmStockChart: {
        colors: ["#FF7F41", "#7C6992", "#AA8066", "#49C5B1", "#34657F", "#FFB500"]
    }
};