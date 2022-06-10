module.exports = {
    logDate: function(string) {
        const date = new Date().toISOString().replace("T", " ").substring(0, 19);
        console.log("[" + date + "] " + string);
    }
}
