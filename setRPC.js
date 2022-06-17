let RPC

function setRPC(data, ) {
    const clientID = "987186404129914920"
    const DiscordRPC = require('discord-rpc');
    RPC = new DiscordRPC.Client({ transport: 'ipc' });
    DiscordRPC.register(clientID);

    async function setActivity() {
        if (!RPC) return
        data['startTimestamp'] = Date.now()
        RPC.setActivity(data);
    }

    RPC.on('ready', () => {
        setActivity().catch((err) => {console.log(err)})
    })

    RPC.login({clientId: clientID}).catch((err) => {console.log(err)});
}


async function deleteRPC() {
    if (!RPC) return
    await RPC.clearActivity();
}

module.exports = {
    setRPC: setRPC,
    deleteRPC: deleteRPC
}