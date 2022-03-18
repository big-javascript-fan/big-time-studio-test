function main() {
    let arr = [[ 1, 2, 3, 4 ],
                [ 5, 6, 7, 8 ],
                [ 9, 10, 11, 12 ],
                [ 13, 14, 15, 16 ]];
    let numRows = 4;
    let numColumns = 4;

    const result = buildStringFromMatrix(numRows, numColumns, arr);
    console.log('result string - ', result);
}

function buildStringFromMatrix(m, n, arr)
{
    let result = '';
    let i, k = 0, l = 0;
 
    let cnt = 0;
    let total = m * n;
    while (k < m && l < n)
    {
        if (cnt == total)
            break;
 
        for (i = k; i < m; ++i)
        {
            result += (arr[i][l] + " ");
            cnt++;
        }
        l++;
 
        if (cnt == total)
            break;
 
        for (i = l; i < n; ++i)
        {
            result += (arr[m - 1][i] + " ");
            cnt++;
        }
        m--;
 
        if (cnt == total)
            break;
 
        if (k < m)
        {
            for (i = m - 1; i >= k; --i)
            {
                result += (arr[i][n - 1] + " ");
                cnt++;
            }
            n--;
        }
 
        if (cnt == total)
            break;
 
        if (l < n)
        {
            for (i = n - 1; i >= l; --i)
            {
                result += (arr[k][i] + " ");
                cnt++;
            }
            k++;
        }
    }

    return result;
}

main();