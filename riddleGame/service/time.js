export function addSolveTime(player, seconds) {
    player.times.push(seconds);
};
export function showStats(player) {
    let totalTime = 0;
    for (let count of player.times) {
        totalTime += count;
    };
    let averageTime = totalTime / player.times.length;
    console.log(averageTime);
    console.log(totalTime);
};

export function measureSolveTime(fnAsk, riddleObj) {
    timeStart = new Date().getTime() / 1000;
    fnAsk(riddleObj);
    timeAfter = new Date().getTime() / 1000;
    console.log('time: ', timeAfter - timeStart);
};
