import ng from 'angular';
import _ from 'lodash';

const app = ng.module('app', []);

app.controller('MainCtrl', ($scope, $timeout) => {
    const size = 5;

    $scope.board = [];

    for(let i = 0; i < size; i++){
        $scope.board.push(Array(size).fill(true));
    }

    const everyCell = (cb) => $scope.board.every(row => row.every(cb));

    const checkIfWin = () => {
        $timeout(() => {
            if(everyCell(cell => cell) || everyCell(cell => !cell)){
                alert('You win!');
            }
        }, 500);
    };

    $scope.invert = (x, y) => {
        $scope.board[y][x] = !$scope.board[y][x];

        for(const row of $scope.board){
            row[x] = !row[x];
        }

        const row = $scope.board[y];
        for(let i = 0, len = row.length; i < len; i++) {
            row[i] = !row[i];
        }
        checkIfWin();
    };

    let clicks = [];
    for(let i = 0; i < size * size; i++){
        clicks.push([~~(i / size), i % size]);
    }

    clicks = _.shuffle(clicks);
    clicks.length = ~~(size * size / 2);

    for(const args of clicks) {
        $scope.invert(...args);
    }
});