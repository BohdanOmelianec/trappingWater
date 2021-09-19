const arr = [
    [3,3,3,3,3],
    [3,2,2,2,3],
    [3,2,1,2,3],
    [3,2,2,2,3],
    [3,3,3,3,3]];

const heightMap = [
  [8,9,1,8],
  [9,0,9,8],
  [9,4,6,8],
  [8,9,8,8],
  [9,9,9,9]
]
function trappingWater3D(arr) {
    let lmaxX = 0,
        rmaxX = 0,
        lmaxY = 0,
        rmaxY = 0,
        left = 0,
        water = 0;

    for(let i = 1; i < arr.length - 1; i++) {
        let right = arr[i].length - 1;

        while(left < right) {
            lmaxX = arr[i][left] >= lmaxX ? arr[i][left] : lmaxX;
            rmaxX = arr[i][right] >= rmaxX ? arr[i][right] : rmaxX;
            
            lmaxY = arr[i - 1][left] >= lmaxY ? arr[i - 1][left] : lmaxY;
            rmaxY = arr[i + 1][left] >= rmaxY ? arr[i + 1][left] : rmaxY;
            
            if(lmaxX > rmaxX) {
                water += Math.min(rmaxX, lmaxY, rmaxY) < arr[i][right] ? 0 : Math.min(rmaxX, lmaxY, rmaxY) - arr[i][right];
                right--;
            } else {
                water += Math.min(lmaxX, lmaxY, rmaxY) < arr[i][left] ? 0 : Math.min(lmaxX, lmaxY, rmaxY) - arr[i][left];
                left++;
            }
        }  
        left = 0;
        right = arr.length - 1;
    }
    return water;
}


function trappingWater2D(arr) {
    let lmax = 0,
        rmax = 0,
        left = 0,
        right = arr.length - 1,
        water = 0;

    while(left < right) {
        lmax = arr[left] >= lmax ? arr[left] : lmax;
        rmax = arr[right] >= rmax ? arr[right] : rmax;
        
        if(lmax > rmax) {
            water += rmax - arr[right];
            right--;
        } else {
            water += lmax - arr[left];
            left++;
        }    
    }
    return water;
}
