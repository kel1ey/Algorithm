const readline = require('readline');

const solution = (N, K, score) => {
  visited = Array(2*N).fill(false);
  robot = []

  let answer = 1;
  while(true){
    // [1] 회전
    visited.unshift(visited.pop());
    score.unshift(score.pop());
    robot = robot.map(i => i+1);

    // [2] 로봇 내리기
    if(robot[0]==N-1){
      robot.shift();
      visited[N-1] = false;
    }

    // 다음칸으로 이동
    for(i in robot){
      location = robot[i];
      if(!visited[location+1] && score[location+1] > 0){
        robot[i] ++;
        visited[location] = false;
        visited[location+1] = true;
        score[location+1] --;
      }
    }

    // 로봇 내리기
    if(robot[0]==N-1){
      robot.shift();
      visited[N-1] = false;
    }

    // [3] 로봇 올리기
    if(!visited[0] && score[0] > 0){
      robot.push(0);
      visited[0] = true;
      score[0]--;
    }

    // [4] 중지
    if(score.filter(s => s == 0).length >= K) break;
    answer ++;
  }

  return answer;
}


(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let row = 0;
    let input = [];
    for await (const line of rl) {
      row++;
      if(row == 1){
        input = [].concat(line.split(" "));
      }else{
        input.push(line.split(" "));
        console.log(solution(...input));
        rl.close();
      }
    }
    process.exit();
})();