var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    function backtrack(current, remaining, visited){
        if(current.length === nums.length) {
            result.push([...current]);
        }

        for(let i = 0; i < remaining.length; i++){
            if(visited[i] || (i > 0 && remaining[i] === remaining[i - 1] && !visited[i - 1])) {
                continue;
            }

            current.push(remaining[i]);
            visited[i] = true;
            backtrack(current, remaining, visited);
            visited[i] = false;
            current.pop();
        }
    }
    backtrack([], nums, Array(nums.length).fill(false));
    return result;
};

//Example usage:
console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([1,2,3]));