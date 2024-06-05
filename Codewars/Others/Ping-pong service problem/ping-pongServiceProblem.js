function service(score){
    var scores = score.split(':');
    var sumScores = +scores[0] + +scores[1];
    return Math.floor(sumScores / (sumScores < 40 ? 5 : 2)) % 2 === 0 ? 'first' : 'second';
}