/** @format */

module.exports = (api) => {
  api.cache(true)

  const out = {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          targets: '> 0.25%, not dead',
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false
        }
      ],
      '@babel/preset-typescript'
    ]
  }

  return out
}
