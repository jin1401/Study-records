# DFS

프로그래머스 - 네트워크  

https://school.programmers.co.kr/learn/courses/30/lessons/43162

### Solution
``` javascript
function solution(n, computers) {
    const visited = Array(n).fill(0);
    let count = 0;

    for(let i=0; i<visited.length; i++){
        if(visited[i]) continue;
        count++;
        dfs(computers, i, visited)
    }
    return count;
}

function dfs(graph, node, visited){
    visited[node] = 1;

    for(let i=0; i<graph[node].length; i++){
        if(graph[node][i] && !visited[i]){
            dfs(graph, i, visited)
        }
    }
}
```