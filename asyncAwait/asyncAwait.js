const SayHello = () => {
    console.log("testing hello ");
};

/****************/
const SyncTenSeconds = () => {
    return setTimeout(function () {
        console.log("Ten Seconds");
    }, 10000);
};

const SyncFiveSeconds = () => {
    return setTimeout(function () {
        console.log("Five Seconds");
    }, 5000);
};

const SyncThreeSeconds = () => {
    return setTimeout(function () {
        console.log("Three Seconds");
    }, 3000);
};

const SyncOneSecond = () => {
    return setTimeout(function () {
        console.log("One Second");
    }, 1000);
};
/****************/

const TenSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Ten Seconds");
        }, 10000);
    });
};

const FiveSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Five Seconds");
        }, 5000);
    });
};

const ThreeSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Three Seconds");
        }, 3000);
    });
};

const OneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("One Second");
        }, 1000);
    });
};

const RunAllFunctions = () => {
    console.log("10 ");
    SyncTenSeconds();
    console.log("5 ");
    SyncFiveSeconds();
    console.log("3 ");
    SyncThreeSeconds();
    console.log("1 ");
    SyncOneSecond();
};

RunAllFunctions();

async function a() {
    // await SayHello();
    let a = await TenSeconds();
    console.log("10 --");
    let b = await FiveSeconds();
    console.log("5 --");
    let c = await ThreeSeconds();
    console.log("3 --");
    let d = await OneSecond();
    console.log("1 --");

    console.log("Ten -", a);
    console.log("Five -", b);
    console.log("Three -", c);
    console.log("One -", d);
}

a();
