const loaded = async () => {
    const response = await fetch("set.mm");
    const data = await response.arrayBuffer();
    FS.writeFile("set.mm", new Uint8Array(data.buffer));
    Module.callMain([]);
}

const userInput = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("read set.mm"), 1000);
    })
}

var Module = {
    // Don't run main on page load
    noInitialRun: true,
    user_input: userInput,
    // When the module is ready
    onRuntimeInitialized: loaded,
};



