function solution(grid) {
    const sum = Array.from({length:9},()=> Array());
    
    let k=0;
    let tmp=0;
    for(let i=0; i<9; i++){
        let tmpSet = new Set(grid[i].sort());
        if(tmpSet.size === 9){        
        for(let j=0; j<9; j++){
               sum[k].push(grid[i][j]);
               (j+1)%3==0? k++ : k+=0;
        }
        (i+1)%3==0 ? tmp+=3: tmp+=0;
        k=tmp;
    }
    else 
    return false;
    }
    console.log(sum);
    }
temp=[[1,3,2,5,4,6,9,8,7], 
[4,6,5,8,7,9,3,2,1], 
[7,9,8,2,1,3,6,5,4], 
[9,2,1,4,3,5,8,7,6], 
[3,5,4,7,6,8,2,1,9], 
[6,8,7,1,9,2,5,4,3], 
[5,7,6,9,8,1,4,3,2], 
[2,4,3,6,5,7,1,9,8], 
[8,1,9,3,2,4,7,6,5]];
solution(temp)