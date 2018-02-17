var Data = {
    type: 'scatter',
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    y: [56, 60, 61, 59,57,56,57,60,45,54,52,57,59,45,57,53,47,53,51,54,52,44,49,51,50,60,60,55,57,54,50],
    mode: 'lines+markers',
    name: 'Data',
    showlegend: true,
    hoverinfo: 'all',
    line: {
        color: 'blue',
        width: 2
    },
    marker: {
        color: 'blue',
        size: 8,
        symbol: 'circle'
    }
}

var Viol = {
    type: 'scatter',
    x: [22],
    y: [44],
    mode: 'markers',
    name: 'Violacion',
    showlegend: true,
    marker: {
        color: 'rgb(255,65,54)',
        line: {width: 3},
        opacity: 0.5,
        size: 12,
        symbol: 'circle-open'
    }
}
//linea graficados
var CL = {
    type: 'scatter',
    x: [0, 32, null, 0, 32],
    y: [45,45, null, 85, 85],//[LimiteInf, LinmiteSup]
    mode: 'lines',
    name: 'LI/LS',
    showlegend: true,
    line: {
        color: 'red',
        width: 2,
        dash: 'dash'
    }
}
//Limite Central
var Centre = {
    type: 'scatter',
    x: [0, 32],
    y: [65, 65],
    mode: 'lines',
    name: 'Limite Central',
    showlegend: true,
    line: {
        color: 'grey',
        width: 2
    }
}

var data = [Data, Viol, CL, Centre]

var layout = {
    title: 'Graficos de Control',
    xaxis: {
        zeroline: false,
        title: 'Numero de Muestra',
        showline: true
    },
    yaxis: {
        zeroline: false,
        range: [40, 90],

        title: 'Tiempo de Fraguado',
        showline: true
    }
}

Plotly.plot('myDiv', data, layout);