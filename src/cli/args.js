const parseArgs = () => {
    const a = process.argv.reduce((acc, propName, i, arr) => {
        const value = arr[i + 1]
        return acc + (propName.startsWith('--') ? `${propName.replace('--', '')} is ${value}, ` : '')
    }, '').replace(/,\s$/, '')
    console.log(a)
};

parseArgs();