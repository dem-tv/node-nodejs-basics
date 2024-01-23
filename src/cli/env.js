const parseEnv = () => {
  const e = Object.entries(process.env).reduce((acc, [key, value]) => {
    return acc + (key.startsWith('RSS_') ? `${key}=${value}; ` : '')
  }, '').replace(/;\s$/, '')
  console.log(e)
};

parseEnv();