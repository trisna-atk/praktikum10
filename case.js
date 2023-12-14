//producing promise
const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Menyiapkan Bahan... ")
        }, 3000)
    })
}


const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve("Merebus Air... ")
        }, 7000)
    })
}

const masak = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Masak Mie ... ")
        }, 5000)
    })
}

//consuming promise
const main = () => {
    persiapan()
        .then((res) => {
            console.log(res)
            return rebusAir()
        })
        .then((res) => {
            console.log(res)
            return masak()
        })
        .then((res) => {
            console.log(res)
        })
}

const second = async () => {
    const hasilPersiapan = await persiapan()
    console.log(hasilPersiapan)

    const hasilRebusAir = await rebusAir()
    console.log(hasilRebusAir)

    const hasilMasak = await masak()
    console.log(hasilMasak)
}

second()