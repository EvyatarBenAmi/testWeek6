export function addSolveTime(player, seconds) {
    player.times.push(seconds);
};
export function showStats(player) {
    let totalTime = 0;
    player.times.forEach((count) => {
        totalTime += count;
    });
    let averageTime = totalTime / player.times.length;
    console.log(averageTime);
    console.log(totalTime);
};

export function measureSolveTime(fnAsk, riddleObj) {
    const timeStart = new Date().getTime() / 1000;
    fnAsk(riddleObj);
    const timeAfter = new Date().getTime() / 1000;
    return timeAfter - timeStart;
};
