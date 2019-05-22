const { kebabCase } = require('lodash')

const formats = {
  phone: { width: 520, height: 920 },
  tablet: { width: 1070, height: 1180 },
  desktop: { width: 1800, height: 1180 }
}

const params = [
  { browser: 'chrome', format: 'phone', type: 'test', tags: 'phone' },
  { browser: 'chrome', format: 'phone', type: 'dev', tags: 'phone' },
  { browser: 'chrome', format: 'desktop', type: 'dev', tags: 'desktop' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'desktop' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Ben' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Martin' },
  { browser: 'chrome', format: 'phone', type: 'test', tags: 'Martin' },
  { browser: 'chrome', format: 'tablet', type: 'test', tags: 'Martin' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Smoke_dev' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Smoke_test' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Smoke_preprod' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'Smoke_prod' },
  { browser: 'chrome', format: 'phone', type: 'test', tags: 'Smoke' },
  { browser: 'chrome', format: 'tablet', type: 'test', tags: 'Smoke' },
  { browser: 'chrome', format: 'desktop', type: 'test', tags: 'UserResearch' },
  { browser: 'chrome', format: 'desktop', type: 'headless-test', tags: 'desktop' },
  { browser: 'chrome', format: 'tablet', type: 'dev', tags: 'tablet' },
  { browser: 'chrome', format: 'tablet', type: 'test', tags: 'tablet' },
  { browser: 'firefox', format: 'desktop', type: 'dev', tags: 'desktop' },
  { browser: 'firefox', format: 'desktop', type: 'test', tags: 'desktop' },
  { browser: 'firefox', format: 'desktop', type: 'test', tags: 'Smoke_dev' },
  { browser: 'firefox', format: 'desktop', type: 'test', tags: 'Smoke_test' },
  { browser: 'firefox', format: 'desktop', type: 'test', tags: 'Smoke_preprod' },
  { browser: 'firefox', format: 'desktop', type: 'test', tags: 'Smoke_prod' },
  { browser: 'ie', format: 'desktop', type: 'dev', tags: 'desktop' },
  { browser: 'ie', format: 'desktop', type: 'test', tags: 'desktop' }
]

const parameters = {}

console.log('Generating profiles >>>')
params.forEach(({ browser, format, type, tags }) => {
  const platform = `${browser}-${format}-${type}`
  const profileName = format === tags ? platform : `${platform}-${kebabCase(tags)}`
  const { width, height } = formats[format]
  const worldParameters = { platform, width, height }

  tags = tags.split(',')
    .map((tag) => `@${tag.trim()}`)
    .join(' ')

  const profile = `--tags ${tags} --world-parameters '${JSON.stringify(worldParameters)}'`
  console.log(`${profileName}: ${profile}`)
  parameters[profileName] = profile
})
console.log()

module.exports = parameters
