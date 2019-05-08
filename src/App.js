import { Line } from 'react-chartjs-2';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


let dauDataset = {
    labels: [],
    datasets: [
        {
            label: 'Unique daily users',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let podDataset = {
    labels: [],
    datasets: [
        {
            label: 'Pods sold per day',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let breedDataset = {
    labels: [],
    datasets: [
        {
            label: 'Axies bred per day',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let cumulBuyerDataset = {
    labels: [],
    datasets: [
        {
            label: 'Cumulative unique buyers',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let cumulBattleDataset = {
    labels: [],
    datasets: [
        {
            label: 'Cumulative battle count',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let breedDatasetCumul = {
    labels: [],
    datasets: [
        {
            label: 'Axies bred per day Cumul',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let streamerDataset = {
    labels: [],
    datasets: [
        {
            label: 'Streamers advertising axie',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};

let counter = 0;
//'https://cors-anywhere.herokuapp.com/' +
function fetchDauData() {
    fetch( 'https://hidden-island-35169.herokuapp.com/api/dailyDau')
        .then(res => res.json())
        .then(dauData => {
            dauData.forEach(element => {
                var date = new Date(element._id * 1000);
                dauDataset.labels.push(date.toDateString().substring(4))

                dauDataset.datasets[0].data.push(element.Count);
            });
            //ReactDOM.render(<Graph graphData={dauDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });
    fetch('https://hidden-island-35169.herokuapp.com/api/dailyPods')
        .then(res => res.json())
        .then(podData => {
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                podDataset.labels.push(date.toDateString().substring(4))

                podDataset.datasets[0].data.push(element.Count);
            });
            //ReactDOM.render(<Graph graphData={podDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });
    fetch( 'https://hidden-island-35169.herokuapp.com/api/dailyBreeds')
        .then(res => res.json())
        .then(podData => {
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                breedDataset.labels.push(date.toDateString().substring(4));

                breedDataset.datasets[0].data.push(element.Count);
            });
            //ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });
    fetch('https://hidden-island-35169.herokuapp.com/api/cumulUniqueBuyers')
        .then(res => res.json())
        .then(podData => {
            var cumul = 0;
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                cumulBuyerDataset.labels.push(date.toDateString().substring(4));
                cumul += element.Count;
                cumulBuyerDataset.datasets[0].data.push(cumul);
            });
            //ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });
    fetch('https://hidden-island-35169.herokuapp.com/api/cumulDailyBattles')
        .then(res => res.json())
        .then(podData => {
            var cumul = 0;
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                cumulBattleDataset.labels.push(date.toDateString().substring(4));
                cumul += element.Count;
                cumulBattleDataset.datasets[0].data.push(cumul);
            });
            //ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });

    fetch('https://hidden-island-35169.herokuapp.com/api/dailyBreedsCumul')
        .then(res => res.json())
        .then(podData => {
            var cumul = 0;
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                breedDatasetCumul.labels.push(date.toDateString().substring(4));
                cumul += element.Count;
                breedDatasetCumul.datasets[0].data.push(cumul);
            });
            //ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });

    fetch('https://hidden-island-35169.herokuapp.com/api/dailyStreamers')
        .then(res => res.json())
        .then(streamData => {
            var cumul = 0;
            streamData.forEach(element => {
                var date = new Date(element._id * 1000);
                streamerDataset.labels.push(date.toDateString().substring(4));
                //cumul += element.list.length;
                streamerDataset.datasets[0].data.push(element.list.length);
            });
            //ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
            updateDataLoaded();
        });

    //ReactDOM.render(<Graph />, document.getElementById('root'));
}

function updateDataLoaded() {
    counter++;
    if (counter === 7) ReactDOM.render(<Graph graphData={breedDataset} />, document.getElementById('root'));
}

function fetchPodData() {
    fetch('https://hidden-island-35169.herokuapp.com/api/dailyPods')
        .then(res => res.json())
        .then(podData => {
            podData.forEach(element => {
                var date = new Date(element._id * 1000);
                podDataset.labels.push(date.toDateString())

                podDataset.datasets[0].data.push(element.Count);
            });
            ReactDOM.render(<Graph graphData={podDataset} />, document.getElementById('root'));
        });
}


class Graph extends Component {
    render() {
        return (
            <div>
                <Line className="lineGraph"
                    data={dauDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={podDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={breedDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={cumulBuyerDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={cumulBattleDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={breedDatasetCumul}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
                <Line className="lineGraph"
                    data={streamerDataset}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
            </div>
        )
    }
}

export { Graph, fetchDauData, fetchPodData };
