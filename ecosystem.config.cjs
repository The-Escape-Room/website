module.exports = {
    apps: [
        {
            name: "The Escape Room Website",
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}